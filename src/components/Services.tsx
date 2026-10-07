
import { ArrowLeft, CheckCircle2, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import {
  servicesList,
  getServiceGalleryPaths,
} from "@/config/services";

import { client } from "@/config/client";
import { assetPath } from "@/lib/assetPath";

export const Services = () => {
  return (
    <section
      id="services"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background pattern */}
      <div
        className="bg-pattern-dots absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">
            <Settings size={14} className="shrink-0 text-accent" />
            <span>خدماتنا المتكاملة</span>
          </div>

          <h2 className="section-title mb-4">
            خدمات المظلات والحدادة
            <span className="mt-2 block text-gradient-luxury">
              في الدمام والخبر والقطيف
            </span>
          </h2>

          <p className="section-desc mx-auto">
            نقدم مجموعة متنوعة من خدمات المظلات والسواتر والبرجولات والهناجر
            وأعمال الحدادة والهياكل المعدنية، مع تنفيذ حسب احتياج كل مشروع.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => {
            const Icon = service.icon;
            const galleryImages = getServiceGalleryPaths(service);

            return (
              <Link
                key={service.id}
                to={service.route}
                className="group block"
              >
                <article className="card-new h-full overflow-hidden border border-black/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
                  {/* Images */}
                  <div className="grid grid-cols-2 gap-1 bg-[#171717] p-1">
                    {galleryImages.slice(0, 4).map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-24 overflow-hidden sm:h-28"
                      >
                        <img
                          src={assetPath(image)}
                          alt={`${service.title} — صورة ${imgIndex + 1}`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="300"
                        />

                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="icon-new !h-11 !w-11 shrink-0 border border-accent/30 bg-[#171717] text-accent shadow-sm">
                        <Icon size={20} className="shrink-0" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-extrabold leading-tight text-primary sm:text-xl">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-xs font-bold text-accent">
                          {service.badge}
                        </p>
                      </div>
                    </div>

                    <p className="mb-4 flex-1 text-sm leading-relaxed text-secondary sm:text-base">
                      {service.introDescription.slice(0, 100)}...
                    </p>

                    <ul className="mb-5 space-y-2">
                      {service.benefits.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs text-secondary sm:text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-accent"
                          />

                          <span className="min-w-0 break-words">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Service link */}
                    <div className="flex items-center justify-between gap-2 border-t border-primary/10 pt-4 text-sm font-bold text-primary transition-colors group-hover:text-accent">
                      <span>تفاصيل الخدمة</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/5 transition-all duration-300 group-hover:bg-accent group-hover:text-[#171717]">
                        <ArrowLeft
                          size={17}
                          className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Service areas */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-accent/20 bg-[#171717] px-6 py-4 text-center shadow-lg">
            <span className="font-bold text-[#F5F3ED]">
              نخدم:
            </span>

            {client.serviceAreas.map((area, index) => (
              <span key={area} className="flex items-center gap-2">
                <span className="font-semibold text-[#C9A227]">
                  {area}
                </span>

                {index < client.serviceAreas.length - 1 && (
                  <span className="text-white/30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
