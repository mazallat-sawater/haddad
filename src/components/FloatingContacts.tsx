
import { contactLinks } from "@/config/client";

export default function FloatingContacts() {
  return (
    <div
      className="floating-contacts"
      dir="ltr"
    >
      <a
        href={contactLinks.phone}
        className="float phone"
        aria-label="اتصل بنا"
        title="اتصال مباشر"
      >
        ☎
      </a>

      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="float whatsapp"
        aria-label="تواصل معنا عبر واتساب"
        title="واتساب"
      >
        🟢
      </a>
    </div>
  );
}
