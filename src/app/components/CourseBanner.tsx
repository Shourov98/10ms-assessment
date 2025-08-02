'use client';

import { useProductStore } from '@/lib/store/productStore';

export default function CourseBanner() {
  const product = useProductStore((s) => s.product);
  if (!product) return null;

  return (
    <section className="relative isolate w-full overflow-hidden text-white">
      
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#00040f] via-[#02022d] to-[#081858]" />

      <div
        className="
          pointer-events-none absolute -z-10
          h-[180%] w-[180%] translate-x-1/3 translate-y-1/3
          rounded-full
          bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,230,255,0.65)_0%,_rgba(0,230,255,0.4)_25%,_transparent_55%)]
        "
      />

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 xl:px-20 2xl:px-36
                      pt-14 md:pt-20 xl:pt-24
                      pb-48 md:pb-56 xl:pb-64">
      </div>
    </section>
  );
}
