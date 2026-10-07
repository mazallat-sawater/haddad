
import { assetPath } from "@/lib/assetPath";
import { client } from "@/config/client";

const features = [
  {
    image: "/canopies/1.webp",
    title: "جودة في التنفيذ",
    description:
      "نحرص على تنفيذ الأعمال بدقة واختيار الخامات المناسبة لطبيعة كل مشروع.",
  },
  {
    image: "/fencing/1.webp",
    title: "أعمال حدادة متنوعة",
    description:
      "تنفيذ أعمال الحدادة والهياكل المعدنية والمظلات والسواتر حسب احتياج المشروع.",
  },
  {
    image: "/Pergolas1/1.webp",
    title: "تنفيذ حسب الموقع",
    description:
      "ننفذ كل مشروع وفق المساحة وطبيعة الموقع والمقاسات والاحتياج الفعلي للعميل.",
  },
  {
    image: "/shutters/1.webp",
    title: "تصاميم متعددة",
    description:
      "حلول وتصاميم متنوعة للمظلات والسواتر والبرجولات والمشاريع المختلفة.",
  },
  {
    image: "/WarehousesDetail1/1.webp",
    title: "حلول للمشاريع",
    description:
      "تنفيذ حلول مناسبة للمنازل والفلل والاستراحات والمنشآت والمشاريع التجارية.",
  },
  {
    image: "/sandwich-warehouses/1.webp",
    title: "هناجر وهياكل معدنية",
    description:
      "تنفيذ الهناجر والمستودعات والهياكل المعدنية وفق متطلبات المشروع.",
  },
  {
    image: "/Gallery1/1.webp",
    title: "مظلات وسواتر",
    description:
      "تنفيذ مظلات السيارات والحدائق والسواتر والشبوك بتصاميم متعددة.",
  },
  {
    image: "/Gallery1/2.webp",
    title: "خدمة في المنطقة الشرقية",
    description:
      `نقدم خدماتنا في ${client.serviceAreas.join(" و")} والمناطق القريبة حسب نطاق المشروع.`,
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      dir="rtl"
      className="relative overflow-hidden bg-[#171717] py-20 md:py-28"
    >
      {/* تأثيرات خلفية */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* عنوان القسم */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C9A227] md:w-24" />

            <span className="text-sm font-bold tracking-[0.15em] text-[#DDB735]">
              لماذا تختارنا؟
            </span>

            <div className="h-px w-16 bg-[#C9A227] md:w-24" />
          </div>

          <h2 className="mb-5 text-3xl font-black leading-tight text-[#F5F3ED] md:text-5xl">
            تنفيذ يهتم بالتفاصيل
            <span className="mt-2 block text-[#DDB735]">
              وحلول تناسب مشروعك
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#d7d4cc] md:text-lg">
            نقدم حلولًا متنوعة في المظلات والسواتر والبرجولات والهناجر
            والشبوك وأعمال الحدادة والهياكل المعدنية في{" "}
            {client.serviceAreas.join(" و")}.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-7">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group relative h-full"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#292929] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                {/* الصورة */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={assetPath(feature.image)}
                    alt={`${feature.title} - ${client.shortName}`}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* التدرج */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* الرقم */}
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A227] text-sm font-black text-[#171717] shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* إطار التحويم */}
                  <div className="absolute inset-0 rounded-t-3xl border-2 border-transparent transition-all duration-500 group-hover:border-[#C9A227]/70" />
                </div>

                {/* المحتوى */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="mb-4 text-center text-lg font-extrabold leading-8 text-[#DDB735] md:text-xl">
                    {feature.title}
                  </h3>

                  <div className="mb-5 flex justify-center">
                    <div className="h-1 w-12 rounded-full bg-[#C9A227] transition-all duration-500 group-hover:w-20" />
                  </div>

                  <p className="mt-auto text-center text-sm leading-7 text-[#d7d4cc] md:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* الخط السفلي */}
                <div className="h-1 w-full bg-[#C9A227] transition-all duration-500 group-hover:h-2" />
              </div>
            </article>
          ))}
        </div>

        {/* مناطق الخدمة */}
        <div className="mt-14 text-center">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-3">
            <div className="h-px flex-1 bg-[#C9A227]/40" />

            <div className="h-2 w-2 rotate-45 bg-[#C9A227]" />

            <div className="h-px flex-1 bg-[#C9A227]/40" />
          </div>

          <p className="mt-5 text-sm font-bold text-[#DDB735]">
            {client.serviceAreas.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

