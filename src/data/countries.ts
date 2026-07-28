import { CountryRequirement } from '../types';

export const COUNTRIES_DATA: CountryRequirement[] = [
  // North America
  {
    code: 'US',
    countryName: 'United States',
    countryNameVi: 'Mỹ (Hoa Kỳ)',
    flagEmoji: '🇺🇸',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple Entry e-Visa.',
    notesVi: 'Được cấp e-Visa 30 ngày hoặc 90 ngày (1 hoặc nhiều lần).'
  },
  {
    code: 'CA',
    countryName: 'Canada',
    countryNameVi: 'Canada',
    flagEmoji: '🇨🇦',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple Entry e-Visa.',
    notesVi: 'Được cấp e-Visa 30 ngày hoặc 90 ngày (1 hoặc nhiều lần).'
  },
  {
    code: 'MX',
    countryName: 'Mexico',
    countryNameVi: 'Mexico',
    flagEmoji: '🇲🇽',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30 hoặc 90 ngày.'
  },

  // Europe - 45-day Exemption Countries
  {
    code: 'GB',
    countryName: 'United Kingdom',
    countryNameVi: 'Vương quốc Anh',
    flagEmoji: '🇬🇧',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Visa exemption up to 45 days. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cần lưu trú dài hơn nộp e-Visa 90 ngày.'
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
    notesVi: 'Miễn visa 45 ngày. Có thể xin e-Visa 90 ngày.'
  },
  {
    code: 'FR',
    countryName: 'France',
    countryNameVi: 'Pháp',
    flagEmoji: '🇫🇷',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Visa exemption up to 45 days. e-Visa up to 90 days.',
    notesVi: 'Miễn visa 45 ngày. e-Visa lên đến 90 ngày.'
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
    notesVi: 'Miễn visa 45 ngày. Đủ điều kiện e-Visa.'
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
    notesVi: 'Miễn visa 45 ngày. Đủ điều kiện e-Visa.'
  },
  {
    code: 'RU',
    countryName: 'Russia',
    countryNameVi: 'Nga',
    flagEmoji: '🇷🇺',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption available. e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Đủ điều kiện e-Visa.'
  },
  {
    code: 'SE',
    countryName: 'Sweden',
    countryNameVi: 'Thụy Điển',
    flagEmoji: '🇸🇪',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn visa 45 ngày. e-Visa đến 90 ngày.'
  },
  {
    code: 'NO',
    countryName: 'Norway',
    countryNameVi: 'Na Uy',
    flagEmoji: '🇳🇴',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn visa 45 ngày. e-Visa đến 90 ngày.'
  },
  {
    code: 'DK',
    countryName: 'Denmark',
    countryNameVi: 'Đan Mạch',
    flagEmoji: '🇩🇰',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn visa 45 ngày. e-Visa đến 90 ngày.'
  },
  {
    code: 'FI',
    countryName: 'Finland',
    countryNameVi: 'Phần Lan',
    flagEmoji: '🇫🇮',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn visa 45 ngày. e-Visa đến 90 ngày.'
  },
  {
    code: 'BE',
    countryName: 'Belgium',
    countryNameVi: 'Bỉ',
    flagEmoji: '🇧🇪',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'NL',
    countryName: 'Netherlands',
    countryNameVi: 'Hà Lan',
    flagEmoji: '🇳🇱',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'CH',
    countryName: 'Switzerland',
    countryNameVi: 'Thụy Sĩ',
    flagEmoji: '🇨🇭',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'PL',
    countryName: 'Poland',
    countryNameVi: 'Ba Lan',
    flagEmoji: '🇵🇱',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'CZ',
    countryName: 'Czech Republic',
    countryNameVi: 'Cộng hòa Séc',
    flagEmoji: '🇨🇿',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'HU',
    countryName: 'Hungary',
    countryNameVi: 'Hungary',
    flagEmoji: '🇭🇺',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'BG',
    countryName: 'Bulgaria',
    countryNameVi: 'Bulgaria',
    flagEmoji: '🇧🇬',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'HR',
    countryName: 'Croatia',
    countryNameVi: 'Croatia',
    flagEmoji: '🇭🇷',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'LU',
    countryName: 'Luxembourg',
    countryNameVi: 'Luxembourg',
    flagEmoji: '🇱🇺',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'RO',
    countryName: 'Romania',
    countryNameVi: 'Romania',
    flagEmoji: '🇷🇴',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'SK',
    countryName: 'Slovakia',
    countryNameVi: 'Slovakia',
    flagEmoji: '🇸🇰',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },
  {
    code: 'SI',
    countryName: 'Slovenia',
    countryNameVi: 'Slovenia',
    flagEmoji: '🇸🇮',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa exemption. 90-day e-Visa available.',
    notesVi: 'Miễn visa 45 ngày. Cấp e-Visa 90 ngày.'
  },

  // Other Europe (e-Visa Eligible)
  {
    code: 'AT',
    countryName: 'Austria',
    countryNameVi: 'Áo',
    flagEmoji: '🇦🇹',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'IE',
    countryName: 'Ireland',
    countryNameVi: 'Ailen (Ireland)',
    flagEmoji: '🇮🇪',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'PT',
    countryName: 'Portugal',
    countryNameVi: 'Bồ Đào Nha',
    flagEmoji: '🇵🇹',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'GR',
    countryName: 'Greece',
    countryNameVi: 'Hy Lạp',
    flagEmoji: '🇬🇷',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'UA',
    countryName: 'Ukraine',
    countryNameVi: 'Ukraine',
    flagEmoji: '🇺🇦',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'TR',
    countryName: 'Turkey',
    countryNameVi: 'Thổ Nhĩ Kỳ',
    flagEmoji: '🇹🇷',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },

  // Asia - East & Southeast
  {
    code: 'JP',
    countryName: 'Japan',
    countryNameVi: 'Nhật Bản',
    flagEmoji: '🇯🇵',
    exemptionDays: 45,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '45-day visa-free entry. e-Visa available for 90-day stay.',
    notesVi: 'Miễn visa 45 ngày. e-Visa 90 ngày.'
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
    notesVi: 'Miễn visa 45 ngày. e-Visa 90 ngày.'
  },
  {
    code: 'CN',
    countryName: 'China',
    countryNameVi: 'Trung Quốc',
    flagEmoji: '🇨🇳',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for e-Visa (E-passport holders receive loose-leaf visa).',
    notesVi: 'Được cấp e-Visa (thị thực rời cho hộ chiếu E).'
  },
  {
    code: 'TW',
    countryName: 'Taiwan',
    countryNameVi: 'Đài Loan',
    flagEmoji: '🇹🇼',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'HK',
    countryName: 'Hong Kong',
    countryNameVi: 'Hồng Kông',
    flagEmoji: '🇭🇰',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
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
    notesVi: 'Miễn visa 30 ngày (ASEAN).'
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
    notesVi: 'Miễn visa 30 ngày (ASEAN).'
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
    notesVi: 'Miễn visa 30 ngày (ASEAN).'
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
    notesVi: 'Miễn visa 30 ngày (ASEAN).'
  },
  {
    code: 'LA',
    countryName: 'Laos',
    countryNameVi: 'Lào',
    flagEmoji: '🇱🇦',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption (ASEAN).',
    notesVi: 'Miễn visa 30 ngày (ASEAN).'
  },
  {
    code: 'KH',
    countryName: 'Cambodia',
    countryNameVi: 'Campuchia',
    flagEmoji: '🇰🇭',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption (ASEAN).',
    notesVi: 'Miễn visa 30 ngày (ASEAN).'
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
    notesVi: 'Miễn visa 21 ngày.'
  },
  {
    code: 'BN',
    countryName: 'Brunei',
    countryNameVi: 'Brunei',
    flagEmoji: '🇧🇳',
    exemptionDays: 14,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '14-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn visa 14 ngày.'
  },
  {
    code: 'MM',
    countryName: 'Myanmar',
    countryNameVi: 'Myanmar',
    flagEmoji: '🇲🇲',
    exemptionDays: 14,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '14-day visa exemption. e-Visa for up to 90 days.',
    notesVi: 'Miễn visa 14 ngày.'
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
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'PK',
    countryName: 'Pakistan',
    countryNameVi: 'Pakistan',
    flagEmoji: '🇵🇰',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'BD',
    countryName: 'Bangladesh',
    countryNameVi: 'Bangladesh',
    flagEmoji: '🇧🇩',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'LK',
    countryName: 'Sri Lanka',
    countryNameVi: 'Sri Lanka',
    flagEmoji: '🇱🇰',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'MN',
    countryName: 'Mongolia',
    countryNameVi: 'Mông Cổ',
    flagEmoji: '🇲🇳',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption.',
    notesVi: 'Miễn visa 30 ngày.'
  },
  {
    code: 'KZ',
    countryName: 'Kazakhstan',
    countryNameVi: 'Kazakhstan',
    flagEmoji: '🇰🇿',
    exemptionDays: 30,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '30-day visa exemption.',
    notesVi: 'Miễn visa 30 ngày.'
  },

  // Oceania
  {
    code: 'AU',
    countryName: 'Australia',
    countryNameVi: 'Úc (Australia)',
    flagEmoji: '🇦🇺',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day Single/Multiple e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
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
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },

  // Middle East & Africa
  {
    code: 'AE',
    countryName: 'United Arab Emirates',
    countryNameVi: 'CÁC TIỂU VƯƠNG QUỐC Ả RẬP THỐNG NHẤT (UAE)',
    flagEmoji: '🇦🇪',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'SA',
    countryName: 'Saudi Arabia',
    countryNameVi: 'Ả Rập Xê Út',
    flagEmoji: '🇸🇦',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'QA',
    countryName: 'Qatar',
    countryNameVi: 'Qatar',
    flagEmoji: '🇶🇦',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'IL',
    countryName: 'Israel',
    countryNameVi: 'Israel',
    flagEmoji: '🇮🇱',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'ZA',
    countryName: 'South Africa',
    countryNameVi: 'Nam Phi',
    flagEmoji: '🇿🇦',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'EG',
    countryName: 'Egypt',
    countryNameVi: 'Ai Cập',
    flagEmoji: '🇪🇬',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },

  // South America & Central America
  {
    code: 'CL',
    countryName: 'Chile',
    countryNameVi: 'Chile',
    flagEmoji: '🇨🇱',
    exemptionDays: 90,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '90-day visa exemption.',
    notesVi: 'Miễn visa 90 ngày.'
  },
  {
    code: 'PA',
    countryName: 'Panama',
    countryNameVi: 'Panama',
    flagEmoji: '🇵🇦',
    exemptionDays: 90,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: '90-day visa exemption.',
    notesVi: 'Miễn visa 90 ngày.'
  },
  {
    code: 'BR',
    countryName: 'Brazil',
    countryNameVi: 'Brasil (Brazil)',
    flagEmoji: '🇧🇷',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'AR',
    countryName: 'Argentina',
    countryNameVi: 'Argentina',
    flagEmoji: '🇦🇷',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'CO',
    countryName: 'Colombia',
    countryNameVi: 'Colombia',
    flagEmoji: '🇨🇴',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
  },
  {
    code: 'PE',
    countryName: 'Peru',
    countryNameVi: 'Peru',
    flagEmoji: '🇵🇪',
    exemptionDays: 0,
    eVisaEligible: true,
    visaOnArrivalEligible: true,
    notes: 'Eligible for 30-day and 90-day e-Visa.',
    notesVi: 'Được cấp e-Visa 30-90 ngày.'
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
