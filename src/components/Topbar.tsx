
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { client, contactLinks } from "@/config/client";

export default function Topbar() {
  return (
    <div className="topbar" dir="rtl">
      <div className="container topbar-inner">
        <div className="top-left">
          <MapPin
            size={14}
            className="shrink-0"
          />

          <span>
            نخدم {client.serviceAreas.join(" و")}
          </span>

          <span className="dot">•</span>

          <span>{client.city}</span>
        </div>

        <div className="top-right">
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="التواصل عبر واتساب"
          >
            <MessageCircle
              size={14}
              className="shrink-0"
            />
            <span>واتساب</span>
          </a>

          <a
            href={contactLinks.phone}
            aria-label={`الاتصال على ${client.phoneDisplay}`}
          >
            <Phone
              size={14}
              className="shrink-0"
            />
            <span dir="ltr">{client.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
