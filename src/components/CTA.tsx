
import { MessageCircle, PhoneCall, ArrowLeft } from "lucide-react";
import { contactLinks, client } from "@/config/client";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1F2933] py-20 md:py-24"
      dir="rtl"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1F2933] via-[#26352F] to-[#526B5A]"
        aria-hidden="true"
      />

      <div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D6B56A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B88A2A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute right-1/2 top-0 h-px w-40 translate-x-1/2 bg-gradient-to-r from-transparent via-[#D6B56A] to-transparent"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-10 shadow-2xl backdrop-blur-sm md:px-10 lg:flex-row lg:gap-12">
          <div className="text-center lg:text-right">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#D6B56A]/40 bg-[#D6B56A]/10 px-4 py-2 text-sm font-bold text-[#D6B56A]">
              جاهز لمشروعك؟
            </span>

            <h2 className="text-3xl font-black leading-tight text-[#FAF9F6] md:text-4xl">
              تواصل معنا الآن
              <span className="mt-2 block bg-gradient-to-l from-[#D6B56A] to-[#B88A2A] bg-clip-text text-transparent">
                وناقش تفاصيل مشروعك
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#F1EEE7]/75 md:text-base">
              للمظلات والسواتر والبرجولات والهناجر وأعمال الحدادة في{" "}
              {client.serviceAreas.join(" و")}.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-xl bg-[#526B5A] px-7 py-4 font-extrabold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#607B68] hover:shadow-xl"
              aria-label="التواصل عبر واتساب"
            >
              <MessageCircle
                size={21}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span>تواصل عبر واتساب</span>
            </a>

            <a
              href={contactLinks.phone}
              className="group inline-flex min-w-[160px] items-center justify-center gap-3 rounded-xl border border-[#D6B56A]/60 bg-transparent px-7 py-4 font-extrabold text-[#D6B56A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D6B56A] hover:text-[#1F2933]"
              aria-label="الاتصال بنا"
            >
              <PhoneCall
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span>اتصل الآن</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#F1EEE7]/50">
          <span>نخدمكم في المنطقة</span>
          <ArrowLeft size={15} className="text-[#D6B56A]" />
          <span className="font-semibold text-[#D6B56A]">
            {client.serviceAreas.join(" · ")}
          </span>
        </div>
      </div>
    </section>
  );
}

