
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Target,
  Crown,
  CheckCircle2,
  Hammer,
} from "lucide-react";

const features = [
  {
    title: "تنفيذ حسب الطلب",
    desc: "ننفذ المظلات والسواتر والهياكل والأعمال الحديدية وفق احتياج المشروع والتصميم المطلوب.",
    icon: Hammer,
  },
  {
    title: "دقة في التنفيذ",
    desc: "نهتم بتفاصيل التصنيع والتركيب والتشطيب للوصول إلى نتيجة مرتبة ومناسبة للموقع.",
    icon: Award,
  },
  {
    title: "أعمال حدادة متنوعة",
    desc: "تنفيذ مجموعة متنوعة من الأعمال الحديدية والمظلات والسواتر والهناجر حسب طبيعة كل مشروع.",
    icon: Building2,
  },
  {
    title: "سرعة وتنظيم",
    desc: "نعمل على تنظيم مراحل التنفيذ والالتزام بالمواعيد المتفق عليها قدر الإمكان.",
    icon: Zap,
  },
  {
    title: "فريق متخصص",
    desc: "فريق يعمل في تنفيذ وتركيب أعمال الحدادة والمظلات والسواتر والهياكل المعدنية.",
    icon: Users,
  },
  {
    title: "خدمة في المنطقة الشرقية",
    desc: "نخدم العملاء في الدمام والخبر والقطيف والمناطق القريبة حسب نطاق المشروع.",
    icon: Target,
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-[#171717] text-[#F5F3ED]"
    >
      {/* Decorative elements */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <div className="absolute right-[15%] top-20 h-32 w-32 rounded-full border border-[#C9A227]" />
        <div className="absolute bottom-20 left-[12%] h-24 w-24 rounded-full border border-[#C9A227]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5 border-[#C9A227]/30 bg-[#C9A227]/10">
            <Crown size={14} className="shrink-0 text-[#C9A227]" />
            <span className="text-[#F5F3ED]">لماذا تختارنا</span>
          </div>

          <h2 className="mb-4 text-3xl font-black leading-tight text-[#F5F3ED] sm:text-4xl lg:text-5xl">
            تنفيذ يهتم
            <span className="mt-2 block text-[#C9A227]">
              بالتفاصيل
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#D8D4CA] sm:text-lg">
            نركز على جودة التنفيذ ودقة التفاصيل في أعمال المظلات والسواتر
            والحدادة والهياكل المعدنية، مع تقديم حلول مناسبة لطبيعة كل مشروع.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/30 sm:p-6"
              >
                {/* Check mark */}
                <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10">
                  <CheckCircle2
                    size={14}
                    className="shrink-0 text-[#C9A227]"
                  />
                </div>

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#171717]">
                  <Icon size={22} className="shrink-0" />
                </div>

                <h4 className="mb-3 text-base font-extrabold text-[#F5F3ED] sm:text-lg">
                  {feature.title}
                </h4>

                <p className="text-sm leading-7 text-[#CFCBC1]">
                  {feature.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#8A6A1F] via-[#C9A227] to-[#DDB735] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/5 px-6 py-5 text-center sm:mt-14">
          <p className="text-sm font-semibold leading-7 text-[#E7E4DC] sm:text-base">
            <span className="text-[#C9A227]">نخدم:</span>{" "}
            الدمام · الخبر · القطيف
          </p>
        </div>
      </div>
    </section>
  );
}