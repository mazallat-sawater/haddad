
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";

import { client } from "@/config/client";

const faqs = [
  {
    question: `ما هي خدمات ${client.shortName}؟`,
    answer:
      "نقدم مجموعة متنوعة من خدمات المظلات والسواتر والبرجولات والهناجر وأعمال الحدادة والهياكل المعدنية، مع تنفيذ الأعمال حسب طبيعة واحتياج كل مشروع.",
  },

  {
    question: "ما أنواع أعمال الحدادة التي تنفذونها؟",
    answer:
      "ننّفذ أعمالاً متنوعة في مجال الحديد والحدادة، وتشمل المظلات والسواتر والهياكل المعدنية والشبوك وغيرها من الأعمال حسب التصميم والمقاسات المطلوبة.",
  },

  {
    question: "ما أنواع المظلات التي توفرونها؟",
    answer:
      "نوفر أنواعاً متعددة من المظلات، ومنها مظلات السيارات ومظلات الحدائق والمظلات المقوسة والهرمية وغيرها من التصاميم حسب احتياج الموقع.",
  },

  {
    question: "هل تقدمون تصميم وتنفيذ السواتر؟",
    answer:
      "نعم، نقدم تنفيذ وتركيب السواتر للمنازل والفلل والمنشآت والمواقع المختلفة، مع إمكانية اختيار التصميم والخامة المناسبة للمشروع.",
  },

  {
    question: "هل تنفذون الهناجر والمستودعات؟",
    answer:
      "نعم، تشمل خدماتنا تنفيذ الهناجر والمستودعات والهياكل المعدنية، بالإضافة إلى خيارات الساندوتش بانل حسب متطلبات المشروع.",
  },

  {
    question: "ما المدن التي تخدمها المؤسسة؟",
    answer: `نقدم خدماتنا في ${client.serviceAreas.join(" و")} والمناطق القريبة حسب نطاق المشروع.`,
  },

  {
    question: "كيف يمكنني طلب الخدمة أو معرفة السعر؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب أو الاتصال مباشرة على الرقم الموجود في الموقع، وإرسال تفاصيل المشروع أو الصور والمقاسات المتوفرة للحصول على المعلومات المناسبة.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-background-light"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="section-badge mb-5">
            <HelpCircle
              size={14}
              className="shrink-0 text-accent"
            />

            <span>الأسئلة الشائعة</span>
          </div>

          <h2 className="section-title mb-4">
            أهم الاستفسارات
            <span className="mt-2 block text-gradient-luxury">
              عن خدماتنا
            </span>
          </h2>

          <p className="section-desc mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات المظلات والسواتر
            وأعمال الحدادة والهناجر في الدمام والخبر والقطيف.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
          >
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white px-4 shadow-sm transition-all duration-300 data-[state=open]:border-accent/40 data-[state=open]:shadow-lg sm:px-5"
              >
                <AccordionTrigger className="py-5 text-right text-sm font-bold text-primary hover:no-underline sm:text-base [&>svg]:shrink-0 [&>svg]:text-accent">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="pb-5 text-sm leading-8 text-secondary sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}