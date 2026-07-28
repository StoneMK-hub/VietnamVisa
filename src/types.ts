export type Language = 'en' | 'vi' | 'fr' | 'de' | 'ja' | 'zh';

export type VisaType = 
  | 'tourist_30_single'
  | 'tourist_30_multi'
  | 'tourist_90_single'
  | 'tourist_90_multi'
  | 'business_30_single'
  | 'business_90_multi';

export type PurposeOfVisit = 'tourism' | 'business' | 'transit' | 'family';

export type ProcessingTime = 
  | 'standard'         // Normal 5-10 working days
  | 'urgent_24h'       // 2 working days
  | 'emergency_4h';     // 1 working day

export type ArrivalPort = 
  | 'noi_bai'          // Noi Bai Intl Airport (Hanoi)
  | 'tan_son_nhat'     // Tan Son Nhat Intl Airport (HCMC)
  | 'da_nang'          // Da Nang Intl Airport
  | 'cam_ranh'         // Cam Ranh Intl Airport (Nha Trang)
  | 'phu_quoc'         // Phu Quoc Intl Airport
  | 'cat_bi'           // Cat Bi Intl Airport (Hai Phong)
  | 'can_tho'          // Can Tho Intl Airport
  | 'landport_huu_nghi'// Huu Nghi Border Gate
  | 'landport_moc_bai' // Moc Bai Border Gate
  | 'seaport_saigon'   // Saigon Seaport;

export type ExtraService = 
  | 'fast_track'         // Fast-track immigration assistant at airport
  | 'vip_fast_track'     // VIP fast-track + luggage handling
  | 'car_pickup'         // Private airport transfer to hotel
  | 'stamp_guarantee'    // Pre-paid stamping fee & express line guarantee
  | 'travel_insurance';  // Vietnam Travel Health Insurance cover

export interface Applicant {
  id: string;
  fullName: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  passportPhotoUrl?: string;
  portraitPhotoUrl?: string;
}

export interface VisaApplication {
  referenceCode: string;
  visaType: VisaType;
  purpose: PurposeOfVisit;
  entryDate: string;
  exitDate: string;
  arrivalPort: ArrivalPort;
  processingTime: ProcessingTime;
  extraServices: ExtraService[];
  applicants: Applicant[];
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  specialNotes?: string;
  
  // Pricing breakdown
  governmentFeePerPerson: number;
  serviceFeePerPerson: number;
  speedFeePerPerson: number;
  extraServicesTotal: number;
  totalAmountUsd: number;
  totalAmountVnd: number;
  
  // Payment & Status
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentMethod?: 'card' | 'paypal' | 'vietqr' | 'momo';
  paymentTransactionId?: string;
  applicationStatus: 'submitted' | 'payment_pending' | 'in_review' | 'approved' | 'issued';
  createdAt: string;
  estimatedApprovalDate: string;
  approvalLetterUrl?: string;
}

export interface CountryRequirement {
  code: string;
  countryName: string;
  countryNameVi: string;
  flagEmoji: string;
  exemptionDays: number; // 0 = no visa exemption
  eVisaEligible: boolean;
  visaOnArrivalEligible: boolean;
  notes: string;
  notesVi: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
}
