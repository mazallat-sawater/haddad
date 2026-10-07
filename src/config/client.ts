/**
 * بيانات العميل الجديد
 * مظلات وسواتر وأعمال حدادة - الدمام والخبر والقطيف
 */

export const client = {
  companyName: "مظلات وسواتر وأعمال حدادة",
  shortName: "مظلات وسواتر",
  ownerName: "",
  designerName: "م/حسام الرفيد",
  designerWhatsapp: "967779098659",

  tagline: "مظلات · سواتر · برجولات · هناجر · أعمال حدادة",

  city: "الدمام",

  phone: "0504500495",
  phoneIntl: "966504500495",
  phoneDisplay: "050 450 0495",

  siteUrl: "https://hsammnwralrfyd-del.github.io/rubou-albilad",

  instagram: "https://www.instagram.com/zed2020p",
  mapsUrl: "https://maps.google.com/?q=الدمام",

  /*
   * ألوان الهوية الجديدة
   * طابع صناعي وفخم يناسب أعمال الحديد والمظلات والسواتر
   */
  accentColor: "#C9A227",
  primaryColor: "#171717",
  ivoryColor: "#F5F3ED",
  bronzeDark: "#8A6A1F",

  geo: {
    region: "SA-04",
    latitude: "26.4207",
    longitude: "50.0888",
  },

  description:
    "مظلات وسواتر وأعمال حدادة متخصصة في تصميم وتنفيذ وتركيب المظلات والسواتر والبرجولات والهناجر وأعمال الحدادة في الدمام والخبر والقطيف.",

  hero: {
    title: "مظلات وسواتر وأعمال حدادة",

    subtitle: "في الدمام والخبر والقطيف",

    paragraph1:
      "نصمّم وننفّذ ونركّب المظلات والسواتر والبرجولات والهناجر وأعمال الحدادة حسب احتياج العميل، مع الاهتمام بجودة التنفيذ ودقة العمل.",

    paragraph2:
      "تنفيذ احترافي · تصاميم حسب الطلب · أعمال حدادة · خدمة في الدمام والخبر والقطيف",
  },

  services: [
    {
      title: "المظلات",
      description: "تنفيذ مظلات السيارات والحدائق والمواقع المختلفة بتصاميم متنوعة.",
    },
    {
      title: "السواتر",
      description: "تنفيذ سواتر للمنازل والفلل والمواقع التجارية بتصاميم متعددة.",
    },
    {
      title: "البرجولات",
      description: "تنفيذ برجولات وجلسات خارجية بتصاميم عملية وعصرية.",
    },
    {
      title: "الهناجر",
      description: "تنفيذ الهناجر والمستودعات والهياكل المعدنية حسب الحاجة.",
    },
    {
      title: "أعمال الحدادة",
      description: "تنفيذ أعمال الحدادة والهياكل المعدنية والأعمال الحديدية حسب الطلب.",
    },
    {
      title: "الشبوك",
      description: "تنفيذ وتركيب الشبوك وتسوير الأراضي والمباني والمواقع المختلفة.",
    },
    {
      title: "مظلات السيارات",
      description: "مظلات سيارات بتصاميم هرمية ومقوسة وأشكال متعددة.",
    },
    {
      title: "مظلات الحدائق",
      description: "تنفيذ مظلات للحدائق والمساحات الخارجية والجلسات.",
    },
  ],

  navLinks: [
    { label: "الرئيسية", to: "/" },
    { label: "المظلات", to: "/canopies" },
    { label: "السواتر", to: "/shutters" },
    { label: "البرجولات", to: "/pergolas" },
    { label: "الهناجر", to: "/warehouses" },
    { label: "ساندوتش بانل", to: "/sandwich-panel" },
    { label: "الشبوك", to: "/fencing" },
    { label: "مظلات السيارات", to: "/car-canopies" },
    { label: "مظلات الحدائق", to: "/garden-canopies" },
  ],

  projects: [
    {
      title: "مظلات الدمام",
      description:
        "تنفيذ مظلات متنوعة للسيارات والمواقع المختلفة في الدمام.",
      link: "/canopies",
    },
    {
      title: "سواتر الخبر",
      description:
        "تنفيذ سواتر خصوصية للمنازل والفلل والمواقع المختلفة.",
      link: "/shutters",
    },
    {
      title: "أعمال الحدادة",
      description:
        "تنفيذ الأعمال الحديدية والهياكل المعدنية حسب الطلب.",
      link: "/canopies",
    },
    {
      title: "برجولات وجلسات",
      description:
        "تنفيذ برجولات وجلسات خارجية للمنازل والاستراحات والمساحات الخارجية.",
      link: "/pergolas",
    },
    {
      title: "هناجر ومستودعات",
      description:
        "تنفيذ الهناجر والمستودعات والهياكل المعدنية.",
      link: "/warehouses",
    },
    {
      title: "الشبوك والتسوير",
      description:
        "تنفيذ وتركيب الشبوك وتسوير الأراضي والمواقع المختلفة.",
      link: "/fencing",
    },
  ],

  socialMedia: {
    tiktok: "https://www.tiktok.com/@user0504500495",
    facebook: "",
    instagram: "https://www.instagram.com/zed2020p",
    googleMaps: "https://maps.google.com/?q=الدمام",
  },

  serviceAreas: ["الدمام", "الخبر", "القطيف"],
} as const;

export const contactLinks = {
  phone: `tel:+${client.phoneIntl}`,

  whatsapp: `https://wa.me/${client.phoneIntl}?text=${encodeURIComponent(
    "مرحباً، أرغب في الاستفسار عن خدمات المظلات والسواتر وأعمال الحدادة."
  )}`,

  whatsappShort: `https://wa.me/${client.phoneIntl}`,

  designerWhatsapp: `https://wa.me/${client.designerWhatsapp}?text=${encodeURIComponent(
    "مرحباً م/حسام الرفيد"
  )}`,

  instagram: client.instagram,
};