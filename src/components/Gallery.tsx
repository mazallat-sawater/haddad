
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Grid3X3,
  Pause,
  Play,
  X,
  ZoomIn,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { servicesList } from "@/config/services";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
};

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  /**
   * GitHub Pages base URL
   * مثال:
   * /rubou-albilad/
   */
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  /**
   * تجهيز جميع صور الخدمات.
   *
   * يتم استخدام folder + galleryImageCount
   * من services.ts حتى تبقى الصور مرتبطة بالخدمات الحالية.
   */
  const allImages = useMemo<GalleryImage[]>(() => {
    const images: GalleryImage[] = [];

    servicesList.forEach((service) => {
      for (
        let index = 1;
        index <= service.galleryImageCount;
        index++
      ) {
        images.push({
          src: `${baseUrl}${service.folder}/${index}.webp`,
          title: service.title,
          category: service.shortTitle,
        });
      }
    });

    return images;
  }, [baseUrl]);

  /**
   * استبعاد الصور التي فشل تحميلها.
   *
   * هذا يمنع ظهور مساحة فارغة إذا كان عدد الصور
   * في services.ts أكبر من الصور الموجودة فعليًا.
   */
  const validImages = useMemo(() => {
    return allImages.filter(
      (image) => !failedImages.includes(image.src)
    );
  }, [allImages, failedImages]);

  /**
   * التصنيفات
   */
  const categories = useMemo(() => {
    return [
      "الكل",
      ...Array.from(
        new Set(
          servicesList.map((service) => service.shortTitle)
        )
      ),
    ];
  }, []);

  /**
   * الصور حسب التصنيف
   */
  const filteredImages = useMemo(() => {
    if (selectedCategory === "الكل") {
      return validImages;
    }

    return validImages.filter(
      (image) => image.category === selectedCategory
    );
  }, [validImages, selectedCategory]);

  /**
   * عند تغيير التصنيف نرجع لأول صورة
   */
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  /**
   * إذا أصبح عدد الصور أقل من المؤشر الحالي
   * نرجع تلقائيًا إلى صورة موجودة.
   */
  useEffect(() => {
    if (filteredImages.length === 0) {
      setCurrentIndex(0);
      return;
    }

    if (currentIndex >= filteredImages.length) {
      setCurrentIndex(0);
    }
  }, [filteredImages.length, currentIndex]);

  /**
   * تسجيل الصور التي تم تحميلها بنجاح
   */
  const handleImageLoad = (src: string) => {
    setLoadedImages((previous) => {
      if (previous.has(src)) {
        return previous;
      }

      const next = new Set(previous);
      next.add(src);
      return next;
    });
  };

  /**
   * إذا فشلت الصورة يتم حذفها من المعرض.
   */
  const handleImageError = (src: string) => {
    setFailedImages((previous) => {
      if (previous.includes(src)) {
        return previous;
      }

      return [...previous, src];
    });

    setLoadedImages((previous) => {
      const next = new Set(previous);
      next.delete(src);
      return next;
    });
  };

  /**
   * الصورة التالية
   */
  const nextSlide = () => {
    if (filteredImages.length <= 1) {
      return;
    }

    setCurrentIndex((current) =>
      current >= filteredImages.length - 1
        ? 0
        : current + 1
    );
  };

  /**
   * الصورة السابقة
   */
  const previousSlide = () => {
    if (filteredImages.length <= 1) {
      return;
    }

    setCurrentIndex((current) =>
      current <= 0
        ? filteredImages.length - 1
        : current - 1
    );
  };

  /**
   * العرض التلقائي كل 4 ثوانٍ
   */
  useEffect(() => {
    if (!isPlaying || filteredImages.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((current) =>
        current >= filteredImages.length - 1
          ? 0
          : current + 1
      );
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPlaying, filteredImages.length]);

  /**
   * الصورة الحالية
   */
  const currentImage = filteredImages[currentIndex];

  /**
   * فتح الصورة بشكل مكبر
   */
  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsPlaying(false);
  };

  /**
   * إغلاق الصورة
   */
  const closeImage = () => {
    setSelectedImage(null);
  };

  /**
   * الصورة التالية في العرض المكبر
   */
  const nextLightboxImage = () => {
    if (!selectedImage || filteredImages.length === 0) {
      return;
    }

    const index = filteredImages.findIndex(
      (image) => image.src === selectedImage.src
    );

    if (index === -1) {
      return;
    }

    const next =
      index >= filteredImages.length - 1
        ? 0
        : index + 1;

    setSelectedImage(filteredImages[next]);
    setCurrentIndex(next);
  };

  /**
   * الصورة السابقة في العرض المكبر
   */
  const previousLightboxImage = () => {
    if (!selectedImage || filteredImages.length === 0) {
      return;
    }

    const index = filteredImages.findIndex(
      (image) => image.src === selectedImage.src
    );

    if (index === -1) {
      return;
    }

    const previous =
      index <= 0
        ? filteredImages.length - 1
        : index - 1;

    setSelectedImage(filteredImages[previous]);
    setCurrentIndex(previous);
  };

  return (
    <>
      <section
        id="portfolio"
        dir="rtl"
        className="relative overflow-hidden bg-[#F5F3ED] py-24 text-[#171717]"
      >
        {/* خلفية القسم */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-[120px]" />
          <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#D9BE78]/10 blur-[120px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* عنوان القسم */}
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#8A6A1F]">
                <Grid3X3 className="h-4 w-4" />
                معرض أعمالنا
              </span>

              <span className="h-px w-10 bg-[#C9A227]" />
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              شاهد بعضًا من{" "}
              <span className="text-[#A67C12]">
                أعمالنا
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#171717]/55 sm:text-base">
              مجموعة من أعمالنا المنفذة في المظلات
              والسواتر والبرجولات والهناجر والأعمال
              المتنوعة.
            </p>
          </div>

          {/* التصنيفات */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex min-w-max justify-center gap-2">
              {categories.map((category) => {
                const active =
                  selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "border-[#C9A227] bg-[#C9A227] text-white shadow-lg shadow-[#C9A227]/20"
                        : "border-[#171717]/10 bg-white/70 text-[#171717]/60 hover:border-[#C9A227]/50 hover:bg-white hover:text-[#8A6A1F]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {currentImage ? (
            <>
              {/* الصورة الرئيسية */}
              <div className="relative mx-auto max-w-5xl">
                <button
                  type="button"
                  onClick={() =>
                    openImage(currentImage)
                  }
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#171717]/10 bg-white text-right shadow-[0_20px_60px_rgba(23,23,23,0.14)] transition-all duration-500 hover:border-[#C9A227]/50 hover:shadow-[0_25px_70px_rgba(23,23,23,0.18)]"
                >
                  {/* الصورة */}
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    loading="eager"
                    decoding="async"
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
                      loadedImages.has(currentImage.src)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    onLoad={() =>
                      handleImageLoad(
                        currentImage.src
                      )
                    }
                    onError={() =>
                      handleImageError(
                        currentImage.src
                      )
                    }
                  />

                  {/* تدرج */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                  {/* إطار ذهبي */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300 group-hover:border-[#C9A227]/60" />

                  {/* معلومات الصورة */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-white sm:text-2xl">
                          {currentImage.title}
                        </p>

                        <p className="mt-1 text-sm text-[#D9BE78] sm:text-base">
                          {currentImage.category}
                        </p>
                      </div>

                      <span className="flex h-12 w-12 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-black/35 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ZoomIn className="h-5 w-5 text-white" />
                      </span>
                    </div>
                  </div>
                </button>

                {/* السابق */}
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="الصورة السابقة"
                  className="absolute -right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#171717]/10 bg-white text-[#171717] shadow-xl transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white sm:-right-6 sm:h-14 sm:w-14"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* التالي */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="الصورة التالية"
                  className="absolute -left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#171717]/10 bg-white text-[#171717] shadow-xl transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white sm:-left-6 sm:h-14 sm:w-14"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>

              {/* أزرار التحكم */}
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  {/* السابق */}
                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="السابق"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171717]/10 bg-white text-[#171717]/70 shadow-sm transition hover:border-[#C9A227]/60 hover:text-[#8A6A1F]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* تشغيل / إيقاف */}
                  <button
                    type="button"
                    onClick={() =>
                      setIsPlaying(
                        (value) => !value
                      )
                    }
                    className="flex h-11 items-center gap-2 rounded-full border border-[#C9A227]/50 bg-white px-5 text-sm font-semibold text-[#8A6A1F] shadow-sm transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4" />
                        <span>
                          إيقاف العرض
                        </span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        <span>
                          تشغيل العرض
                        </span>
                      </>
                    )}
                  </button>

                  {/* التالي */}
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="التالي"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171717]/10 bg-white text-[#171717]/70 shadow-sm transition hover:border-[#C9A227]/60 hover:text-[#8A6A1F]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </div>

                {/* النقاط */}
                <div className="flex max-w-full items-center gap-1.5 overflow-x-auto px-4">
                  {filteredImages.map(
                    (image, index) => (
                      <button
                        key={`${image.src}-dot`}
                        type="button"
                        onClick={() =>
                          setCurrentIndex(index)
                        }
                        aria-label={`انتقل إلى الصورة ${
                          index + 1
                        }`}
                        className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "w-8 bg-[#C9A227]"
                            : "w-1.5 bg-[#171717]/20 hover:bg-[#C9A227]/50"
                        }`}
                      />
                    )
                  )}
                </div>

                {/* رقم الصورة */}
                <p className="text-xs text-[#171717]/40">
                  {currentIndex + 1} /{" "}
                  {filteredImages.length}
                </p>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-[#171717]/10 bg-white px-6 py-20 text-center shadow-sm">
              <p className="text-[#171717]/50">
                لا توجد صور متاحة لهذا القسم حاليًا.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* العرض المكبر */}
      <Dialog
        open={Boolean(selectedImage)}
        onOpenChange={(open) => {
          if (!open) {
            closeImage();
          }
        }}
      >
        <DialogContent className="max-w-6xl border-white/10 bg-[#111111] p-2 sm:p-4">
          {selectedImage && (
            <div className="relative">
              {/* إغلاق */}
              <button
                type="button"
                onClick={closeImage}
                aria-label="إغلاق"
                className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#C9A227] hover:text-[#D9BE78]"
              >
                <X className="h-5 w-5" />
              </button>

              {/* الصورة الكبيرة */}
              <div className="flex min-h-[55vh] items-center justify-center overflow-hidden rounded-xl bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[78vh] max-w-full object-contain"
                  onError={() =>
                    handleImageError(
                      selectedImage.src
                    )
                  }
                />
              </div>

              {/* معلومات الصورة */}
              <div className="px-3 pb-2 pt-4 text-center">
                <p className="font-semibold text-white">
                  {selectedImage.title}
                </p>

                <p className="mt-1 text-sm text-[#D9BE78]">
                  {selectedImage.category}
                </p>
              </div>

              {/* السابق */}
              <button
                type="button"
                onClick={previousLightboxImage}
                aria-label="الصورة السابقة"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#C9A227] hover:text-[#D9BE78] sm:right-5"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* التالي */}
              <button
                type="button"
                onClick={nextLightboxImage}
                aria-label="الصورة التالية"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#C9A227] hover:text-[#D9BE78] sm:left-5"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

