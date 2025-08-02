'use client';

import DOMPurify from 'dompurify';
import { useProductStore } from '@/lib/store/productStore';

/** full‑width star‑field banner that grows with its content */
export default function CourseBanner() {
  const product = useProductStore((s) => s.product);

  if (!product) return null;


  return (
    <section
      className="
        relative isolate w-full
        bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')]
        bg-left bg-cover bg-no-repeat
        pt-14 md:pt-20 xl:pt-24      /* keep existing top padding */
        pb-48 md:pb-56 xl:pb-64
        text-white
      "
      style={{
        height: 'clamp(350px, 25vw, px)'
      }}
    >
    </section>
  );
}
