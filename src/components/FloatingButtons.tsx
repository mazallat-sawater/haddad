
import { contactLinks } from "@/config/client";
import { PhoneCall, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div
      className="fixed bottom-4 left-4 z-[60] flex flex-col gap-3 sm:bottom-6 sm:left-6"
      dir="ltr"
    >
      {/* زر واتساب */}
      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
        aria-label="تواصل معنا عبر واتساب"
        title="واتساب"
      >
        <MessageCircle
          size={25}
          className="relative z-10 shrink-0"
        />

        <span
          className="absolute inset-0 animate-ping rounded-xl bg-[#25D366]/30"
          aria-hidden="true"
        />
      </a>

      {/* زر الاتصال */}
      <a
        href={contactLinks.phone}
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/50 bg-primary text-accent shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-primary sm:h-16 sm:w-16"
        aria-label="اتصل بنا الآن"
        title="اتصال مباشر"
      >
        <PhoneCall
          size={25}
          className="shrink-0"
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
