import { VisaType, ProcessingTime, ExtraService } from '../types';

export const VISA_TYPE_PRICING: Record<VisaType, { labelEn: string; labelVi: string; govFeeUsd: number; serviceFeeUsd: number; durationDays: number }> = {
  tourist_30_single: {
    labelEn: '1-month single',
    labelVi: '1 tháng nhập cảnh 1 lần',
    govFeeUsd: 25,
    serviceFeeUsd: 29, // Total $54 per applicant
    durationDays: 30
  },
  tourist_30_multi: {
    labelEn: '1-month multiple',
    labelVi: '1 tháng nhập cảnh nhiều lần',
    govFeeUsd: 50,
    serviceFeeUsd: 34, // Total $84 per applicant
    durationDays: 30
  },
  tourist_90_single: {
    labelEn: '3-month single',
    labelVi: '3 tháng nhập cảnh 1 lần',
    govFeeUsd: 25,
    serviceFeeUsd: 69, // Total $94 per applicant
    durationDays: 90
  },
  tourist_90_multi: {
    labelEn: '3-month multiple',
    labelVi: '3 tháng nhập cảnh nhiều lần',
    govFeeUsd: 50,
    serviceFeeUsd: 54, // Total $104 per applicant
    durationDays: 90
  },
  business_30_single: {
    labelEn: '1-month business single',
    labelVi: '1 tháng thương mại 1 lần',
    govFeeUsd: 25,
    serviceFeeUsd: 29,
    durationDays: 30
  },
  business_90_multi: {
    labelEn: '3-month business multiple',
    labelVi: '3 tháng thương mại nhiều lần',
    govFeeUsd: 50,
    serviceFeeUsd: 54,
    durationDays: 90
  }
};

export const PROCESSING_SPEED_PRICING: Record<ProcessingTime, { labelEn: string; labelVi: string; feePerApplicantUsd: number; timeTextEn: string; timeTextVi: string }> = {
  standard: {
    labelEn: 'Normal',
    labelVi: 'Thông thường',
    feePerApplicantUsd: 0,
    timeTextEn: '5 to 10 business days',
    timeTextVi: '5 đến 10 ngày làm việc'
  },
  urgent_24h: {
    labelEn: 'Urgent',
    labelVi: 'Xử lý Khẩn',
    feePerApplicantUsd: 45,
    timeTextEn: '2 business days',
    timeTextVi: '2 ngày làm việc'
  },
  emergency_4h: {
    labelEn: 'Super Urgent',
    labelVi: 'Siêu Khẩn',
    feePerApplicantUsd: 85,
    timeTextEn: '1 business day',
    timeTextVi: '1 ngày làm việc'
  }
};

export const EXTRA_SERVICES_PRICING: Record<ExtraService, { labelEn: string; labelVi: string; feePerApplicantUsd: number; descriptionEn: string; descriptionVi: string }> = {
  travel_insurance: {
    labelEn: 'Travel Insurance',
    labelVi: 'Bảo Hiểm Du Lịch',
    feePerApplicantUsd: 30,
    descriptionEn: 'Coverage for unexpected medical events (including Covid-19) and baggage issues, up to $10,000',
    descriptionVi: 'Bảo hiểm sự cố y tế và hành lý mức bồi thường tới $10,000'
  },
  fast_track: {
    labelEn: 'Airport Fast-Track',
    labelVi: 'Đón Nhanh Sân Bay Fast-Track',
    feePerApplicantUsd: 35,
    descriptionEn: 'Priority immigration lane on arrival, typically saves 30 to 60 minutes, and up to 2 hours during peak season and holidays',
    descriptionVi: 'Lối đi ưu tiên tại hải quan sân bay, tiết kiệm từ 30 đến 60 phút làm thủ tục'
  },
  car_pickup: {
    labelEn: 'Car Pickup',
    labelVi: 'Xe Đưa Đón Sân Bay',
    feePerApplicantUsd: 35,
    descriptionEn: 'Meet & greet at the arrival hall, private transfer to your hotel',
    descriptionVi: 'Đón tại sảnh đến sân bay và đưa về khách sạn bằng xe riêng'
  },
  vip_fast_track: {
    labelEn: 'VIP Fast-Track & Porter',
    labelVi: 'Đón VIP + Hỗ trợ hành lý',
    feePerApplicantUsd: 45,
    descriptionEn: 'Full VIP treatment, priority passport stamp, luggage porter, and private escort.',
    descriptionVi: 'Hỗ trợ VIP toàn diện, đón ngay ống lồng và xách hành lý'
  },
  stamp_guarantee: {
    labelEn: 'Pre-Paid Stamping Fee Guarantee',
    labelVi: 'Đảm Bảo Lệ Phí Đóng Dấu Trả Trước',
    feePerApplicantUsd: 25,
    descriptionEn: 'Covers government stamping fee at entry gate so you pay $0 cash at counter.',
    descriptionVi: 'Thanh toán trước lệ phí đóng dấu để không cần trả tiền mặt tại quầy.'
  }
};

export const USD_TO_VND_RATE = 25450;

export function calculateVisaFees(
  visaType: VisaType,
  processingTime: ProcessingTime,
  extraServices: ExtraService[],
  applicantCount: number
) {
  const typeConfig = VISA_TYPE_PRICING[visaType] || VISA_TYPE_PRICING.tourist_30_single;
  const speedConfig = PROCESSING_SPEED_PRICING[processingTime] || PROCESSING_SPEED_PRICING.standard;

  const govFeeTotal = typeConfig.govFeeUsd * applicantCount;
  const serviceFeeTotal = typeConfig.serviceFeeUsd * applicantCount;
  const speedFeeTotal = speedConfig.feePerApplicantUsd * applicantCount;

  let extraServicesPerPersonTotal = 0;
  extraServices.forEach(srv => {
    const srvConfig = EXTRA_SERVICES_PRICING[srv];
    if (srvConfig) {
      extraServicesPerPersonTotal += srvConfig.feePerApplicantUsd;
    }
  });

  const extraServicesTotal = extraServicesPerPersonTotal * applicantCount;

  // Group discount for 3+ applicants
  let groupDiscount = 0;
  if (applicantCount >= 5) {
    groupDiscount = Math.round((serviceFeeTotal + speedFeeTotal) * 0.15); // 15% off service & speed
  } else if (applicantCount >= 3) {
    groupDiscount = Math.round((serviceFeeTotal + speedFeeTotal) * 0.10); // 10% off service & speed
  }

  const grandTotalUsd = govFeeTotal + serviceFeeTotal + speedFeeTotal + extraServicesTotal - groupDiscount;
  const grandTotalVnd = Math.round(grandTotalUsd * USD_TO_VND_RATE);

  return {
    govFeePerPerson: typeConfig.govFeeUsd,
    serviceFeePerPerson: typeConfig.serviceFeeUsd,
    speedFeePerPerson: speedConfig.feePerApplicantUsd,
    applicantCount,
    govFeeTotal,
    serviceFeeTotal,
    speedFeeTotal,
    extraServicesTotal,
    groupDiscount,
    grandTotalUsd,
    grandTotalVnd
  };
}
