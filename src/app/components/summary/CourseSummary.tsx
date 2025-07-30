'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProductStore } from '@/lib/store/productStore';

/** Build a guaranteed‑non‑empty URL for every gallery item */
function srcFor(item: {
  name?: string; 
  type: 'image' | 'video';
  src: string;
  thumb?: string;
}) {
  if (item.type === 'image') return item.src;
  if (item.type === 'video' && item.thumb) return item.thumb;
  // fallback to a placeholder if nothing is available
  console.log(item.name);
  return '/placeholder-16x9.png';
}
export default function CourseSummary() {
  /* pull data slice once from Zustand */
  const { media, checklist } = useProductStore((s) => s.product!)!;
  // Filter out gallery items with name 'sqr_img'
  const gallery = media.gallery.filter((item: any) => item.name !== 'sqr_img');

  // console.log(gallery)

  /* carousel state */
  const [idx, setIdx] = useState(0);
  const active = gallery[idx];

  const prev = () =>
    setIdx((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const next = () =>
    setIdx((i) => (i === gallery.length - 1 ? 0 : i + 1));

  return (
    <aside className="sticky top-20 flex max-w-sm flex-col gap-6 overflow-hidden rounded-md bg-white shadow-lg">
      {/* ────── hero media with arrows ────── */}
      <div className="relative">
        <Image
          src={srcFor(active)}
          alt="Course media"
          width={420}
          height={236}
          className="h-auto w-full object-cover"
          priority
        />

        {/* nav arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/80 shadow hover:bg-white"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/80 shadow hover:bg-white"
        >
          <ChevronRight className="size-4" />
        </button>

        {/* play overlay for videos */}
        {active.type === 'video' && (
          <button
            aria-label="Play teaser"
            className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur text-primary"
          >
            <Play className="size-7" />
          </button>
        )}
      </div>

      {/* ────── thumbnail strip ────── */}
      <div className="flex gap-2 overflow-x-auto px-3 pb-3">
        {gallery.map((item, i) => {
          const thumb = srcFor(item);
          if (!thumb) return null; // skip bad entry
          return (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`shrink-0 overflow-hidden rounded ring-2 ${
                i === idx ? 'ring-primary' : 'ring-transparent'
              }`}
              style={{ width: 48, height: 32 }}
            >
              <Image
                src={thumb}
                alt=""
                width={48}
                height={32}
                className="object-cover w-full h-full"
                style={{ minWidth: 48, minHeight: 32, maxWidth: 48, maxHeight: 32 }}
              />
            </button>
          );
        })}
      </div>

      {/* ────── price, CTA, mini‑checklist ────── */}
      <div className="px-4 pb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-emerald-600">৳3850</span>
          <del className="text-sm text-gray-400">৳5000</del>
          <span className="rounded bg-orange-700 px-2 py-0.5 text-xs font-semibold text-white">
            1150 ৳ ছাড়
          </span>
        </div>

        <button className="mt-4 w-full rounded-md bg-emerald-600 py-2 text-center font-semibold text-white hover:bg-emerald-700">
          কোর্সটি কিনুন
        </button>

        <ul className="mt-6 space-y-2 text-sm">
          {checklist.slice(0, 8).map((c) => (
            <li key={c.id} className="flex items-start gap-2">
              <Image src={c.icon} alt="" width={18} height={18} />
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
