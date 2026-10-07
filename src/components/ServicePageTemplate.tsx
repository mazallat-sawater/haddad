
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceGallery } from "@/components/ServiceGallery";

import { contactLinks, client } from "@/config/client";

import {
  getServiceGalleryPaths,
  getServiceHeroPath,
  type ServiceDefinition,
} from "@/config/services";

import { useSEO } from "@/hooks/useSEO";
import { assetPath } from "@/lib/assetPath";
import {
  seoData,
  generateStructuredData,
} from "@/utils/seo/seoData";

import {
  Phone,
  MessageCircle,
  HardHat,
  Sparkles,
  CheckCircle2,
  Award,
  MapPin,
} from "lucide-react";

interface ServicePageTemplateProps {
  service: ServiceDefinition;
}

export const ServicePageTemplate = ({
  service,
}: ServicePageTemplateProps) => {
  // حماية من الصفحة البيضاء إذا كان تعريف الخدمة غير موجود
  if (!service) {
    return (
      <div
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#F5F3ED] px-4 text-center"
      >
        <div>
          <h1 className="mb-3 text-2xl font-extrabold text-[#171717]">
            الصفحة غير متاحة
          </h1>

          <p className="mb-6 text-[#171717]/60">
            عذراً، لم يتم العثور على بيانات هذا القسم.
          </p>

          <a
            href="/"
            className="btn-luxury inline-flex"
          >
            العودة للرئيسية
          </a>
        </div>
      </div>
    );
  }

  // الحصول على بيانات SEO بشكل آمن
  const seoInfo = seoData?.[service.id];

  const heroImage = getServiceHeroPath(service);
  const galleryImages = getServiceGalleryPaths(service);

  useSEO({
    title: seoInfo?.title || service.title,

    description:
      seoInfo?.description ||
      service.introDescription ||
      `${service.title} في ${client.serviceAreas.join(" و")}`,

    keywords: seoInfo?.keywords,

    url: seoInfo?.url || client.siteUrl,

    image: `${client.siteUrl.replace(/\/$/, "")}${heroImage}`,

    structuredData: seoInfo
      ? generateStructuredData(
          service.id,
          seoInfo.title,
          seoInfo.description
        )
      : undefined,
  });

  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-[#F5F3ED] text-[#171717]"
    >
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F3ED] pt-20 sm:pt-24">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[420px]">
            <img
              src={assetPath(heroImage)}
              alt={`${service.title} - ${client.shortName}`}
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/40 to-transparent" />
          </div>

          <div className="flex items-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
            <div className="w-full max-w-xl">
              <div className="section-badge mb-6">
                <HardHat
                  size={14}
                  className="shrink-0 text-[#C9A227]"
                />
                <span>{service.badge}</span>
              </div>

              <h1 className="section-title mb-5 text-[#171717]">
                {service.title}

                <span className="mt-2 block text-gradient-luxury">
                  {service.heroSubtitle}
                </span>
              </h1>

              <p className="section-desc mb-8">
                {service.introDescription}
              </p>

              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury w-full sm:w-auto"
                >
                  <MessageCircle
                    size={20}
                    className="shrink-0"
                  />

                  تواصل عبر واتساب

                  <Sparkles
                    size={16}
                    className="shrink-0 opacity-80"
                  />
                </a>

                <a
                  href={contactLinks.phone}
                  className="btn-modern w-full sm:w-auto"
                >
                  <Phone
                    size={20}
                    className="shrink-0 text-[#C9A227]"
                  />

                  اتصل الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title mb-5">
              {service.introTitle}
            </h2>

            <p className="section-desc mx-auto">
              {service.introDescription}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="group premium-card p-5 sm:p-6"
              >
                <div className="icon-new mb-4">
                  <Award
                    size={22}
                    className="shrink-0"
                  />
                </div>

                <h3 className="mb-2 text-base font-extrabold text-[#171717] sm:text-lg">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-[#171717]/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <ServiceGallery
          images={galleryImages}
          title={service.galleryTitle}
          description={service.galleryDescription}
          serviceName={service.shortTitle}
        />
      )}

      {/* Service Types */}
      <section className="section-padding bg-[#F5F3ED]">
        <div className="section-container">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="section-title">
              أنواع {service.shortTitle}

              <span className="mt-2 block text-gradient-luxury">
                التي نقدمها
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {service.serviceTypes.map((item) => (
              <div
                key={item.title}
                className="premium-card p-5"
              >
                <h3 className="mb-2 text-base font-extrabold text-[#171717]">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-[#171717]/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="section-title">
              تفاصيل خدمات {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {service.contentSections.map((section, index) => {
              const image =
                galleryImages[section.imageIndex] ||
                galleryImages[0];

              const isReversed = index % 2 === 1;

              return (
                <div
                  key={section.title}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    isReversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div
                    className={`min-w-0 ${
                      isReversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {image && (
                      <div className="overflow-hidden rounded-2xl border border-[#C9A227]/15 shadow-sm">
                        <img
                          src={assetPath(image)}
                          alt={section.title}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={`min-w-0 ${
                      isReversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <h3 className="mb-3 text-xl font-extrabold text-[#171717] sm:text-2xl">
                      {section.title}
                    </h3>

                    <p className="text-sm leading-8 text-[#171717]/75 sm:text-base">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#F5F3ED]">
        <div className="section-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <h2 className="section-title mb-6">
                {service.benefitsTitle}

                <span className="mt-2 block text-gradient-luxury">
                  من {client.shortName}
                </span>
              </h2>

              <div className="space-y-3">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/15">
                      <CheckCircle2
                        size={14}
                        className="text-[#8A6A1F]"
                      />
                    </div>

                    <span className="text-sm text-[#171717]/75 sm:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0">
              {galleryImages[0] && (
                <div className="overflow-hidden rounded-2xl border border-[#C9A227]/15 shadow-md">
                  <img
                    src={assetPath(galleryImages[0])}
                    alt={`${service.title} - ${client.shortName}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover sm:h-[380px]"
                  />
                </div>
              )}

              <div className="mt-4 rounded-2xl border border-[#C9A227]/15 bg-white p-4 shadow-sm sm:absolute sm:-bottom-6 sm:left-4 sm:mt-0 sm:max-w-[280px] lg:left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A227] text-[#171717]">
                    <Award size={22} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-[#171717] sm:text-base">
                      تنفيذ حسب الطلب
                    </div>

                    <div className="text-xs text-[#171717]/60 sm:text-sm">
                      حلول مناسبة لطبيعة المشروع
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="border-y border-[#C9A227]/15 bg-white py-12 sm:py-16">
        <div className="section-container text-center">
          <MapPin className="mx-auto mb-4 h-9 w-9 text-[#C9A227]" />

          <h2 className="mb-3 text-xl font-extrabold text-[#171717] sm:text-2xl">
            نخدم {client.serviceAreas.join(" و")} والمناطق القريبة
          </h2>

          <p className="section-desc mx-auto mb-6">
            {service.areasText}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {client.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#C9A227]/20 bg-[#F5F3ED] px-3 py-1.5 text-xs font-semibold text-[#8A6A1F] sm:text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#171717]">
        <div className="section-container text-center">
          <div className="section-badge mb-5 border-[#C9A227]/30 bg-[#292929] text-[#DDB735]">
            <HardHat
              size={14}
              className="shrink-0"
            />

            <span>ابدأ مشروعك الآن</span>
          </div>

          <h2 className="section-title mb-4 text-white">
            جاهزون لمناقشة مشروعك؟
          </h2>

          <p className="section-desc mx-auto mb-8 text-[#F5F3ED]/70">
            تواصل معنا لمناقشة تفاصيل مشروعك والخدمات المناسبة
            لاحتياجك في {client.serviceAreas.join(" و")}.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury w-full sm:w-auto"
            >
              <MessageCircle
                size={20}
                className="shrink-0"
              />

              تواصل عبر واتساب
            </a>

            <a
              href={contactLinks.phone}
              className="btn-modern w-full border-white/20 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
            >
              <Phone
                size={20}
                className="shrink-0"
              />

              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;

