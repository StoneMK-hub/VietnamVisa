import { CountryRequirement } from '../types';

export const COUNTRIES_DATA: CountryRequirement[] = [
  {
    code: 'US',
    countryName: 'United States',
    countryNameVi: 'Mỹ (Hoa Kỳ)',
    flagEmoji: '🇺🇸',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple Entry e-Visa.',
    notesVi: 'Được cấp e-Visa 30 ngày hoặc 90 ngày (nhập cảnh 1 hoặc nhiều lần).'
  },
  {
    code: 'GB',
    countryName: 'United Kingdom',
    countryNameVi: 'Vương quốc Anh',
    flagEmoji: '🇬🇧',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Visa exemption up to 45 days. Longer stays require e-Visa.',
    notesVi: 'Miễn thị thực lên đến 45 ngày. Lưu trú lâu hơn cần xin e-Visa.'
  },
  {
    code: 'DE',
    countryName: 'Germany',
    countryNameVi: 'Đức',
    flagEmoji: '🇩🇪',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Visa exemption up to 45 days. 90-day e-Visa available.',
    notesVi: 'Miễn thị thực 45 ngày. Có thể nộp e-Visa 90 ngày.'
  },
  {
    code: 'FR',
    countryName: 'France',
    countryNameVi: 'Pháp',
    flagEmoji: '🇫🇷',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Visa exemption up to 45 days. e-Visa for up to 90 days.',
    notesVi: 'Miễn thị thực 45 ngày. e-Visa lên đến 90 ngày.'
  },
  {
    code: 'JP',
    countryName: 'Japan',
    countryNameVi: 'Nhật Bản',
    flagEmoji: '🇯🇵',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa-free entry. e-Visa available for 90-day stay.',
    notesVi: 'Miễn thị thực 45 ngày. e-Visa 90 ngày.'
  },
  {
    code: 'KR',
    countryName: 'South Korea',
    countryNameVi: 'Hàn Quốc',
    flagEmoji: '🇰🇷',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa-free entry. e-Visa available for 90-day stay.',
    notesVi: 'Miễn thị thực 45 ngày. e-Visa 90 ngày.'
  },
  {
    code: 'IT',
    countryName: 'Italy',
    countryNameVi: 'Ý (Italia)',
    flagEmoji: '🇮🇹',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available. e-Visa available.',
    notesVi: 'Miễn thị thực 45 ngày. Đủ điều kiện e-Visa.'
  },
  {
    code: 'ES',
    countryName: 'Spain',
    countryNameVi: 'Tây Ban Nha',
    flagEmoji: '🇪🇸',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available. e-Visa available.',
    notesVi: 'Miễn thị thực 45 ngày. Đủ điều kiện e-Visa.'
  },
  {
    code: 'AU',
    countryName: 'Australia',
    countryNameVi: 'Úc (Australia)',
    flagEmoji: '🇦🇺',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single or Multiple entry e-Visa.',
    notesVi: 'Đủ điều kiện cấp e-Visa 30 hoặc 90 ngày.'
  },
  {
    code: 'CA',
    countryName: 'Canada',
    countryNameVi: 'Canada',
    flagEmoji: '🇨🇦',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Đủ điều kiện cấp e-Visa 30 hoặc 90 ngày.'
  },
  {
    code: 'SG',
    countryName: 'Singapore',
    countryNameVi: 'Singapore',
    flagEmoji: '🇸🇬',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption (ASEAN). e-Visa for longer stays.',
    notesVi: 'Miễn thị thực 30 ngày (Khối ASEAN).'
  },
  {
    code: 'TH',
    countryName: 'Thailand',
    countryNameVi: 'Thái Lan',
    flagEmoji: '🇹🇭',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption (ASEAN).',
    notesVi: 'Miễn thị thực 30 ngày (Khối ASEAN).'
  },
  {
    code: 'MY',
    countryName: 'Malaysia',
    countryNameVi: 'Malaysia',
    flagEmoji: '🇲🇾',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption (ASEAN).',
    notesVi: 'Miễn thị thực 30 ngày (Khối ASEAN).'
  },
  {
    code: 'ID',
    countryName: 'Indonesia',
    countryNameVi: 'Indonesia',
    flagEmoji: '🇮🇩',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption (ASEAN).',
    notesVi: 'Miễn thị thực 30 ngày (Khối ASEAN).'
  },
  {
    code: 'PH',
    countryName: 'Philippines',
    countryNameVi: 'Philippines',
    flagEmoji: '🇵🇭',
    exemptionDays: 21,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '21-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn thị thực 21 ngày.'
  },
  {
    code: 'RU',
    countryName: 'Russia',
    countryNameVi: 'Nga',
    flagEmoji: '🇷🇺',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. e-Visa available.',
    notesVi: 'Miễn thị thực 45 ngày.'
  },
  {
    code: 'IN',
    countryName: 'India',
    countryNameVi: 'Ấn Độ',
    flagEmoji: '🇮🇳',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple e-Visa.',
    notesVi: 'Đủ điều kiện cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'CN',
    countryName: 'China',
    countryNameVi: 'Trung Quốc',
    flagEmoji: '🇨🇳',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for e-Visa (E-passport holders receive separate loose-leaf visa).',
    notesVi: 'Được cấp e-Visa (cấp thị thực rời cho hộ chiếu gắn chíp).'
  },
  {
    code: 'NZ',
    countryName: 'New Zealand',
    countryNameVi: 'New Zealand',
    flagEmoji: '🇳🇿',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Đủ điều kiện cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'CH',
    countryName: 'Switzerland',
    countryNameVi: 'Thụy Sĩ',
    flagEmoji: '🇨🇭',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Đủ điều kiện cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'SE',
    countryName: 'Sweden',
    countryNameVi: 'Thụy Điển',
    flagEmoji: '🇸🇪',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available.',
    notesVi: 'Miễn thị thực 45 ngày.'
  },
  {
    code: 'NO',
    countryName: 'Norway',
    countryNameVi: 'Na Uy',
    flagEmoji: '🇳🇴',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available.',
    notesVi: 'Miễn thị thực 45 ngày.'
  },
  {
    code: 'DK',
    countryName: 'Denmark',
    countryNameVi: 'Đan Mạch',
    flagEmoji: '🇩🇰',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available.',
    notesVi: 'Miễn thị thực 45 ngày.'
  },
  {
    code: 'FI',
    countryName: 'Finland',
    countryNameVi: 'Phần Lan',
    flagEmoji: '🇫🇮',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available.',
    notesVi: 'Miễn thị thực 45 ngày.'
  }
];

export const AIRPORTS_AND_PORTS = [
  { id: 'noi_bai', name: 'Noi Bai International Airport (HAN - Hanoi)', nameVi: 'Sân bay Quốc tế Nội Bài (Hà Nội)', type: 'airport' },
  { id: 'tan_son_nhat', name: 'Tan Son Nhat International Airport (SGN - Ho Chi Minh City)', nameVi: 'Sân bay Quốc tế Tân Sơn Nhất (TP.HCM)', type: 'airport' },
  { id: 'da_nang', name: 'Da Nang International Airport (DAD - Da Nang)', nameVi: 'Sân bay Quốc tế Đà Nẵng', type: 'airport' },
  { id: 'cam_ranh', name: 'Cam Ranh International Airport (CXR - Nha Trang)', nameVi: 'Sân bay Quốc tế Cam Ranh (Nha Trang)', type: 'airport' },
  { id: 'phu_quoc', name: 'Phu Quoc International Airport (PQC - Phu Quoc)', nameVi: 'Sân bay Quốc tế Phú Quốc', type: 'airport' },
  { id: 'cat_bi', name: 'Cat Bi International Airport (HPH - Hai Phong)', nameVi: 'Sân bay Quốc tế Cát Bi (Hải Phòng)', type: 'airport' },
  { id: 'can_tho', name: 'Can Tho International Airport (VCA - Can Tho)', nameVi: 'Sân bay Quốc tế Cần Thơ', type: 'airport' },
  { id: 'landport_huu_nghi', name: 'Huu Nghi Landport (China Border)', nameVi: 'Cửa khẩu Đường bộ Hữu Nghị (Lạng Sơn)', type: 'landport' },
  { id: 'landport_moc_bai', name: 'Moc Bai Landport (Cambodia Border)', nameVi: 'Cửa khẩu Đường bộ Mộc Bài (Tây Ninh)', type: 'landport' },
  { id: 'seaport_saigon', name: 'Saigon Seaport (Ho Chi Minh City)', nameVi: 'Cảng biển TP. Hồ Chí Minh', type: 'seaport' }
];
