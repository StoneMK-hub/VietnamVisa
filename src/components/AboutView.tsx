import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { TabType } from '../routes';

interface AboutViewProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ currentLang, onNavigate }) => {
  const isVi = currentLang === 'vi';

  const comparisonItems = [
    {
      labelEn: 'Government stamp fee',
      labelVi: 'Lệ phí tem Nhà nước',
      self: 'Included',
      bda: 'Included',
    },
    {
      labelEn: 'Application review before filing',
      labelVi: 'Rà soát lỗi hồ sơ trước khi nộp',
      self: false,
      bda: true,
    },
    {
      labelEn: 'Error correction guidance',
      labelVi: 'Hướng dẫn sửa lỗi ảnh & thông tin',
      self: false,
      bda: true,
    },
    {
      labelEn: '1-day Super Urgent express option',
      labelVi: 'Dịch vụ làm khẩn Super Urgent 1 ngày',
      self: false,
      bda: true,
    },
    {
      labelEn: '24/7 Multilingual support team',
      labelVi: 'Đội ngũ hỗ trợ đa ngôn ngữ 24/7',
      self: false,
      bda: true,
    },
    {
      labelEn: 'Human follow-up & tracking on delays',
      labelVi: 'Theo dõi sát sao & xử lý hồ sơ chậm',
      self: false,
      bda: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-slate-800">
      {/* Document Container */}
      <article className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs space-y-10 text-sm sm:text-base leading-relaxed">
        
        {/* Page Title & Intro */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200/60">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isVi ? 'Thông Tin Doanh Nghiệp' : 'Company Overview'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {isVi ? 'Về Vietnam Visa by BDA' : 'About Vietnam Visa by BDA'}
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            {isVi
              ? 'Thông tin vận hành, quy trình xử lý hồ sơ và đội ngũ chuyên viên thuộc BDA Tech & Media JSC.'
              : 'Official operational background, application handling process, and team details for BDA Tech & Media JSC.'}
          </p>
        </header>

        {/* Section 1: Who Runs This Site */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">
            Who Runs This Site
          </h2>
          <p className="text-slate-700">
            {isVi
              ? 'Vietnam Visa by BDA được vận hành trực tiếp bởi BDA Tech & Media JSC, một công ty công nghệ và dịch vụ du lịch có trụ sở chính tại Hà Nội. Được thành lập từ năm 2007, công ty hiện sở hữu quy mô hơn 100 nhân sự hoạt động trong các lĩnh vực tiếp thị số, phát triển công nghệ phần mềm và quản lý vận hành dịch vụ du lịch quốc tế.'
              : 'Vietnam Visa by BDA is operated by BDA Tech & Media JSC, a travel and digital-services company headquartered in Hanoi. The company has been in business since 2007 and currently employs roughly 100 people across digital marketing, software development, and travel operations.'}
          </p>

          {/* Contact & Registration Box */}
          <div className="my-6 p-5 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4 text-xs sm:text-sm">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-indigo-900 border-b border-slate-200 pb-2">
              {isVi ? 'Thông Tin Liên Hệ & Trụ Sở' : 'Contact & Registered Office Information'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Hotline: </span>
                    <span className="font-semibold text-slate-800">+84 832 320 320</span>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Hours: 08:00 to 21:00 (GMT+7), seven days a week
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">WhatsApp: </span>
                    <span className="text-slate-700">Free international calls from abroad</span>
                    <div className="flex items-center gap-3 text-xs pt-1">
                      <a 
                        href="https://apps.apple.com/app/whatsapp-messenger/id310633997" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        App Store <ExternalLink className="w-3 h-3" />
                      </a>
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.whatsapp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        Google Play <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Email: </span>
                    <a href="mailto:support@vietnamvisa.govt.vn" className="text-indigo-600 font-semibold hover:underline">
                      support@vietnamvisa.govt.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Registered Office: </span>
                    <span className="text-slate-700">
                      BDA Building, Lo E50, Khu 3ha, Phú Diễn, Hà Nội 100000, Vietnam
                    </span>
                    <p className="text-slate-500 text-xs mt-0.5 font-medium">
                      Time zone: Vietnam (GMT+7)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Section 2: What We Do */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">
            What We Do
          </h2>
          <p className="text-slate-700">
            {isVi
              ? 'Khi bạn gửi hồ sơ qua hệ thống của chúng tôi, đây là quy trình xử lý minh bạch diễn ra phía sau hậu trường:'
              : "When you submit an application through us, here's the process behind the scenes:"}
          </p>

          <ol className="list-decimal list-outside ml-5 space-y-3 text-slate-700">
            <li className="pl-1">
              <strong>{isVi ? 'Đăng ký & Thanh toán:' : 'Form Submission & Payment:'}</strong>{' '}
              {isVi
                ? 'Bạn hoàn thành biểu mẫu nộp visa trực tuyến trên website và thực hiện thanh toán an toàn.'
                : 'You complete our online form and pay.'}
            </li>
            <li className="pl-1">
              <strong>{isVi ? 'Rà soát chuyên sâu trong 2 giờ:' : 'Expert Review within 2 Business Hours:'}</strong>{' '}
              {isVi
                ? 'Đội ngũ kiểm định tại Hà Nội (trong vòng 2 giờ làm việc kể từ khi nhận thanh toán) kiểm tra hồ sơ của bạn đối chiếu với yêu cầu hiện hành của Cục Xuất nhập cảnh Việt Nam: thời hạn hộ chiếu, thông số ảnh chân dung, chuẩn xác họ tên, điều kiện cửa khẩu nhập cảnh và các chi tiết du khách hay mắc sai sót.'
                : 'Our review team in Hanoi (within 2 business hours of payment) checks your application against Vietnam Immigration’s current requirements: passport validity, photo specs, name matching, entry-point eligibility, and a few other things that travelers commonly get wrong.'}
            </li>
            <li className="pl-1">
              <strong>{isVi ? 'Khắc phục sự cố trước khi nộp:' : 'Pre-filing Error Correction:'}</strong>{' '}
              {isVi
                ? 'Nếu phát hiện bất kỳ thông tin nào chưa chính xác hoặc thiếu sót, chúng tôi sẽ chủ động gửi email để bạn điều chỉnh trước khi gửi chính thức. Đây là giá trị quan trọng nhất mà chúng tôi mang lại, bởi vì Cục Xuất nhập cảnh có thể từ chối hồ sơ lỗi mà không giải thích lý do, và việc phát hiện sự cố sớm tiết kiệm rất nhiều thời gian và chi phí cho du khách.'
                : 'If anything is off, we email you to fix it before we submit. This is the single most useful thing we do, since Immigration rejects flawed applications without explanation, and catching issues at this stage is worth more than the entire service fee.'}
            </li>
            <li className="pl-1">
              <strong>{isVi ? 'Nộp hồ sơ chính thức:' : 'Official Channel Submission:'}</strong>{' '}
              {isVi
                ? 'Sau khi toàn bộ thông tin đã được kiểm định chính xác 100%, chúng tôi thực hiện đăng ký hồ sơ của bạn với Cục Xuất nhập cảnh Việt Nam thông qua cổng dịch vụ chính thức.'
                : 'Once clean, we file your application with the Vietnam Immigration Department through the official channels.'}
            </li>
            <li className="pl-1">
              <strong>{isVi ? 'Chuyển giao eVisa & Theo dõi sát sao:' : 'eVisa Forwarding & Delay Tracking:'}</strong>{' '}
              {isVi
                ? 'Khi Cục Xuất nhập cảnh phê duyệt, chúng tôi lập tức chuyển tiếp tệp eVisa dạng PDF đến email của bạn, đồng thời liên tục theo dõi hàng đợi và thúc giục nếu phát sinh chậm trễ.'
                : 'When Immigration approves it, we forward you the eVisa PDF, and we monitor the queue and chase delays so you don’t have to.'}
            </li>
          </ol>
        </section>

        <hr className="border-slate-200" />

        {/* Section 3: Why Travelers Choose Us */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">
            Why Travelers Choose Us
          </h2>
          <p className="text-slate-700">
            {isVi
              ? 'Quy trình tự nộp chính thức vẫn hoạt động, tuy nhiên chưa được tối ưu cho những khách hàng cần visa gấp hoặc những người muốn có đội ngũ chuyên gia kiểm tra kỹ lưỡng hồ sơ trước khi nộp. Chúng tôi là đơn vị dịch vụ độc lập đứng ra xử lý trọn gói từ A đến Z với mức phí dịch vụ phù hợp. Khách hàng thường chọn dịch vụ của chúng tôi bao gồm:'
              : 'The official process works, but it isn’t built for people in a hurry or for those who’d like a second set of eyes on their application. We’re the independent service that handles it end to end for a small nominal fee. Our customers tend to be:'}
          </p>

          <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
            <li>
              <strong>{isVi ? 'Du khách có lịch trình gấp (< 2 tuần):' : 'Travelers booking a trip less than two weeks out:'}</strong>{' '}
              {isVi
                ? 'Những người cần phương án xử lý khẩn (Urgent) hoặc siêu khẩn 1 ngày (Super Urgent).'
                : 'Who need Urgent or Super Urgent processing options.'}
            </li>
            <li>
              <strong>{isVi ? 'Đoàn gia đình & Nhóm du lịch đông người:' : 'Group & family bookings:'}</strong>{' '}
              {isVi
                ? 'Gia đình 5 người, đoàn du lịch 10 người nơi việc tự quản lý từng tờ khai cá nhân gặp nhiều phức tạp.'
                : 'Family of five or tour groups of ten where coordinating individual applications is impractical.'}
            </li>
            <li>
              <strong>{isVi ? 'Người từng bị từ chối ảnh hoặc sai tờ khai:' : 'Applicants who had a photo or form rejected:'}</strong>{' '}
              {isVi
                ? 'Muốn đảm bảo hồ sơ của mình được duyệt chính xác ngay từ lần nộp đầu tiên.'
                : 'And want it done right the first time.'}
            </li>
            <li>
              <strong>{isVi ? 'Du khách muốn có nhân sự hỗ trợ trực tiếp:' : 'Travelers who want a human on the hook:'}</strong>{' '}
              {isVi
                ? 'Muốn có kênh liên lạc hỗ trợ trực tiếp nếu gặp phát sinh sự cố.'
                : 'If something goes wrong during the immigration queue.'}
            </li>
          </ul>
        </section>

        {/* Section 4: What Your Fee Adds Table */}
        <section className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">
            What Your Fee Adds
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm">
            {isVi
              ? 'Bảng so sánh quyền lợi giữa việc tự nộp trực tiếp và nộp qua dịch vụ Vietnam Visa by BDA:'
              : 'A breakdown of the added value when applying through Vietnam Visa by BDA versus applying independently:'}
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900">
                  <th className="py-3 px-4 font-bold">Feature</th>
                  <th className="py-3 px-4 font-bold text-slate-600 w-32 sm:w-40 text-center">Apply yourself</th>
                  <th className="py-3 px-4 font-bold text-indigo-900 bg-indigo-50/70 w-44 sm:w-52 text-center">Vietnam Visa by BDA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-3 px-4 font-medium text-slate-800">
                      {isVi ? item.labelVi : item.labelEn}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-500 font-medium">
                      {typeof item.self === 'string' ? (
                        <span>{item.self}</span>
                      ) : (
                        <span className="text-slate-400 font-semibold">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-indigo-50/30 font-bold text-emerald-700">
                      {typeof item.bda === 'string' ? (
                        <span>{item.bda}</span>
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Section 5: The Team */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">
            The Team
          </h2>
          <p className="text-slate-700">
            {isVi
              ? 'Đội ngũ vận hành visa của chúng tôi đặt trụ sở chính tại Hà Nội. Ba nhân sự lãnh đạo chính phụ trách điều hành:'
              : 'Our visa operations team is based in Hanoi. Three of our leads:'}
          </p>

          <div className="space-y-6 pt-2">
            {/* Tony Ngo */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white font-bold text-sm flex items-center justify-center">
                  TN
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Tony Ngo</h3>
                  <p className="text-xs font-semibold text-indigo-700">
                    {isVi ? 'Founder & Chairman (Nhà Sáng Lập & Chủ Tịch)' : 'Founder & Chairman'}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm pt-1">
                {isVi
                  ? 'Thành lập BDA vào năm 2007 sau hơn 10 năm hoạt động trong ngành du lịch quốc tế Việt Nam. Trực tiếp chỉ đạo chiến lược doanh nghiệp và mở rộng Tập đoàn BDA sang các dịch vụ du lịch & công nghệ phụ trợ.'
                  : 'Founded BDA in 2007 after a decade in Vietnamese inbound tourism. Oversees company strategy and the BDA Group’s expansion into adjacent travel services.'}
              </p>
            </div>

            {/* Tung Nguyen */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-700 text-white font-bold text-sm flex items-center justify-center">
                  TN
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Tung Nguyen</h3>
                  <p className="text-xs font-semibold text-indigo-700">
                    {isVi ? 'CEO (Tổng Giám Đốc)' : 'CEO'}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm pt-1">
                {isVi
                  ? 'Gia nhập BDA từ năm 2014 với nền tảng tiếp thị số và quản trị hệ thống. Lãnh đạo các hoạt động vận hành hàng ngày bao gồm đội ngũ dịch vụ visa, chăm sóc khách hàng và nền tảng hạ tầng công nghệ.'
                  : 'Joined BDA in 2014. Background in digital marketing. Leads day-to-day operations including the visa-services team, customer support, and technology.'}
              </p>
            </div>

            {/* Linh Hoang */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold text-sm flex items-center justify-center">
                  LH
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Linh Hoang</h3>
                  <p className="text-xs font-semibold text-indigo-700">
                    {isVi ? 'Head of Visa Operations (Trưởng Phòng Vận Hành Visa)' : 'Head of Visa Operations'}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm pt-1">
                {isVi
                  ? 'Trực tiếp chỉ đạo đội ngũ chuyên viên rà soát hồ sơ. Sở hữu hơn 8 năm kinh nghiệm thực tế làm việc với các quy trình Xuất nhập cảnh Việt Nam — người trực tiếp phát hiện các lỗi chính tả và thông số ảnh sai trên tờ khai của bạn.'
                  : 'Leads the application review team. Eight years’ experience with Vietnam Immigration procedures. Most likely the person who’ll spot the typo on your form.'}
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
