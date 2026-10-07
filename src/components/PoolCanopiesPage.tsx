
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle,
} from "lucide-react";

import { useSEO } from "@/hooks/useSEO";
import { assetPath } from "@/lib/assetPath";
import { client, contactLinks } from "@/config/client";

const images = [
  "/pool-canopies/1.webp",
  "/pool-canopies/2.webp",
  "/pool-canopies/3.webp",
  "/pool-canopies/4.webp",
];

const PoolCanopiesPage = () => {
  useSEO({
    title:
      "مظلات مسابح في الدمام والخبر والقطيف | مظلات وتغطية المسابح",

    description:
      "مظلات وتغطية مسابح للمنازل والفلل والاستراحات في الدمام والخبر والقطيف، بتصاميم متنوعة وتنفيذ مناسب لمساحة المسبح والموقع.",

    keywords:
      "مظلات مسابح الدمام, مظلات مسابح الخبر, مظلات مسابح القطيف, تغطية مسابح الدمام, تغطية المسابح الخبر, مظلات مسابح, مظلات للفلل, مظلات للاستراحات",

    image: `${client.siteUrl.replace(/\/$/, "")}/pool-canopies/1.webp`,

    url: `${client.siteUrl.replace(/\/$/, "")}/pool-canopies`,
  });

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F5F3ED] text-[#171717]"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#171717]">
        <div className="relative h-[65vh] min-h-[480px] max-h-[760px]">
          <img
            src={assetPath(images[0])}
            alt={`مظلات مسابح في الدمام والخبر والقطيف - ${client.shortName}`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
            <div className="max-w-4xl text-white">
              <p className="mb-4 text-lg font-semibold text-[#DDB735] sm:text-xl">
                {client.shortName}
              </p>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                مظلات وتغطية مسابح
                <span className="mt-2 block text-[#DDB735]">
                  في الدمام والخبر والقطيف
                </span>
              </h1>

              <p className="mx-auto max-w-3xl text-lg leading-8 text-white/95 sm:text-xl">
                تنفيذ مظلات وتغطية للمسابح بتصاميم متنوعة تناسب المنازل
                والفلل والاستراحات والمساحات الخارجية، مع مراعاة مساحة
                المسبح وطبيعة الموقع.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={contactLinks.phone}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-bold text-[#171717] transition hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  اتصل بنا
                </a>

                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#171717] transition hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-extrabold text-[#8A6A1F] sm:text-4xl">
              مظلات مسابح في الدمام والخبر والقطيف
            </h2>

            <p className="mx-auto max-w-4xl text-lg leading-9 text-gray-700">
              ننفذ مظلات وتغطية للمسابح للمنازل والفلل والاستراحات
              والمساحات الخارجية، مع تصاميم متنوعة يمكن تنفيذها حسب
              مساحة المسبح وطبيعة الموقع واحتياج العميل.
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "تصاميم مناسبة للمسابح",
              "تظليل للمساحات الخارجية",
              "تنفيذ حسب الموقع",
              "حلول مناسبة للفلل والاستراحات",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg"
              >
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-[#C9A227]" />

                <h3 className="font-bold text-gray-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#292929] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-[#DDB735] sm:text-4xl">
              صور مظلات وتغطية المسابح
            </h2>

            <p className="mt-4 text-lg text-white/70">
              نماذج من التصاميم والأعمال الخاصة بمظلات المسابح
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={image}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-xl"
              >
                <img
                  src={assetPath(image)}
                  alt={`مظلات مسابح - صورة ${index + 1} - ${client.shortName}`}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-[#8A6A1F] sm:text-4xl">
              خدمات مظلات وتغطية المسابح
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "تركيب مظلات للمسابح الخارجية",
              "تغطية مسابح المنازل والفلل",
              "مظلات مسابح للاستراحات",
              "تظليل المساحات المحيطة بالمسبح",
              "تصميم مناسب لمساحة المسبح",
              "تنفيذ وتجهيز حسب احتياج العميل",
            ].map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-md"
              >
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#C9A227]" />

                <span className="font-semibold leading-7">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#171717] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <MapPin className="mx-auto mb-5 h-10 w-10 text-[#DDB735]" />

          <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">
            مظلات مسابح في المنطقة الشرقية
          </h2>

          <p className="text-lg leading-9 text-white/80">
            نقدم خدمات مظلات وتغطية المسابح في{" "}
            {client.serviceAreas.join(" و")}، للمنازل والفلل
            والاستراحات والمساحات الخارجية، مع تنفيذ يناسب طبيعة
            المكان واحتياج العميل.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {client.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#C9A227]/40 bg-[#292929] px-5 py-2 font-semibold text-[#DDB735]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#C9A227] px-6 py-12 text-center text-[#171717] shadow-2xl sm:px-12">
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">
            تحتاج مظلة أو تغطية لمسبحك؟
          </h2>

          <p className="mb-8 text-lg leading-8 text-[#171717]/80">
            تواصل معنا لمناقشة تفاصيل المشروع والمساحة والتصميم
            المناسب لموقعك.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={contactLinks.phone}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#171717] transition hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              اتصل بنا
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-7 py-4 font-bold text-white transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              واتساب
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PoolCanopiesPage;

