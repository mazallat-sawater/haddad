
import type { LucideIcon } from "lucide-react";

import {
  Sun,
  Shield,
  Armchair,
  Warehouse,
  Layers,
  Fence,
  Car,
  TreePine,
} from "lucide-react";

export type ServiceSeoKey =
  | "canopies"
  | "shutters"
  | "pergolas"
  | "warehouses"
  | "sandwichPanel"
  | "fencing"
  | "carCanopies"
  | "gardenCanopies"
  | "schoolCanopies"
  | "frenchArchCanopies"
  | "pyramidalCarCanopies"
  | "laserShutters"
  | "fencingShutters"
  | "woodCladding"
  | "cladding"
  | "claddingFacades"
  | "doors"
  | "warehousesDetail"
  | "sandwichWarehouses"
  | "fabricHouses"
  | "buildingFencing"
  | "roofingTiles";

export interface ServiceDefinition {
  id: ServiceSeoKey;
  slug: string;
  route: string;
  folder: string;
  title: string;
  shortTitle: string;
  badge: string;
  heroSubtitle: string;
  introTitle: string;
  introDescription: string;
  galleryTitle: string;
  galleryDescription: string;
  benefitsTitle: string;
  hasHeaderImage: boolean;
  galleryImageCount: number;
  cardImage: string;
  icon: LucideIcon;
  features: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  serviceTypes: Array<{
    title: string;
    description: string;
  }>;
  contentSections: Array<{
    title: string;
    description: string;
    imageIndex: number;
  }>;
  areasText: string;
}

/**
 * Hero uses header.webp when available.
 * Gallery uses numbered images only.
 */
export function getServiceHeroPath(service: ServiceDefinition): string {
  if (service.hasHeaderImage) {
    return `/${service.folder}/header.webp`;
  }

  return `/${service.folder}/1.webp`;
}

export function getServiceGalleryPaths(
  service: ServiceDefinition
): string[] {
  return Array.from(
    { length: service.galleryImageCount },
    (_, index) => `/${service.folder}/${index + 1}.webp`
  );
}

/* =========================================================
   بيانات العميل
   متخصص في المظلات والسواتر والهناجر والأعمال المتنوعة
   المناطق: الدمام - الخبر - القطيف
========================================================= */

const clientAreas =
  "نخدم الدمام والخبر والقطيف والمناطق المجاورة";

const defaultFeatures = [
  {
    title: "تنفيذ متقن",
    description:
      "تنفيذ الأعمال حسب احتياج العميل مع الاهتمام بالتفاصيل وجودة التركيب.",
  },
  {
    title: "تنفيذ حسب الطلب",
    description:
      "تصاميم ومقاسات يتم تنفيذها بما يتناسب مع مساحة الموقع ومتطلبات العميل.",
  },
  {
    title: "خامات مناسبة",
    description:
      "اختيار خامات مناسبة لطبيعة الاستخدام والموقع والعوامل الجوية.",
  },
  {
    title: "تشطيب مرتب",
    description:
      "اهتمام بالتفاصيل في القياس والتجهيز والتركيب والتشطيب النهائي.",
  },
];

/* =========================================================
   الخدمات الأساسية
========================================================= */

export const servicesList: ServiceDefinition[] = [
  {
    id: "canopies",
    slug: "canopies",
    route: "/canopies",
    folder: "canopies",
    title: "المظلات",
    shortTitle: "المظلات",
    badge: "مظلات",
    heroSubtitle: "مظلات متنوعة للمواقف والمنازل والمساحات الخارجية",
    introTitle: "المظلات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ مظلات للمنازل والفلل والمواقف والمساحات الخارجية بتصاميم متنوعة ومقاسات تناسب طبيعة الموقع واحتياج العميل.",
    galleryTitle: "معرض أعمال المظلات",
    galleryDescription:
      "نماذج من أعمال المظلات المنفذة للمنازل والمواقف والمساحات الخارجية.",
    benefitsTitle: "مميزات المظلات",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/canopies/1.webp",
    icon: Sun,
    features: defaultFeatures,
    benefits: [
      "حماية من أشعة الشمس",
      "تصاميم متنوعة",
      "تنفيذ حسب مساحة الموقع",
      "مناسبة للمنازل والفلل",
      "حلول للمواقف والمساحات الخارجية",
      "تركيب وتشطيب مرتب",
    ],
    serviceTypes: [
      {
        title: "مظلات سيارات",
        description:
          "مظلات مناسبة لمواقف السيارات في المنازل والفلل.",
      },
      {
        title: "مظلات للمنازل",
        description:
          "حلول مناسبة للمداخل والمواقف والمساحات الخارجية.",
      },
      {
        title: "مظلات للمشاريع",
        description:
          "تنفيذ مظلات للمواقف والساحات والمشاريع المختلفة.",
      },
      {
        title: "تصميم حسب الطلب",
        description:
          "تنفيذ حسب مساحة الموقع والشكل المطلوب.",
      },
    ],
    contentSections: [
      {
        title: "مظلات السيارات",
        description:
          "تنفيذ مظلات مناسبة لمواقف المنازل والفلل.",
        imageIndex: 0,
      },
      {
        title: "مظلات المواقف",
        description:
          "حلول مناسبة للمواقف الخاصة والمساحات الخارجية.",
        imageIndex: 1,
      },
      {
        title: "مظلات للمنازل",
        description:
          "تصاميم مناسبة للمداخل والمواقف والمساحات الخارجية.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب المقاس",
        description:
          "تصميم وتركيب حسب مساحة وطبيعة الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "shutters",
    slug: "shutters",
    route: "/shutters",
    folder: "shutters",
    title: "السواتر",
    shortTitle: "السواتر",
    badge: "سواتر",
    heroSubtitle: "خصوصية وحماية بتصاميم متنوعة",
    introTitle: "السواتر في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ سواتر للمنازل والفلل والمنشآت بتصاميم ومقاسات متنوعة تناسب طبيعة الموقع واحتياج العميل.",
    galleryTitle: "معرض أعمال السواتر",
    galleryDescription:
      "نماذج من أعمال السواتر المنفذة للمنازل والفلل والمواقع المختلفة.",
    benefitsTitle: "مميزات السواتر",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/shutters/1.webp",
    icon: Shield,
    features: defaultFeatures,
    benefits: [
      "خصوصية وحماية للموقع",
      "تصاميم متعددة",
      "تنفيذ حسب المساحة",
      "مناسبة للمنازل والفلل",
      "حلول متنوعة للمواقع",
      "تركيب وتشطيب مرتب",
    ],
    serviceTypes: [
      {
        title: "سواتر للمنازل",
        description:
          "حلول مناسبة للمنازل والفلل والمساحات الخارجية.",
      },
      {
        title: "سواتر للفلل",
        description:
          "تصاميم مناسبة للواجهات والمساحات الخارجية.",
      },
      {
        title: "سواتر للمواقع",
        description:
          "حلول مناسبة للمواقع والمرافق المختلفة.",
      },
      {
        title: "سواتر حسب الطلب",
        description:
          "تصميم وتنفيذ حسب المقاسات المطلوبة.",
      },
    ],
    contentSections: [
      {
        title: "سواتر للمنازل",
        description:
          "تنفيذ سواتر مناسبة للمنازل والفلل.",
        imageIndex: 0,
      },
      {
        title: "سواتر للفلل",
        description:
          "تصاميم مناسبة للواجهات والمساحات الخارجية.",
        imageIndex: 1,
      },
      {
        title: "تصاميم متنوعة",
        description:
          "حلول متعددة تناسب الاستخدام الخارجي.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب الموقع",
        description:
          "قياس وتنفيذ بما يناسب طبيعة المكان.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "pergolas",
    slug: "pergolas",
    route: "/pergolas",
    folder: "Pergolas1",
    title: "البرجولات",
    shortTitle: "البرجولات",
    badge: "برجولات",
    heroSubtitle: "تصاميم أنيقة للمساحات الخارجية",
    introTitle: "البرجولات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ برجولات للمنازل والفلل والاستراحات والحدائق بتصاميم عملية وعصرية حسب مساحة الموقع.",
    galleryTitle: "معرض أعمال البرجولات",
    galleryDescription:
      "نماذج من أعمال البرجولات للمنازل والاستراحات والمساحات الخارجية.",
    benefitsTitle: "مميزات البرجولات",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/Pergolas1/1.webp",
    icon: Armchair,
    features: defaultFeatures,
    benefits: [
      "تصاميم متنوعة",
      "مناسبة للمساحات الخارجية",
      "تنفيذ حسب المقاس",
      "مظهر عملي وأنيق",
      "مناسبة للجلسات والاستراحات",
      "تركيب وتشطيب مرتب",
    ],
    serviceTypes: [
      {
        title: "برجولات للمنازل",
        description:
          "برجولات مناسبة للمنازل والفلل.",
      },
      {
        title: "برجولات للفلل",
        description:
          "تصاميم مناسبة للفلل والمساحات الخارجية.",
      },
      {
        title: "برجولات للاستراحات",
        description:
          "حلول مناسبة للجلسات والاستراحات.",
      },
      {
        title: "تصميم حسب الطلب",
        description:
          "تنفيذ حسب المساحة والتصميم المطلوب.",
      },
    ],
    contentSections: [
      {
        title: "برجولات للفلل",
        description:
          "تنفيذ برجولات للمنازل والفلل.",
        imageIndex: 0,
      },
      {
        title: "برجولات للاستراحات",
        description:
          "برجولات مناسبة للجلسات والمساحات الخارجية.",
        imageIndex: 1,
      },
      {
        title: "تصاميم متنوعة",
        description:
          "تصاميم مناسبة للمساحات الخارجية.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب المقاس",
        description:
          "قياس وتصنيع وتركيب حسب متطلبات العميل.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "warehouses",
    slug: "warehouses",
    route: "/warehouses",
    folder: "WarehousesDetail1",
    title: "الهناجر",
    shortTitle: "الهناجر",
    badge: "هناجر",
    heroSubtitle: "حلول للمستودعات والورش والمشاريع",
    introTitle: "الهناجر في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ الهناجر للمستودعات والورش والمشاريع والمنشآت حسب المساحة ومتطلبات الاستخدام.",
    galleryTitle: "معرض أعمال الهناجر",
    galleryDescription:
      "نماذج من أعمال الهناجر والمشاريع المنفذة.",
    benefitsTitle: "مميزات الهناجر",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/WarehousesDetail1/1.webp",
    icon: Warehouse,
    features: defaultFeatures,
    benefits: [
      "تنفيذ حسب مساحة المشروع",
      "مناسبة للمستودعات والورش",
      "تصاميم حسب طبيعة الاستخدام",
      "حلول للمشاريع المختلفة",
      "تنفيذ وتركيب مرتب",
      "اهتمام بالتفاصيل",
    ],
    serviceTypes: [
      {
        title: "هناجر للمشاريع",
        description:
          "تنفيذ هناجر للمشاريع والمنشآت المختلفة.",
      },
      {
        title: "هناجر للمستودعات",
        description:
          "حلول مناسبة للمستودعات والمساحات الكبيرة.",
      },
      {
        title: "هناجر للورش",
        description:
          "تنفيذ حلول مناسبة للورش والمواقع.",
      },
      {
        title: "تصميم مخصص",
        description:
          "تنفيذ حسب أبعاد ومتطلبات المشروع.",
      },
    ],
    contentSections: [
      {
        title: "هناجر للمشاريع",
        description:
          "تنفيذ هناجر للمشاريع المختلفة.",
        imageIndex: 0,
      },
      {
        title: "المستودعات",
        description:
          "حلول مناسبة للمستودعات والمساحات الواسعة.",
        imageIndex: 1,
      },
      {
        title: "الورش والمشاريع",
        description:
          "حلول مناسبة للورش والمشاريع.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ شامل",
        description:
          "من القياس والتجهيز حتى التركيب.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "sandwichPanel",
    slug: "sandwich-panel",
    route: "/sandwich-panel",
    folder: "sandwich-warehouses",
    title: "ساندوتش بانل",
    shortTitle: "ساندوتش بانل",
    badge: "ساندوتش بانل",
    heroSubtitle: "حلول تغطية وعزل للمشاريع",
    introTitle: "ساندوتش بانل في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ وتركيب ألواح ساندوتش بانل ضمن أعمال الهناجر والمستودعات والمشاريع حسب احتياجات الموقع.",
    galleryTitle: "معرض أعمال ساندوتش بانل",
    galleryDescription:
      "نماذج من أعمال التغطية المرتبطة بساندوتش بانل.",
    benefitsTitle: "مميزات ساندوتش بانل",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/sandwich-warehouses/1.webp",
    icon: Layers,
    features: defaultFeatures,
    benefits: [
      "تغطية مناسبة للهناجر",
      "يساعد على العزل الحراري",
      "تركيب عملي",
      "مناسب للمستودعات والورش",
      "تنفيذ حسب المشروع",
      "تشطيب مرتب للموقع",
    ],
    serviceTypes: [
      {
        title: "أسقف ساندوتش بانل",
        description:
          "تغطية أسقف الهناجر والمنشآت.",
      },
      {
        title: "جدران ساندوتش بانل",
        description:
          "تنفيذ جدران وتغطيات للمشاريع.",
      },
      {
        title: "هناجر ساندوتش",
        description:
          "تنفيذ هناجر مع تغطية ساندوتش بانل.",
      },
      {
        title: "تنفيذ حسب الطلب",
        description:
          "حلول مناسبة لأبعاد المشروع.",
      },
    ],
    contentSections: [
      {
        title: "أسقف ساندوتش بانل",
        description:
          "تنفيذ تغطية مناسبة لأسقف الهناجر.",
        imageIndex: 0,
      },
      {
        title: "جدران ساندوتش بانل",
        description:
          "تنفيذ جدران وتغطيات للمشاريع.",
        imageIndex: 1,
      },
      {
        title: "هناجر ساندوتش",
        description:
          "حلول مناسبة للهناجر والمستودعات.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ احترافي",
        description:
          "تركيب وفق أبعاد ومتطلبات الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "fencing",
    slug: "fencing",
    route: "/fencing",
    folder: "fencing",
    title: "الشبوك والتسوير",
    shortTitle: "الشبوك",
    badge: "شبوك وتسوير",
    heroSubtitle: "حماية وتسوير للمواقع",
    introTitle: "الشبوك والتسوير في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ شبوك وتسوير للأراضي والمنازل والمنشآت والمواقع المختلفة حسب مساحة الموقع واحتياج العميل.",
    galleryTitle: "معرض أعمال الشبوك والتسوير",
    galleryDescription:
      "نماذج من أعمال الشبوك والتسوير للمواقع المختلفة.",
    benefitsTitle: "مميزات الشبوك والتسوير",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/fencing/1.webp",
    icon: Fence,
    features: defaultFeatures,
    benefits: [
      "تسوير وحماية للمواقع",
      "مقاسات وتصاميم متنوعة",
      "مناسبة للأراضي والمنشآت",
      "تنفيذ حسب الموقع",
      "حلول للمشاريع المختلفة",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "شبوك",
        description:
          "تنفيذ شبوك للمواقع والأراضي.",
      },
      {
        title: "تسوير الأراضي",
        description:
          "تسوير للأراضي والمشاريع.",
      },
      {
        title: "تسوير المنشآت",
        description:
          "حلول تسوير للمباني والمواقع.",
      },
      {
        title: "تنفيذ حسب المساحة",
        description:
          "تصنيع وتركيب حسب أبعاد الموقع.",
      },
    ],
    contentSections: [
      {
        title: "شبوك",
        description:
          "تنفيذ شبوك متينة للمواقع المختلفة.",
        imageIndex: 0,
      },
      {
        title: "تسوير الأراضي",
        description:
          "تسوير الأراضي والمواقع حسب المقاس.",
        imageIndex: 1,
      },
      {
        title: "تسوير المنشآت",
        description:
          "تسوير مناسب للمباني والمنشآت.",
        imageIndex: 2,
      },
      {
        title: "تركيب مرتب",
        description:
          "تنفيذ وتركيب حسب طبيعة الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },
];

/* =========================================================
   الخدمات الإضافية
   نحافظ على IDs والروابط القديمة حتى لا تتعطل الصفحات
========================================================= */

const additionalServices: ServiceDefinition[] = [
  {
    id: "carCanopies",
    slug: "car-canopies",
    route: "/car-canopies",
    folder: "pyramidal-car-canopies",
    title: "مظلات السيارات",
    shortTitle: "مظلات سيارات",
    badge: "مظلات سيارات",
    heroSubtitle: "حماية للسيارات بتصاميم متنوعة",
    introTitle:
      "مظلات السيارات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ مظلات سيارات للمواقف والمنازل والفلل بتصاميم متنوعة حسب مساحة الموقع.",
    galleryTitle: "معرض أعمال مظلات السيارات",
    galleryDescription:
      "نماذج من أعمال مظلات السيارات.",
    benefitsTitle: "مميزات مظلات السيارات",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/pyramidal-car-canopies/1.webp",
    icon: Car,
    features: defaultFeatures,
    benefits: [
      "حماية من أشعة الشمس",
      "تصاميم متنوعة",
      "تنفيذ حسب مساحة الموقف",
      "مناسبة للمنازل والفلل",
      "حلول للمواقف المختلفة",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "مظلات سيارات",
        description:
          "حلول مناسبة لمواقف السيارات.",
      },
      {
        title: "مظلات للمنازل",
        description:
          "حلول مناسبة لمواقف المنازل والفلل.",
      },
      {
        title: "مظلات للمشاريع",
        description:
          "مظلات للمواقف والمشاريع المختلفة.",
      },
      {
        title: "تصميم مخصص",
        description:
          "تنفيذ حسب مساحة الموقع.",
      },
    ],
    contentSections: [
      {
        title: "مظلات المنازل",
        description:
          "تنفيذ مظلات سيارات للمنازل والفلل.",
        imageIndex: 0,
      },
      {
        title: "مظلات المواقف",
        description:
          "حلول للمواقف الخاصة والعامة.",
        imageIndex: 1,
      },
      {
        title: "تصاميم متنوعة",
        description:
          "تصاميم مناسبة لمواقف السيارات.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب المقاس",
        description:
          "تصميم وتركيب حسب مساحة الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "gardenCanopies",
    slug: "garden-canopies",
    route: "/garden-canopies",
    folder: "garden-canopies",
    title: "مظلات الحدائق والجلسات",
    shortTitle: "مظلات حدائق",
    badge: "مظلات حدائق",
    heroSubtitle: "حلول للمساحات الخارجية",
    introTitle:
      "مظلات الحدائق والجلسات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ مظلات للحدائق والجلسات والاستراحات والمساحات الخارجية بتصاميم تناسب طبيعة المكان.",
    galleryTitle: "معرض أعمال مظلات الحدائق",
    galleryDescription:
      "نماذج من أعمال المظلات الخارجية.",
    benefitsTitle: "مميزات مظلات الحدائق",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/garden-canopies/1.webp",
    icon: TreePine,
    features: defaultFeatures,
    benefits: [
      "توفير الظل للمساحات الخارجية",
      "تصاميم متعددة",
      "تنفيذ حسب مساحة المكان",
      "مناسبة للحدائق والاستراحات",
      "حلول للجلسات الخارجية",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "مظلات حدائق",
        description:
          "مظلات مناسبة للحدائق والمساحات الخارجية.",
      },
      {
        title: "مظلات جلسات",
        description:
          "حلول مناسبة للجلسات الخارجية.",
      },
      {
        title: "مظلات استراحات",
        description:
          "حلول مناسبة للاستراحات.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب مساحة وشكل الموقع.",
      },
    ],
    contentSections: [
      {
        title: "مظلات الحدائق",
        description:
          "حلول للمساحات والحدائق الخارجية.",
        imageIndex: 0,
      },
      {
        title: "مظلات الجلسات",
        description:
          "تغطية مناسبة للجلسات الخارجية.",
        imageIndex: 1,
      },
      {
        title: "مظلات الاستراحات",
        description:
          "تنفيذ مظلات للمساحات الخارجية.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب الموقع",
        description:
          "قياس وتصميم حسب طبيعة المكان.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "schoolCanopies",
    slug: "school-canopies",
    route: "/school-canopies",
    folder: "Gallery1",
    title: "مظلات المنشآت والمشاريع",
    shortTitle: "مظلات مشاريع",
    badge: "مظلات منشآت",
    heroSubtitle: "حلول مظلات للمشاريع والمنشآت",
    introTitle:
      "مظلات المنشآت والمشاريع في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ مظلات للمشاريع والمنشآت والمواقف والساحات حسب طبيعة الموقع ومتطلبات المشروع.",
    galleryTitle: "معرض أعمال مظلات المشاريع",
    galleryDescription:
      "نماذج من أعمال المظلات للمشاريع والمنشآت.",
    benefitsTitle: "مميزات مظلات المشاريع",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/Gallery1/1.webp",
    icon: Sun,
    features: defaultFeatures,
    benefits: [
      "حلول للمشاريع والمنشآت",
      "تغطية الساحات والمواقف",
      "تصاميم حسب مساحة الموقع",
      "تنفيذ وتركيب مرتب",
      "مناسبة للاستخدامات المختلفة",
      "حلول للمساحات الخارجية",
    ],
    serviceTypes: [
      {
        title: "مظلات الساحات",
        description:
          "تغطية الساحات والمساحات الخارجية.",
      },
      {
        title: "مظلات المواقف",
        description:
          "مظلات لمواقف السيارات.",
      },
      {
        title: "مظلات المنشآت",
        description:
          "حلول للمباني والمنشآت.",
      },
      {
        title: "تنفيذ المشاريع",
        description:
          "تنفيذ حسب متطلبات المشروع.",
      },
    ],
    contentSections: [
      {
        title: "مظلات الساحات",
        description:
          "تغطية الساحات والمساحات الخارجية.",
        imageIndex: 0,
      },
      {
        title: "مظلات المواقف",
        description:
          "حلول لمواقف السيارات.",
        imageIndex: 1,
      },
      {
        title: "مظلات المنشآت",
        description:
          "مظلات للمباني والمنشآت.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ المشاريع",
        description:
          "تنفيذ حسب متطلبات الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "frenchArchCanopies",
    slug: "french-arch-canopies",
    route: "/french-arch-canopies",
    folder: "french-arch-canopies",
    title: "المظلات المقوسة",
    shortTitle: "مظلات مقوسة",
    badge: "مظلات مقوسة",
    heroSubtitle: "تصاميم مقوسة أنيقة",
    introTitle:
      "المظلات المقوسة في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ مظلات مقوسة للمواقف والمنازل والمنشآت بتصاميم متنوعة تناسب مساحة الموقع.",
    galleryTitle: "معرض أعمال المظلات المقوسة",
    galleryDescription:
      "نماذج من أعمال المظلات المقوسة.",
    benefitsTitle: "مميزات المظلات المقوسة",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/french-arch-canopies/1.webp",
    icon: Sun,
    features: defaultFeatures,
    benefits: [
      "تصميم مقوس أنيق",
      "تنفيذ حسب المقاس",
      "مناسبة للمواقف والمداخل",
      "تصاميم متعددة",
      "حلول للمنازل والفلل",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "مظلات مقوسة",
        description:
          "مظلات بتصميم مقوس أنيق.",
      },
      {
        title: "مظلات مواقف",
        description:
          "حلول للمواقف والمداخل.",
      },
      {
        title: "مظلات فلل",
        description:
          "تصاميم مناسبة للفلل والمنازل.",
      },
      {
        title: "تصميم حسب الطلب",
        description:
          "تنفيذ حسب المساحة.",
      },
    ],
    contentSections: [
      {
        title: "مظلات مواقف",
        description:
          "مظلات مقوسة لمواقف السيارات.",
        imageIndex: 0,
      },
      {
        title: "مظلات فلل",
        description:
          "تصاميم مناسبة للمنازل والفلل.",
        imageIndex: 1,
      },
      {
        title: "تصاميم مقوسة",
        description:
          "تصاميم مناسبة للمداخل والمواقف.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ مرتب",
        description:
          "قياس وتصنيع وتركيب حسب الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "pyramidalCarCanopies",
    slug: "pyramidal-car-canopies",
    route: "/pyramidal-car-canopies",
    folder: "pyramidal-car-canopies",
    title: "المظلات الهرمية",
    shortTitle: "مظلات هرمية",
    badge: "مظلات هرمية",
    heroSubtitle: "تصاميم هرمية عملية للمواقف",
    introTitle:
      "المظلات الهرمية في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ مظلات سيارات هرمية بتصاميم مختلفة تناسب مواقف المنازل والفلل والمشاريع.",
    galleryTitle: "معرض أعمال المظلات الهرمية",
    galleryDescription:
      "نماذج من أعمال المظلات الهرمية.",
    benefitsTitle: "مميزات المظلات الهرمية",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/pyramidal-car-canopies/1.webp",
    icon: Car,
    features: defaultFeatures,
    benefits: [
      "تصميم هرمي عملي",
      "حماية للمواقف",
      "تنفيذ حسب المساحة",
      "مناسبة للمنازل والمشاريع",
      "تصاميم متنوعة",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "مظلات سيارات هرمية",
        description:
          "حلول مناسبة لمواقف السيارات.",
      },
      {
        title: "مظلات فلل",
        description:
          "مظلات مناسبة للفلل والمنازل.",
      },
      {
        title: "مظلات مشاريع",
        description:
          "حلول للمواقف والمشاريع.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب مساحة الموقع.",
      },
    ],
    contentSections: [
      {
        title: "مظلات للمنازل",
        description:
          "مظلات هرمية لمواقف المنازل.",
        imageIndex: 0,
      },
      {
        title: "مظلات للفلل",
        description:
          "حلول مناسبة لمواقف الفلل.",
        imageIndex: 1,
      },
      {
        title: "مظلات المشاريع",
        description:
          "مظلات للمشاريع والمواقف.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب المقاس",
        description:
          "تصنيع وتركيب حسب الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "laserShutters",
    slug: "laser-shutters",
    route: "/laser-shutters",
    folder: "Gallery1",
    title: "السواتر الليزر",
    shortTitle: "سواتر ليزر",
    badge: "سواتر ليزر",
    heroSubtitle: "تصاميم عصرية للخصوصية والحماية",
    introTitle:
      "سواتر الليزر في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ سواتر بتصاميم ليزر متنوعة للمنازل والفلل والمنشآت مع إمكانية تنفيذ التصميم حسب الطلب.",
    galleryTitle: "معرض أعمال سواتر الليزر",
    galleryDescription:
      "نماذج من أعمال السواتر بتصاميم متنوعة.",
    benefitsTitle: "مميزات سواتر الليزر",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/Gallery1/1.webp",
    icon: Shield,
    features: defaultFeatures,
    benefits: [
      "تصاميم ليزر متنوعة",
      "خصوصية وحماية",
      "مظهر عصري",
      "تنفيذ حسب المقاس",
      "مناسبة للمنازل والفلل",
      "تشطيب وتركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "سواتر ليزر",
        description:
          "سواتر بتصاميم ليزر متنوعة.",
      },
      {
        title: "سواتر فلل",
        description:
          "حلول مناسبة للفلل والمنازل.",
      },
      {
        title: "سواتر واجهات",
        description:
          "تصاميم للمداخل والواجهات.",
      },
      {
        title: "تصميم مخصص",
        description:
          "اختيار التصميم حسب طلب العميل.",
      },
    ],
    contentSections: [
      {
        title: "سواتر للفلل",
        description:
          "سواتر ليزر للفلل والمنازل.",
        imageIndex: 0,
      },
      {
        title: "سواتر للمداخل",
        description:
          "حلول للمداخل والواجهات.",
        imageIndex: 1,
      },
      {
        title: "تصاميم ليزر",
        description:
          "أنماط وتصاميم ليزر متنوعة.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب الطلب",
        description:
          "تصنيع وتركيب حسب المقاس.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "fencingShutters",
    slug: "fencing-shutters",
    route: "/fencing-shutters",
    folder: "fencing-shutters",
    title: "السواتر والشبوك",
    shortTitle: "سواتر وشبوك",
    badge: "سواتر وشبوك",
    heroSubtitle: "حماية وخصوصية للمواقع",
    introTitle:
      "السواتر والشبوك في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ سواتر وشبوك للمنازل والفلل والأراضي والمنشآت حسب طبيعة الموقع.",
    galleryTitle: "معرض أعمال السواتر والشبوك",
    galleryDescription:
      "نماذج من أعمال السواتر والشبوك.",
    benefitsTitle: "مميزات السواتر والشبوك",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/fencing-shutters/1.webp",
    icon: Fence,
    features: defaultFeatures,
    benefits: [
      "حماية وخصوصية",
      "تنفيذ حسب الموقع",
      "تصاميم متعددة",
      "مناسبة للمنازل والأراضي",
      "حلول للمشاريع",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "سواتر",
        description:
          "سواتر مناسبة للمنازل والفلل.",
      },
      {
        title: "شبوك",
        description:
          "شبوك مناسبة للأراضي والمواقع.",
      },
      {
        title: "تسوير مواقع",
        description:
          "تسوير للمشاريع والمنشآت.",
      },
      {
        title: "تنفيذ حسب الطلب",
        description:
          "حسب مساحة وطبيعة الموقع.",
      },
    ],
    contentSections: [
      {
        title: "سواتر",
        description:
          "تنفيذ سواتر للمنازل والفلل.",
        imageIndex: 0,
      },
      {
        title: "شبوك",
        description:
          "شبوك للمواقع والأراضي.",
        imageIndex: 1,
      },
      {
        title: "تسوير المشاريع",
        description:
          "حلول تسوير للمشاريع.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ مرتب",
        description:
          "قياس وتصنيع وتركيب حسب الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "woodCladding",
    slug: "wood-cladding",
    route: "/wood-cladding",
    folder: "WoodCladding1",
    title: "التلبيسات والديكورات",
    shortTitle: "تلبيسات وديكورات",
    badge: "تلبيسات وديكورات",
    heroSubtitle: "تفاصيل أنيقة للمداخل والواجهات",
    introTitle:
      "التلبيسات والديكورات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ أعمال وتفاصيل ديكورية للمداخل والواجهات والمساحات الخارجية حسب التصميم المطلوب.",
    galleryTitle:
      "معرض أعمال التلبيسات والديكورات",
    galleryDescription:
      "نماذج من أعمال التلبيسات والتفاصيل الديكورية.",
    benefitsTitle: "مميزات الأعمال الديكورية",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/WoodCladding1/1.webp",
    icon: Layers,
    features: defaultFeatures,
    benefits: [
      "تصاميم ديكورية متنوعة",
      "تنفيذ حسب الطلب",
      "مناسبة للمداخل والواجهات",
      "تفاصيل دقيقة",
      "حلول للمساحات الخارجية",
      "تشطيب مرتب",
    ],
    serviceTypes: [
      {
        title: "ديكورات",
        description:
          "تنفيذ تفاصيل ديكورية متنوعة.",
      },
      {
        title: "واجهات",
        description:
          "أعمال مناسبة للواجهات والمداخل.",
      },
      {
        title: "أعمال خارجية",
        description:
          "تفاصيل للمساحات الخارجية.",
      },
      {
        title: "تصميم حسب الطلب",
        description:
          "تنفيذ التصميم المطلوب.",
      },
    ],
    contentSections: [
      {
        title: "ديكورات",
        description:
          "تفاصيل مناسبة للمداخل والمساحات الخارجية.",
        imageIndex: 0,
      },
      {
        title: "أعمال الواجهات",
        description:
          "حلول مناسبة للواجهات والمداخل.",
        imageIndex: 1,
      },
      {
        title: "تصاميم حسب الطلب",
        description:
          "تنفيذ التصاميم والمقاسات المطلوبة.",
        imageIndex: 2,
      },
      {
        title: "تشطيب مرتب",
        description:
          "اهتمام بالتفاصيل النهائية.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "cladding",
    slug: "cladding",
    route: "/cladding",
    folder: "Gallery1",
    title: "أعمال الواجهات",
    shortTitle: "واجهات",
    badge: "أعمال واجهات",
    heroSubtitle: "حلول أنيقة للواجهات والمداخل",
    introTitle:
      "أعمال الواجهات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ أعمال متنوعة للواجهات والمداخل والمساحات الخارجية حسب التصميم والمقاسات المطلوبة.",
    galleryTitle: "معرض أعمال الواجهات",
    galleryDescription:
      "نماذج من الأعمال المنفذة للواجهات والمداخل.",
    benefitsTitle:
      "مميزات أعمال الواجهات",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/Gallery1/1.webp",
    icon: Layers,
    features: defaultFeatures,
    benefits: [
      "تصاميم متنوعة",
      "تنفيذ حسب المقاس",
      "مناسبة للواجهات والمداخل",
      "تشطيب مرتب",
      "حلول للمنازل والمشاريع",
      "تركيب احترافي",
    ],
    serviceTypes: [
      {
        title: "واجهات",
        description:
          "أعمال مناسبة للواجهات.",
      },
      {
        title: "مداخل",
        description:
          "تفاصيل وأعمال مناسبة للمداخل.",
      },
      {
        title: "ديكورات",
        description:
          "حلول ديكورية للمظهر الخارجي.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب طلب العميل.",
      },
    ],
    contentSections: [
      {
        title: "واجهات",
        description:
          "أعمال مناسبة للواجهات.",
        imageIndex: 0,
      },
      {
        title: "مداخل",
        description:
          "تنفيذ أعمال مناسبة للمداخل.",
        imageIndex: 1,
      },
      {
        title: "تفاصيل ديكورية",
        description:
          "لمسات مناسبة للمظهر الخارجي.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب الطلب",
        description:
          "تنفيذ حسب المقاس والتصميم.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "claddingFacades",
    slug: "cladding-facades",
    route: "/cladding-facades",
    folder: "Gallery1",
    title: "واجهات وتفاصيل خارجية",
    shortTitle: "واجهات",
    badge: "واجهات",
    heroSubtitle: "تصاميم أنيقة للواجهات والمداخل",
    introTitle:
      "واجهات وتفاصيل خارجية في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ أعمال للواجهات والمداخل والفلل والمنشآت بتصاميم تناسب طبيعة المبنى.",
    galleryTitle:
      "معرض أعمال الواجهات",
    galleryDescription:
      "نماذج من أعمال الواجهات والتفاصيل الخارجية.",
    benefitsTitle:
      "مميزات الواجهات",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/Gallery1/1.webp",
    icon: Layers,
    features: defaultFeatures,
    benefits: [
      "تصاميم عصرية",
      "تنفيذ حسب المقاس",
      "مناسبة للفلل والمباني",
      "تفاصيل دقيقة",
      "حلول للمداخل والواجهات",
      "تركيب احترافي",
    ],
    serviceTypes: [
      {
        title: "واجهات فلل",
        description:
          "أعمال مناسبة للفلل والمنازل.",
      },
      {
        title: "واجهات مباني",
        description:
          "حلول مناسبة للمباني والمنشآت.",
      },
      {
        title: "مداخل",
        description:
          "أعمال وتفاصيل مناسبة للمداخل.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب التصميم والمقاس.",
      },
    ],
    contentSections: [
      {
        title: "واجهات الفلل",
        description:
          "تنفيذ أعمال مناسبة للفلل.",
        imageIndex: 0,
      },
      {
        title: "واجهات المباني",
        description:
          "أعمال مناسبة للمباني والمنشآت.",
        imageIndex: 1,
      },
      {
        title: "المداخل",
        description:
          "تفاصيل مناسبة للمداخل.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ مرتب",
        description:
          "تصنيع وتركيب حسب الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "doors",
    slug: "doors",
    route: "/doors",
    folder: "Gallery1",
    title: "الأبواب",
    shortTitle: "أبواب",
    badge: "أبواب",
    heroSubtitle: "أبواب متينة بتصاميم ومقاسات حسب الطلب",
    introTitle:
      "الأبواب في الدمام والخبر والقطيف",
    introDescription:
      "تصنيع وتركيب الأبواب للمنازل والفلل والمداخل والمنشآت بتصاميم ومقاسات حسب الطلب.",
    galleryTitle:
      "معرض أعمال الأبواب",
    galleryDescription:
      "نماذج من أعمال الأبواب المنفذة.",
    benefitsTitle:
      "مميزات الأبواب",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/Gallery1/1.webp",
    icon: Shield,
    features: defaultFeatures,
    benefits: [
      "تصاميم متنوعة",
      "مقاسات حسب الطلب",
      "مناسبة للمداخل والمنازل",
      "تشطيب حسب التصميم",
      "حلول للمشاريع والمنشآت",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "أبواب خارجية",
        description:
          "أبواب مناسبة للمداخل الخارجية.",
      },
      {
        title: "أبواب فلل",
        description:
          "تصاميم مناسبة للفلل والمنازل.",
      },
      {
        title: "أبواب للمشاريع",
        description:
          "أبواب مناسبة للمنشآت والمشاريع.",
      },
      {
        title: "أبواب حسب الطلب",
        description:
          "تصنيع حسب المقاس والتصميم.",
      },
    ],
    contentSections: [
      {
        title: "أبواب المداخل",
        description:
          "أبواب مناسبة للمداخل الرئيسية.",
        imageIndex: 0,
      },
      {
        title: "أبواب الفلل",
        description:
          "تصاميم مناسبة للفلل والمنازل.",
        imageIndex: 1,
      },
      {
        title: "أبواب المنشآت",
        description:
          "أبواب مناسبة للمشاريع والمنشآت.",
        imageIndex: 2,
      },
      {
        title: "تصنيع حسب الطلب",
        description:
          "تنفيذ حسب المقاس والتصميم.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "warehousesDetail",
    slug: "warehouses-detail",
    route: "/warehouses-detail",
    folder: "WarehousesDetail1",
    title: "هياكل المستودعات",
    shortTitle: "هياكل مستودعات",
    badge: "هياكل مستودعات",
    heroSubtitle: "حلول للمستودعات والمشاريع",
    introTitle:
      "هياكل المستودعات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ هياكل للمستودعات والمشاريع بمقاسات مختلفة حسب طبيعة المشروع ومتطلبات الموقع.",
    galleryTitle:
      "معرض أعمال هياكل المستودعات",
    galleryDescription:
      "نماذج من أعمال الهياكل للمستودعات.",
    benefitsTitle:
      "مميزات هياكل المستودعات",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/WarehousesDetail1/1.webp",
    icon: Warehouse,
    features: defaultFeatures,
    benefits: [
      "تنفيذ حسب مساحة المشروع",
      "مناسبة للمستودعات",
      "تصاميم حسب الاستخدام",
      "حلول للمشاريع المختلفة",
      "تركيب مرتب",
      "تشطيب مناسب",
    ],
    serviceTypes: [
      {
        title: "هياكل مستودعات",
        description:
          "تنفيذ هياكل مناسبة للمستودعات.",
      },
      {
        title: "هياكل ورش",
        description:
          "حلول مناسبة للورش.",
      },
      {
        title: "هياكل مشاريع",
        description:
          "حلول مناسبة للمشاريع والمنشآت.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب أبعاد ومتطلبات المشروع.",
      },
    ],
    contentSections: [
      {
        title: "هياكل المستودعات",
        description:
          "تنفيذ هياكل مناسبة للمستودعات.",
        imageIndex: 0,
      },
      {
        title: "هياكل الورش",
        description:
          "حلول مناسبة للورش.",
        imageIndex: 1,
      },
      {
        title: "المشاريع الكبيرة",
        description:
          "تنفيذ حلول للمشاريع المختلفة.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب المشروع",
        description:
          "تصنيع وتركيب حسب متطلبات الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "sandwichWarehouses",
    slug: "sandwich-warehouses",
    route: "/sandwich-warehouses",
    folder: "sandwich-warehouses",
    title: "هناجر ساندوتش بانل",
    shortTitle: "هناجر ساندوتش",
    badge: "هناجر ساندوتش",
    heroSubtitle: "تغطية وحلول للمستودعات والمشاريع",
    introTitle:
      "هناجر ساندوتش بانل في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ هناجر مع تغطية ساندوتش بانل للمستودعات والمشاريع حسب مساحة الموقع.",
    galleryTitle:
      "معرض أعمال هناجر ساندوتش",
    galleryDescription:
      "نماذج من أعمال الهناجر.",
    benefitsTitle:
      "مميزات هناجر ساندوتش بانل",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/sandwich-warehouses/1.webp",
    icon: Warehouse,
    features: defaultFeatures,
    benefits: [
      "تغطية ساندوتش بانل",
      "حلول للمستودعات",
      "تنفيذ حسب المساحة",
      "مناسبة للمشاريع المختلفة",
      "تركيب مرتب",
      "حلول مناسبة للورش",
    ],
    serviceTypes: [
      {
        title: "هناجر ساندوتش",
        description:
          "هناجر مع تغطية ساندوتش بانل.",
      },
      {
        title: "مستودعات",
        description:
          "حلول للمستودعات والمساحات الكبيرة.",
      },
      {
        title: "ورش",
        description:
          "هناجر مناسبة للورش والمشاريع.",
      },
      {
        title: "تنفيذ مخصص",
        description:
          "حسب أبعاد المشروع.",
      },
    ],
    contentSections: [
      {
        title: "هناجر ساندوتش",
        description:
          "تنفيذ هناجر بتغطية ساندوتش بانل.",
        imageIndex: 0,
      },
      {
        title: "المستودعات",
        description:
          "حلول مناسبة للمستودعات.",
        imageIndex: 1,
      },
      {
        title: "الهناجر الصناعية",
        description:
          "هناجر مناسبة للمشاريع والورش.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ مرتب",
        description:
          "تركيب حسب متطلبات الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "fabricHouses",
    slug: "fabric-houses",
    route: "/fabric-houses",
    folder: "fabric-houses",
    title: "هياكل المظلات",
    shortTitle: "هياكل مظلات",
    badge: "هياكل مظلات",
    heroSubtitle: "هياكل للمظلات والمساحات الخارجية",
    introTitle:
      "هياكل المظلات في الدمام والخبر والقطيف",
    introDescription:
      "تصنيع وتركيب هياكل للمظلات والمساحات الخارجية حسب المقاسات والتصميم المطلوب.",
    galleryTitle:
      "معرض أعمال هياكل المظلات",
    galleryDescription:
      "نماذج من هياكل المظلات والمساحات الخارجية.",
    benefitsTitle:
      "مميزات هياكل المظلات",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/fabric-houses/1.webp",
    icon: Warehouse,
    features: defaultFeatures,
    benefits: [
      "تصميم حسب المقاس",
      "مناسبة للمظلات",
      "حلول للمساحات الخارجية",
      "تنفيذ حسب الموقع",
      "تركيب مرتب",
      "تصاميم متنوعة",
    ],
    serviceTypes: [
      {
        title: "هياكل مظلات",
        description:
          "هياكل مناسبة للمظلات.",
      },
      {
        title: "هياكل مواقف",
        description:
          "هياكل مناسبة لمواقف السيارات.",
      },
      {
        title: "هياكل جلسات",
        description:
          "هياكل مناسبة للجلسات والمساحات الخارجية.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب المقاس والتصميم.",
      },
    ],
    contentSections: [
      {
        title: "هياكل المظلات",
        description:
          "تصنيع وتركيب هياكل للمظلات.",
        imageIndex: 0,
      },
      {
        title: "هياكل المواقف",
        description:
          "حلول مناسبة لمواقف السيارات.",
        imageIndex: 1,
      },
      {
        title: "هياكل الجلسات",
        description:
          "هياكل للمساحات والجلسات الخارجية.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب المقاس",
        description:
          "تصنيع وتركيب حسب أبعاد الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "buildingFencing",
    slug: "building-fencing",
    route: "/building-fencing",
    folder: "building-fencing",
    title: "تسوير المباني والمواقع",
    shortTitle: "تسوير المباني",
    badge: "تسوير",
    heroSubtitle: "تسوير وحماية للمباني والمواقع",
    introTitle:
      "تسوير المباني والمواقع في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ أعمال التسوير للمباني والفلل والمواقع والمشاريع حسب طبيعة الموقع والمساحة.",
    galleryTitle: "معرض أعمال التسوير",
    galleryDescription:
      "نماذج من أعمال تسوير المباني والمواقع.",
    benefitsTitle:
      "مميزات تسوير المباني",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/building-fencing/1.webp",
    icon: Fence,
    features: defaultFeatures,
    benefits: [
      "حماية وتسوير للمواقع",
      "تصاميم متنوعة",
      "مناسبة للمباني والفلل",
      "تنفيذ حسب المساحة",
      "حلول للمشاريع",
      "تركيب مرتب",
    ],
    serviceTypes: [
      {
        title: "تسوير المباني",
        description:
          "تنفيذ تسوير للمباني والمنشآت.",
      },
      {
        title: "تسوير الفلل",
        description:
          "حلول تسوير للفلل والمنازل.",
      },
      {
        title: "تسوير المشاريع",
        description:
          "تسوير للمواقع والمشاريع.",
      },
      {
        title: "تصميم مخصص",
        description:
          "حسب طبيعة ومساحة الموقع.",
      },
    ],
    contentSections: [
      {
        title: "تسوير المباني",
        description:
          "تسوير مناسب للمباني والمنشآت.",
        imageIndex: 0,
      },
      {
        title: "تسوير الفلل",
        description:
          "تسوير مناسب للفلل والمنازل.",
        imageIndex: 1,
      },
      {
        title: "تسوير المشاريع",
        description:
          "حلول مناسبة للمواقع والمشاريع.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ مرتب",
        description:
          "قياس وتصنيع وتركيب حسب الموقع.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },

  {
    id: "roofingTiles",
    slug: "roofing-tiles",
    route: "/roofing-tiles",
    folder: "roofing-tiles",
    title: "الأسقف والتغطيات",
    shortTitle: "أسقف وتغطيات",
    badge: "أسقف وتغطيات",
    heroSubtitle: "حلول عملية للأسقف والمداخل والمساحات الخارجية",
    introTitle:
      "الأسقف والتغطيات في الدمام والخبر والقطيف",
    introDescription:
      "تنفيذ أسقف وتغطيات للمداخل والمساحات الخارجية حسب احتياج المشروع والتصميم المطلوب.",
    galleryTitle:
      "معرض أعمال الأسقف والتغطيات",
    galleryDescription:
      "نماذج من أعمال الأسقف والتغطيات.",
    benefitsTitle:
      "مميزات الأسقف والتغطيات",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/roofing-tiles/1.webp",
    icon: Layers,
    features: defaultFeatures,
    benefits: [
      "تصاميم حسب الموقع",
      "مناسبة للمداخل والمساحات الخارجية",
      "تنفيذ حسب المقاس",
      "حلول متنوعة للتغطية",
      "تركيب مرتب",
      "تشطيب مناسب",
    ],
    serviceTypes: [
      {
        title: "أسقف",
        description:
          "تنفيذ أسقف وتغطيات متنوعة.",
      },
      {
        title: "أسقف للمداخل",
        description:
          "تغطيات مناسبة للمداخل.",
      },
      {
        title: "تغطيات خارجية",
        description:
          "حلول مناسبة للمساحات الخارجية.",
      },
      {
        title: "تنفيذ مخصص",
        description:
          "حسب التصميم والمقاس المطلوب.",
      },
    ],
    contentSections: [
      {
        title: "أسقف",
        description:
          "تنفيذ أسقف وتغطيات متنوعة.",
        imageIndex: 0,
      },
      {
        title: "أسقف المداخل",
        description:
          "حلول مناسبة للمداخل.",
        imageIndex: 1,
      },
      {
        title: "التغطيات الخارجية",
        description:
          "حلول مناسبة للمساحات الخارجية.",
        imageIndex: 2,
      },
      {
        title: "تنفيذ حسب الطلب",
        description:
          "تصنيع وتركيب حسب المقاس.",
        imageIndex: 3,
      },
    ],
    areasText: clientAreas,
  },
];

/* =========================================================
   جميع الخدمات
========================================================= */

const allServices: ServiceDefinition[] = [
  ...servicesList,
  ...additionalServices,
];

/* =========================================================
   الوصول إلى الخدمة بواسطة ID
========================================================= */

export const servicesById = Object.fromEntries(
  allServices.map((service) => [service.id, service])
) as Record<ServiceSeoKey, ServiceDefinition>;
