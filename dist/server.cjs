var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var app = (0, import_express.default)();
var PORT = Number(process.env.PORT) || 3e3;
app.use(import_express.default.json());
var applicationsStore = /* @__PURE__ */ new Map();
var demoApp = {
  referenceCode: "VNV-2026-883921",
  visaType: "tourist_30_single",
  purpose: "tourism",
  entryDate: "2026-08-15",
  exitDate: "2026-09-10",
  arrivalPort: "noi_bai",
  processingTime: "standard",
  extraServices: ["fast_track"],
  applicants: [
    {
      id: "app-1",
      fullName: "JOHN MICHAEL SMITH",
      gender: "male",
      dateOfBirth: "1988-05-14",
      nationality: "United States",
      passportNumber: "N98234101",
      passportExpiry: "2031-10-20"
    }
  ],
  contactEmail: "john.smith@example.com",
  contactPhone: "+1 415 555 0192",
  contactAddress: "InterContinental Westlake, Hanoi, Vietnam",
  specialNotes: "First time visiting Vietnam.",
  governmentFeePerPerson: 25,
  serviceFeePerPerson: 15,
  speedFeePerPerson: 0,
  extraServicesTotal: 20,
  totalAmountUsd: 60,
  totalAmountVnd: 1527e3,
  paymentStatus: "paid",
  paymentMethod: "card",
  paymentTransactionId: "TXN-99812401",
  applicationStatus: "approved",
  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
  estimatedApprovalDate: "2026-08-10",
  approvalLetterUrl: "APPROVED"
};
applicationsStore.set(demoApp.referenceCode, demoApp);
app.post("/api/visa/apply", (req, res) => {
  try {
    const data = req.body;
    const randomNum = Math.floor(1e5 + Math.random() * 9e5);
    const referenceCode = `VNV-${(/* @__PURE__ */ new Date()).getFullYear()}-${randomNum}`;
    const now = /* @__PURE__ */ new Date();
    const estDate = /* @__PURE__ */ new Date();
    if (data.processingTime === "super_emergency_1h") {
      estDate.setHours(estDate.getHours() + 1);
    } else if (data.processingTime === "emergency_4h") {
      estDate.setHours(estDate.getHours() + 4);
    } else if (data.processingTime === "urgent_24h") {
      estDate.setDate(estDate.getDate() + 1);
    } else {
      estDate.setDate(estDate.getDate() + 3);
    }
    const newApp = {
      referenceCode,
      visaType: data.visaType || "tourist_30_single",
      purpose: data.purpose || "tourism",
      entryDate: data.entryDate || "",
      exitDate: data.exitDate || "",
      arrivalPort: data.arrivalPort || "noi_bai",
      processingTime: data.processingTime || "standard",
      extraServices: data.extraServices || [],
      applicants: data.applicants || [],
      contactEmail: data.contactEmail || "",
      contactPhone: data.contactPhone || "",
      contactAddress: data.contactAddress || "",
      specialNotes: data.specialNotes || "",
      governmentFeePerPerson: data.governmentFeePerPerson || 25,
      serviceFeePerPerson: data.serviceFeePerPerson || 15,
      speedFeePerPerson: data.speedFeePerPerson || 0,
      extraServicesTotal: data.extraServicesTotal || 0,
      totalAmountUsd: data.totalAmountUsd || 40,
      totalAmountVnd: data.totalAmountVnd || 1018e3,
      paymentStatus: "pending",
      applicationStatus: "payment_pending",
      createdAt: now.toISOString(),
      estimatedApprovalDate: estDate.toISOString().split("T")[0]
    };
    applicationsStore.set(referenceCode, newApp);
    return res.json({ success: true, application: newApp });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || "Server error creating application" });
  }
});
app.get("/api/visa/track", (req, res) => {
  const code = (req.query.code || "").trim().toUpperCase();
  const email = (req.query.email || "").trim().toLowerCase();
  if (!code && !email) {
    return res.status(400).json({ success: false, message: "Please provide reference code or email." });
  }
  let found;
  if (code) {
    found = applicationsStore.get(code);
    if (!found) {
      for (const appItem of applicationsStore.values()) {
        const matchesPassport = appItem.applicants.some(
          (a) => a.passportNumber.toUpperCase() === code
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
  return res.status(404).json({ success: false, message: "Application not found with provided reference code." });
});
app.post("/api/visa/pay", (req, res) => {
  const { referenceCode, paymentMethod } = req.body;
  if (!referenceCode) {
    return res.status(400).json({ success: false, message: "Reference code is required" });
  }
  const appItem = applicationsStore.get(referenceCode);
  if (!appItem) {
    return res.status(404).json({ success: false, message: "Application not found" });
  }
  appItem.paymentStatus = "paid";
  appItem.paymentMethod = paymentMethod || "card";
  appItem.paymentTransactionId = `TXN-${Math.floor(1e7 + Math.random() * 9e7)}`;
  appItem.applicationStatus = "in_review";
  setTimeout(() => {
    appItem.applicationStatus = "approved";
    appItem.approvalLetterUrl = `APPROVED-${referenceCode}`;
  }, 1200);
  applicationsStore.set(referenceCode, appItem);
  return res.json({
    success: true,
    message: "Payment verified successfully.",
    application: appItem
  });
});
app.post("/api/contact", (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message, nationality, timezone } = req.body;
    console.log(`Received contact message from ${firstName} ${lastName} (${email}): [${subject}] ${message}`);
    return res.json({
      success: true,
      message: "Contact inquiry received successfully. Support team will respond shortly."
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || "Server error processing contact inquiry" });
  }
});
app.post("/api/ai-chat", async (req, res) => {
  try {
    const { prompt, language = "en" } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const fallbackMsg = language === "vi" ? `T\xF4i l\xE0 Tr\u1EE3 l\xFD Visa Vi\u1EC7t Nam. Theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh:
1. H\u1ED9 chi\u1EBFu c\u1EE7a b\u1EA1n ph\u1EA3i c\xF2n h\u1EA1n \xEDt nh\u1EA5t 6 th\xE1ng k\u1EC3 t\u1EEB ng\xE0y nh\u1EADp c\u1EA3nh.
2. e-Visa Vi\u1EC7t Nam c\xF3 gi\xE1 tr\u1ECB t\u1ED1i \u0111a 90 ng\xE0y (1 l\u1EA7n ho\u1EB7c nhi\u1EC1u l\u1EA7n).
3. C\xF4ng d\xE2n c\xE1c n\u01B0\u1EDBc nh\u01B0 Anh, \u0110\u1EE9c, Ph\xE1p, Nh\u1EADt B\u1EA3n, H\xE0n Qu\u1ED1c \u0111\u01B0\u1EE3c mi\u1EC5n th\u1ECB th\u1EF1c 45 ng\xE0y.
B\u1EA1n c\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm th\xF4ng tin g\xEC v\u1EC1 th\u1EE7 t\u1EE5c ho\u1EB7c lo\u1EA1i visa c\u1EE5 th\u1EC3?` : `I am your Vietnam Visa Assistant. Key Vietnam visa regulations:
1. Passport must be valid for at least 6 months from arrival date.
2. Vietnam e-Visa is valid for up to 90 days (Single or Multiple entry).
3. Passport holders from UK, Germany, France, Japan, South Korea enjoy 45-day visa exemption.
How can I help you with your visa application today?`;
      return res.json({ text: fallbackMsg });
    }
    const ai = new import_genai.GoogleGenAI({ apiKey });
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
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    return res.json({ text: response.text || "Thank you for your inquiry. Please check official guidelines." });
  } catch (err) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({
      text: "I am available to answer questions about Vietnam Visa rules, passport requirements, and processing times. Please try again or ask our 24/7 support line."
    });
  }
});
app.get("/sitemap.xml", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const now = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const pages = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/apply-online", priority: "0.9", changefreq: "daily" },
    { loc: "/fee-calculator", priority: "0.8", changefreq: "weekly" },
    { loc: "/visa-requirements", priority: "0.9", changefreq: "weekly" },
    { loc: "/track-application", priority: "0.8", changefreq: "always" },
    { loc: "/faqs", priority: "0.7", changefreq: "weekly" },
    { loc: "/contact-us", priority: "0.6", changefreq: "monthly" }
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(
    (page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n")}
</urlset>`;
  res.header("Content-Type", "application/xml");
  return res.send(xml);
});
app.get("/robots.txt", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const robots = `User-agent: *
Allow: /
Allow: /apply-online
Allow: /fee-calculator
Allow: /visa-requirements
Allow: /track-application
Allow: /faqs
Allow: /contact-us

Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;
  res.header("Content-Type", "text/plain");
  return res.send(robots);
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
