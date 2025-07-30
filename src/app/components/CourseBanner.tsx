'use client';

import DOMPurify from 'dompurify';
import { useProductStore } from '@/lib/store/productStore';

/** full‑width star‑field banner that grows with its content */
export default function CourseBanner() {
  const { title, descriptionHtml } = useProductStore((s) => s.product!)!;

  return (
    <section
      className="
        fixed isolate w-full
        bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')]
        bg-left bg-cover bg-no-repeat
        px-4 md:px-8 xl:px-20 2xl:px-36
        py-14 md:py-20 xl:py-24
        text-white
      "
      style={{
        height: 'clamp(400px, 25vw, 350px)'
      }}
    >
      {/* Everything inside this container keeps the same
          max‑width as the rest of the page */}
    </section>
  );
}
