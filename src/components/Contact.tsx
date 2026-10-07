
import { MapPin, Crown, PhoneCall } from "lucide-react";

import { client, contactLinks } from "@/config/client";

const WhatsAppIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452" />
  </svg>
);

const InstagramIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 2.94-1.43-.13-2.76-.78-3.86-1.75-.76-.7-1.34-1.58-1.69-2.56-.17-.45-.25-.92-.29-1.4-.12-1.57.26-3.16 1.08-4.52.76-1.27 1.94-2.26 3.33-2.74.89-.3 1.85-.37 2.78-.17.04.93.04 1.87.04 2.8-.93-.26-1.96-.13-2.79.42-.96.63-1.55 1.74-1.58 2.88-.05 1.1.49 2.17 1.38 2.83.89.66 2.09.8 3.11.36.9-.39 1.57-1.25 1.71-2.22.08-.46.07-.93.07-1.4.01-3.53.01-7.06.01-10.59.01-1.61.01-3.22.01-4.83z" />
  </svg>
);

const contactCards = [
  {
    title: "اتصال",
    value: client.phoneDisplay,
    href: contactLinks.phone,
    icon: PhoneCall,
    description: "للاستفسار عن الخدمات",
    category: "contact",
  },
  {
    title: "واتساب",
    value: "تواصل فوري",
    href: contactLinks.whatsappShort,
    icon: WhatsAppIcon,
    description: "أرسل تفاصيل مشروعك",
    category: "contact",
  },
  {
    title: "Instagram",
    value: "@zed2020p",
    href: client.socialMedia.instagram,
    icon: InstagramIcon,
    description: "تابعنا على إنستغرام",
    category: "social",
  },
  {
    title: "TikTok",
    value: "@user0504500495",
    href: client.socialMedia.tiktok,
    icon: TikTokIcon,
    description: "تابعنا على تيك توك",
    category: "social",
  },
  {
    title: "الموقع",
    value: "الدمام والخبر والقطيف",
    href: client.mapsUrl || "#",
    icon: MapPin,
    description: `نخدم ${client.serviceAreas.join(" و")}`,
    category: "location",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-[#F1EEE7]"
    >
      {/* Soft decorative background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#F1EEE7] to-[#EAE5DA]"
        aria-hidden="true"
      />

      <div
        className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#D6B56A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#526B5A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="section-badge mb-6 border-[#D6B56A]/40 bg-white/80 text-[#B88A2A] shadow-sm">
            <Crown size={14} className="shrink-0 text-[#B88A2A]" />
            <span>تواصل معنا</span>
          </div>

          <h2 className="section-title mb-6 text-[#1F2933]">
            نحن هنا لخدمتكم
            <span className="mt-2 block bg-gradient-to-l from-[#B88A2A] to-[#8A6A1F] bg-clip-text text-transparent">
              في الدمام والخبر والقطيف
            </span>
          </h2>

          <p className="section-desc mx-auto text-[#667085]">
            {client.shortName} — تواصل معنا للاستفسار عن خدمات المظلات
            والسواتر والبرجولات والهناجر وأعمال الحدادة وتنفيذ المشاريع حسب
            احتياجكم.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={
                    card.href.startsWith("tel:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group relative overflow-hidden rounded-2xl border border-[#E5E1D8] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B56A] hover:shadow-xl"
                >
                  {/* Hover background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#D6B56A]/10 via-transparent to-[#526B5A]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D6B56A]/40 bg-[#F7F3E9] text-[#B88A2A] transition-all duration-300 group-hover:border-[#B88A2A] group-hover:bg-[#B88A2A] group-hover:text-white">
                      {card.title === "واتساب" ? (
                        <WhatsAppIcon className="h-7 w-7" />
                      ) : card.title === "Instagram" ? (
                        <InstagramIcon className="h-7 w-7" />
                      ) : card.title === "TikTok" ? (
                        <TikTokIcon className="h-7 w-7" />
                      ) : (
                        <Icon size={28} className="shrink-0" />
                      )}
                    </div>

                    <h3 className="mb-2 text-lg font-extrabold text-[#1F2933]">
                      {card.title}
                    </h3>

                    <p className="mb-2 break-words text-lg font-extrabold text-[#B88A2A] dir-ltr">
                      {card.value}
                    </p>

                    <p className="text-sm leading-6 text-[#667085]">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className="absolute bottom-0 right-0 h-1 w-0 bg-[#B88A2A] transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#E5E1D8] bg-white px-8 py-5 shadow-sm">
              <span className="font-extrabold text-[#B88A2A]">نخدم:</span>

              {client.serviceAreas.map((area, index) => (
                <span key={area} className="flex items-center gap-3">
                  <span className="font-semibold text-[#1F2933]">
                    {area}
                  </span>

                  {index < client.serviceAreas.length - 1 && (
                    <span className="text-[#D6B56A]">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

