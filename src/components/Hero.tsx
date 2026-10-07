
import {
  PhoneCall,
  MessageCircle,
  ArrowDown,
  CheckCircle,
  Hammer,
} from "lucide-react";

import { client, contactLinks } from "@/config/client";
import { assetPath } from "@/lib/assetPath";

export const Hero = () => {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-[calc(100dvh-72px)] overflow-hidden bg-[#1F2933] pt-20 sm:pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetPath("/hero-bg.webp")}
          alt={`${client.shortName} — مظلات وسواتر وأعمال حدادة في ${client.city}`}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Soft elegant overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-[#1F2933]/90 via-[#1F2933]/65 to-[#526B5A]/25"
        aria-hidden="true"
      />

      {/* Bottom overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1F2933]/90 to-transparent"
        aria-hidden="true"
      />

      {/* Gold and olive glow */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#B88A2A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#526B5A]/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Decorative lines */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D6B56A]/50 to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-10 top-32 hidden h-40 w-40 rounded-full border border-[#D6B56A]/20 lg:block"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-start">
          <div className="max-w-3xl">
            <div className="space-y-7">
              {/* Tagline */}
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D6B56A]/40 bg-[#1F2933]/45 px-5 py-2.5 backdrop-blur-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A2A]">
                  <Hammer size={15} className="text-white" />
                </div>

                <span className="text-sm font-bold text-[#FAF9F6] sm:text-base">
                  {client.tagline}
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-5">
                <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-[#FAF9F6] sm:text-5xl lg:text-7xl">
                  {client.hero.title}

                  <span className="mt-3 block text-[#D6B56A]">
                    {client.hero.subtitle}
                  </span>
                </h1>

                <div className="h-1 w-24 rounded-full bg-[#B88A2A]" />

                <p className="max-w-2xl text-lg leading-relaxed text-[#F1EEE7] sm:text-xl">
                  {client.hero.paragraph1}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "أعمال حدادة",
                  "تنفيذ حسب الطلب",
                  "تصاميم متنوعة",
                  "خدمة احترافية",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.08] px-3 py-3 text-sm font-semibold text-[#FAF9F6] backdrop-blur-md transition-all hover:border-[#D6B56A]/50 hover:bg-[#B88A2A]/10"
                  >
                    <CheckCircle
                      size={17}
                      className="shrink-0 text-[#D6B56A]"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#B88A2A] px-7 py-4 font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D6B56A] hover:text-[#1F2933] hover:shadow-xl sm:w-auto"
                >
                  <MessageCircle
                    size={21}
                    className="transition-transform group-hover:scale-110"
                  />

                  <span>تواصل عبر واتساب</span>
                </a>

                <a
                  href={contactLinks.phone}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#D6B56A]/60 bg-[#1F2933]/35 px-7 py-4 font-bold text-[#FAF9F6] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B56A] hover:bg-[#526B5A]/40 sm:w-auto"
                >
                  <PhoneCall
                    size={21}
                    className="text-[#D6B56A] transition-transform group-hover:scale-110"
                  />

                  <span>اتصل الآن</span>
                </a>
              </div>

              {/* Service areas */}
              <div className="border-t border-white/15 pt-5">
                <p className="text-sm font-semibold text-[#E5E1D8]">
                  <span className="text-[#D6B56A]">نخدم:</span>{" "}
                  {client.serviceAreas.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="group absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="الانتقال إلى الخدمات"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6B56A]/50 bg-[#1F2933]/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#D6B56A] hover:bg-[#B88A2A]">
          <ArrowDown
            size={23}
            className="text-[#D6B56A] transition-all group-hover:translate-y-1 group-hover:text-white"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;

