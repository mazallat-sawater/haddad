import {
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  ArrowLeft,
  Hammer,
} from "lucide-react";

import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { contactLinks, client } from "@/config/client";
import { assetPath } from "@/lib/assetPath";

const navItems = [
  { label: "الرئيسية", hash: "#home" },
  { label: "خدماتنا", hash: "#services" },
  { label: "معرض الأعمال", hash: "#portfolio" },
  { label: "تواصل معنا", hash: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToHash = (hash: string) => {
    if (hash === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.querySelector(hash);

    if (!element) return;

    const offset =
      element.getBoundingClientRect().top +
      window.scrollY -
      90;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    event.preventDefault();
    setOpen(false);

    if (hash === "#home") {
      if (isHome) {
        navigate("/", { replace: true });

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");
      }

      return;
    }

    if (isHome) {
      window.history.replaceState(null, "", hash);
      scrollToHash(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  useEffect(() => {
    if (!isHome || !location.hash) return;

    const timer = setTimeout(() => {
      scrollToHash(location.hash);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [isHome, location.hash]);

  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setOpen(false);

    if (isHome) {
      navigate("/", { replace: true });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <header
      dir="rtl"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      {/* Header background */}
      <div
        className={`absolute inset-x-0 top-0 -z-10 h-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#C9A227]/20 bg-[#171717]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-[#171717]/90 backdrop-blur-md"
        }`}
      />

      <div className="section-container">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="group relative flex shrink-0 items-center gap-3"
            aria-label="العودة إلى الصفحة الرئيسية"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#C9A227]/40 bg-[#C9A227]/10">
              <img
                src={assetPath("/logo.svg")}
                alt={client.shortName}
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-base font-extrabold leading-tight text-[#F5F3ED]">
                {client.shortName}
              </h1>

              <p className="mt-0.5 max-w-[260px] truncate text-[11px] font-medium text-[#C9A227]">
                {client.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.hash}
                  href={isHome ? item.hash : `/${item.hash}`}
                  onClick={(event) =>
                    handleNavigation(event, item.hash)
                  }
                  className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#D8D4CA] transition-all duration-200 hover:bg-[#C9A227]/10 hover:text-[#C9A227]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={contactLinks.phone}
              className="flex h-11 items-center gap-2 rounded-xl border border-[#C9A227]/40 bg-white/[0.04] px-4 text-sm font-bold text-[#F5F3ED] transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227]/10"
            >
              <PhoneCall
                size={18}
                className="text-[#C9A227]"
              />

              <span className="hidden sm:inline">
                اتصال
              </span>
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-xl bg-[#C9A227] px-5 text-sm font-extrabold text-[#171717] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DDB735] hover:shadow-xl"
            >
              <MessageCircle size={18} />

              <span className="hidden sm:inline">
                واتساب
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open ? "إغلاق القائمة" : "فتح القائمة"
            }
            aria-expanded={open}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-white/[0.04] text-[#F5F3ED] transition-all hover:border-[#C9A227] hover:bg-[#C9A227]/10 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 top-[68px] z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[68px] z-50 max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-[#C9A227]/20 bg-[#171717] shadow-2xl transition-all duration-300 lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="section-container py-6">
          {/* Mobile Brand */}
          <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-[#C9A227]/10">
              <Hammer
                size={20}
                className="text-[#C9A227]"
              />
            </div>

            <div>
              <p className="font-extrabold text-[#F5F3ED]">
                {client.shortName}
              </p>

              <p className="mt-1 text-xs text-[#C9A227]">
                {client.serviceAreas.join(" · ")}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={isHome ? item.hash : `/${item.hash}`}
                onClick={(event) =>
                  handleNavigation(event, item.hash)
                }
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base font-bold text-[#E7E4DC] transition-all hover:border-[#C9A227]/40 hover:bg-[#C9A227]/10 hover:text-[#C9A227]"
              >
                <span>{item.label}</span>

                <ArrowLeft
                  size={20}
                  className="text-[#C9A227]"
                />
              </a>
            ))}
          </div>

          {/* Mobile Contact */}
          <div className="mt-6 space-y-3">
            <a
              href={contactLinks.phone}
              className="flex h-14 items-center justify-center gap-3 rounded-xl border border-[#C9A227]/40 bg-white/[0.04] text-base font-bold text-[#F5F3ED] transition-all hover:border-[#C9A227] hover:bg-[#C9A227]/10"
            >
              <PhoneCall
                size={20}
                className="text-[#C9A227]"
              />

              اتصل بنا
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-3 rounded-xl bg-[#C9A227] text-base font-extrabold text-[#171717] shadow-lg transition-all hover:bg-[#DDB735] hover:shadow-xl"
            >
              <MessageCircle size={20} />

              تواصل عبر واتساب
            </a>
          </div>

          {/* Phone / Areas */}
          <div className="mt-6 border-t border-white/10 pt-6 text-center">
            <p className="text-sm font-bold text-[#F5F3ED]">
              {client.phoneDisplay}
            </p>

            <p className="mt-2 text-xs font-medium text-[#C9A227]">
              {client.serviceAreas.join(" · ")}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;