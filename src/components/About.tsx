
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Target,
  Crown,
  Hammer,
} from "lucide-react";

import { client } from "@/config/client";

const features = [
  {
    icon: Hammer,
    title: "أعمال حدادة متنوعة",
    description:
      "تنفيذ أعمال الحدادة والمظلات والسواتر والهياكل المعدنية حسب طبيعة واحتياج كل مشروع.",
  },
  {
    icon: ShieldCheck,
    title: "اهتمام بالتنفيذ",
    description:
      "نحرص على تنفيذ الأعمال بشكل مرتب مع الاهتمام بالتفاصيل أثناء التصنيع والتركيب.",
  },
  {
    icon: Zap,
    title: "تنفيذ منظم",
    description:
      "تنظيم مراحل العمل من المعاينة والتجهيز وحتى التصنيع والتركيب حسب متطلبات المشروع.",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description:
      "فريق يعمل في تنفيذ وتركيب المظلات والسواتر وأعمال الحدادة والهياكل المعدنية.",
  },
  {
    icon: Building2,
    title: "حلول لمشاريع مختلفة",
    description:
      "تنفيذ أعمال تناسب المنازل والفلل والاستراحات والمواقع التجارية والمشاريع المختلفة.",
  },
  {
    icon: Target,
    title: "دقة في القياسات",
    description:
      "الاهتمام بالقياسات والتفاصيل المطلوبة للمشروع للوصول إلى تنفيذ مناسب للموقع.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-background-light"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">
            <Crown size={14} className="shrink-0 text-accent" />
            <span>من نحن</span>
          </div>

          <h2 className="section-title mb-4">
            {client.shortName}
            <span className="mt-2 block text-gradient-luxury">
              مظلات وسواتر وأعمال حدادة
            </span>
          </h2>

          <p className="section-desc mx-auto">
            {client.description}
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* About text */}
          <div className="min-w-0 space-y-7">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#171717] text-[#C9A227]">
                  <Hammer size={21} />
                </div>

                <h3 className="text-xl font-extrabold text-primary sm:text-2xl">
                  أعمال حدادة ومظلات وسواتر
                </h3>
              </div>

              <p className="text-sm leading-8 text-secondary sm:text-base">
                نقدم خدمات متنوعة في مجال المظلات والسواتر وأعمال الحدادة
                والهياكل المعدنية، مع تنفيذ التصاميم حسب احتياج المشروع
                وطبيعة الموقع.
              </p>

              <p className="mt-4 text-sm leading-8 text-secondary sm:text-base">
                تشمل أعمالنا المظلات والبرجولات والهناجر والشبوك والسواتر
                وغيرها من الأعمال المرتبطة بالحديد والمشاريع الخارجية،
                ونخدم العملاء في الدمام والخبر والقطيف.
              </p>
            </div>

            {/* Why choose us */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-accent-dark">
                ما نهتم به في كل مشروع
              </h4>

              <ul className="space-y-3">
                {[
                  "تنفيذ حسب احتياج المشروع",
                  "الاهتمام بالقياسات والتفاصيل",
                  "تنفيذ وتركيب منظم",
                  "خدمة في الدمام والخبر والقطيف",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-secondary sm:text-base"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm font-bold text-primary">
                <span className="text-accent">نخدم:</span>{" "}
                {client.serviceAreas.join(" · ")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group card-new p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-[#171717]">
                    <Icon size={22} className="shrink-0" />
                  </div>

                  <h4 className="mb-2 text-base font-extrabold text-primary sm:text-lg">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-7 text-secondary">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
