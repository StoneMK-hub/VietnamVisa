import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { VisaApplication } from './src/types';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for applications (initialized with sample demo application)
const applicationsStore: Map<string, VisaApplication> = new Map();

// Insert initial demo application
const demoApp: VisaApplication = {
  referenceCode: 'VNV-2026-883921',
  visaType: 'tourist_30_single',
  purpose: 'tourism',
  entryDate: '2026-08-15',
  exitDate: '2026-09-10',
  arrivalPort: 'noi_bai',
  processingTime: 'standard',
  extraServices: ['fast_track'],
  applicants: [
    {
      id: 'app-1',
      fullName: 'JOHN MICHAEL SMITH',
      gender: 'male',
      dateOfBirth: '1988-05-14',
      nationality: 'United States',
      passportNumber: 'N98234101',
      passportExpiry: '2031-10-20'
    }
  ],
  contactEmail: 'john.smith@example.com',
  contactPhone: '+1 415 555 0192',
  contactAddress: 'InterContinental Westlake, Hanoi, Vietnam',
  specialNotes: 'First time visiting Vietnam.',
  governmentFeePerPerson: 25,
  serviceFeePerPerson: 15,
  speedFeePerPerson: 0,
  extraServicesTotal: 20,
  totalAmountUsd: 60,
  totalAmountVnd: 1527000,
  paymentStatus: 'paid',
  paymentMethod: 'card',
  paymentTransactionId: 'TXN-99812401',
  applicationStatus: 'approved',
  createdAt: new Date().toISOString(),
  estimatedApprovalDate: '2026-08-10',
  approvalLetterUrl: 'APPROVED'
};
applicationsStore.set(demoApp.referenceCode, demoApp);

// API 1: Create Application
app.post('/api/visa/apply', (req, res) => {
  try {
    const data: Partial<VisaApplication> = req.body;
    
    // Generate unique reference code
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceCode = `VNV-${new Date().getFullYear()}-${randomNum}`;
    
    const now = new Date();
    const estDate = new Date();
    if (data.processingTime === 'super_emergency_1h') {
      estDate.setHours(estDate.getHours() + 1);
    } else if (data.processingTime === 'emergency_4h') {
      estDate.setHours(estDate.getHours() + 4);
    } else if (data.processingTime === 'urgent_24h') {
      estDate.setDate(estDate.getDate() + 1);
    } else {
      estDate.setDate(estDate.getDate() + 3);
    }

    const newApp: VisaApplication = {
      referenceCode,
      visaType: data.visaType || 'tourist_30_single',
      purpose: data.purpose || 'tourism',
      entryDate: data.entryDate || '',
      exitDate: data.exitDate || '',
      arrivalPort: data.arrivalPort || 'noi_bai',
      processingTime: data.processingTime || 'standard',
      extraServices: data.extraServices || [],
      applicants: data.applicants || [],
      contactEmail: data.contactEmail || '',
      contactPhone: data.contactPhone || '',
      contactAddress: data.contactAddress || '',
      specialNotes: data.specialNotes || '',
      
      governmentFeePerPerson: data.governmentFeePerPerson || 25,
      serviceFeePerPerson: data.serviceFeePerPerson || 15,
      speedFeePerPerson: data.speedFeePerPerson || 0,
      extraServicesTotal: data.extraServicesTotal || 0,
      totalAmountUsd: data.totalAmountUsd || 40,
      totalAmountVnd: data.totalAmountVnd || 1018000,
      
      paymentStatus: 'pending',
      applicationStatus: 'payment_pending',
      createdAt: now.toISOString(),
      estimatedApprovalDate: estDate.toISOString().split('T')[0]
    };

    applicationsStore.set(referenceCode, newApp);
    return res.json({ success: true, application: newApp });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || 'Server error creating application' });
  }
});

// API 2: Track Application
app.get('/api/visa/track', (req, res) => {
  const code = (req.query.code as string || '').trim().toUpperCase();
  const email = (req.query.email as string || '').trim().toLowerCase();

  if (!code && !email) {
    return res.status(400).json({ success: false, message: 'Please provide reference code or email.' });
  }

  let found: VisaApplication | undefined;

  if (code) {
    found = applicationsStore.get(code);
    if (!found) {
      // Check if code matches applicant passport number
      for (const appItem of applicationsStore.values()) {
        const matchesPassport = appItem.applicants.some(
          a => a.passportNumber.toUpperCase() === code
        );
        if (matchesPassport) {
          found = appItem;
          break;
        }
      }
    }
  } else if (email) {
    for (const appItem of applicationsStore.values()) {
      if (appItem.contactEmail.toLowerCase() === email) {
        found = appItem;
        break;
      }
    }
  }

  if (found) {
    return res.json({ success: true, application: found });
  }

  return res.status(404).json({ success: false, message: 'Application not found with provided reference code.' });
});

// API 3: Simulate Payment Process
app.post('/api/visa/pay', (req, res) => {
  const { referenceCode, paymentMethod } = req.body;
  if (!referenceCode) {
    return res.status(400).json({ success: false, message: 'Reference code is required' });
  }

  const appItem = applicationsStore.get(referenceCode);
  if (!appItem) {
    return res.status(404).json({ success: false, message: 'Application not found' });
  }

  appItem.paymentStatus = 'paid';
  appItem.paymentMethod = paymentMethod || 'card';
  appItem.paymentTransactionId = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;
  appItem.applicationStatus = 'in_review';

  // Automatically mark approved for demo experience
  setTimeout(() => {
    appItem.applicationStatus = 'approved';
    appItem.approvalLetterUrl = `APPROVED-${referenceCode}`;
  }, 1200);

  applicationsStore.set(referenceCode, appItem);

  return res.json({
    success: true,
    message: 'Payment verified successfully.',
    application: appItem
  });
});

// API 3.5: Contact Inquiry Submission
app.post('/api/contact', (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message, nationality, timezone } = req.body;
    console.log(`Received contact message from ${firstName} ${lastName} (${email}): [${subject}] ${message}`);
    
    return res.json({
      success: true,
      message: 'Contact inquiry received successfully. Support team will respond shortly.'
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || 'Server error processing contact inquiry' });
  }
});

// API 4: Gemini AI Visa Assistant
app.post('/api/ai-chat', async (req, res) => {
  try {
    const { prompt, language = 'en' } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not configured
      const fallbackMsg = language === 'vi'
        ? `Tôi là Trợ lý Visa Việt Nam. Theo quy định hiện hành:\n1. Hộ chiếu của bạn phải còn hạn ít nhất 6 tháng kể từ ngày nhập cảnh.\n2. e-Visa Việt Nam có giá trị tối đa 90 ngày (1 lần hoặc nhiều lần).\n3. Công dân các nước như Anh, Đức, Pháp, Nhật Bản, Hàn Quốc được miễn thị thực 45 ngày.\nBạn cần hỗ trợ thêm thông tin gì về thủ tục hoặc loại visa cụ thể?`
        : `I am your Vietnam Visa Assistant. Key Vietnam visa regulations:\n1. Passport must be valid for at least 6 months from arrival date.\n2. Vietnam e-Visa is valid for up to 90 days (Single or Multiple entry).\n3. Passport holders from UK, Germany, France, Japan, South Korea enjoy 45-day visa exemption.\nHow can I help you with your visa application today?`;
      return res.json({ text: fallbackMsg });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `You are the Official Vietnam Visa AI Expert & Legal Facilitator Consultant for the Vietnam Visa Online Portal (vietnamvisa.govt.vn).
You speak fluently in English, Vietnamese, French, German, Japanese, and Chinese based on the user's language request.
Your role:
- Answer questions accurately regarding Vietnam e-Visa policies (Law No. 23/2023/QH15 on Entry, Exit, Transit, and Residence of Foreigners in Vietnam).
- Explain passport validity requirements (> 6 months validity, at least 2 blank pages).
- Clarify 45-day Visa Exemptions for 13 countries (UK, Germany, France, Italy, Spain, Japan, South Korea, Russia, Denmark, Sweden, Norway, Finland, Belarus) and 30-day exemption for ASEAN nations.
- Explain 90-day e-Visa eligibility for all countries and territories.
- Detail urgent 1-hour/4-hour emergency processing options for missed flight situations.
- Explain airport fast-track procedures and landing ports (Noi Bai, Tan Son Nhat, Da Nang, Cam Ranh, Phu Quoc).
- Keep responses professional, clear, reassuring, structured with bullet points where necessary.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return res.json({ text: response.text || 'Thank you for your inquiry. Please check official guidelines.' });
  } catch (err: any) {
    console.error('Gemini API Error:', err);
    return res.status(500).json({
      text: 'I am available to answer questions about Vietnam Visa rules, passport requirements, and processing times. Please try again or ask our 24/7 support line.'
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
