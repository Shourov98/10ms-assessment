// src/lib/api/shapeProduct.ts
import type { Product, UiProduct, Media, SectionBase } from "@/types/product";

export function shapeProduct(api: Product): UiProduct {
  const byType = Object.fromEntries(
    api.sections.map((s: SectionBase) => [s.type, s])
  ) as Record<string, SectionBase>;

  return {
    title: api.title,
    descriptionHtml: api.description,
    media: {
      trailer: api.media.find((m: Media) => m.resource_type === 'video') ?? null,
      gallery: api.media.map((m: Media) => ({
        name: m.name,
        type: m.resource_type,
        src: m.resource_value,
        thumb: m.thumbnail_url || undefined,
      })),
    },
    checklist: api.checklist,
    sections: {
      offers: byType.offers?.values[0],
      instructors: byType.instructors?.values,
      features: byType.features?.values,
      pointers: byType.pointers?.values,
      about: byType.about?.values,
      testimonials: byType.testimonials?.values,
      faq: byType.faq?.values,
    },
  };
}
