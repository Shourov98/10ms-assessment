'use client';

import DOMPurify from 'dompurify';
import { useProductStore } from '@/lib/store/productStore';
import Image from 'next/image';

export default function CourseHeader() {
  const product = useProductStore((s) => s.product);
  
  if (!product) return null;

  const { title, descriptionHtml } = product;

  return (
    <header
      className="
        relative isolate
        py-14 md:py-20 xl:py-24
        text-white
      "
    >
      {/* background layer */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')]
          bg-left bg-cover bg-no-repeat
        "
      />
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
        {title}
      </h1>

      {/* rating row */}
      <div className="mt-4 flex items-center gap-1 text-lg">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-amber-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27 18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        <span className="ml-2 text-base font-medium">
          (81.0% শিক্ষার্থী কোর্স শেষē ৫ রেটিং দিয়েছেন)
        </span>
      </div>

      {/* description */}
      <div
        className="prose prose-invert mt-6 max-w-none text-base leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(descriptionHtml),
        }}
      />
    </header>
  );
}
