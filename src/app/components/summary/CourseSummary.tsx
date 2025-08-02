'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProductStore } from '@/lib/store/productStore';


function srcFor(item: {
  name?: string;
  type: 'image' | 'video';
  src: string;
  thumb?: string;
}) {
  if (item.type === 'image') return item.src;
  if (item.type === 'video' && item.thumb) return item.thumb;
  return '/placeholder-16x9.png';
}

export default function CourseSummary() {
  const { media, checklist } = useProductStore((s) => s.product!)!;

  /* filter out square image */
  const gallery = media.gallery.filter((i: any) => i.name !== 'sqr_img');

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false); // video play state for current slide

  const active = gallery[idx];

  // trailer video and image handling
  const prev = () => {
    setIdx((i) => (i === 0 ? gallery.length - 1 : i - 1));
    setPlaying(false);
  };
  const next = () => {
    setIdx((i) => (i === gallery.length - 1 ? 0 : i + 1));
    setPlaying(false);
  };

  return (
    <aside className="
            sticky top-20 flex max-w-sm flex-col gap-6 
            overflow-hidden rounded-md bg-white p-1.5 shadow-lg
            -mt-60"
    >
      
      <div className="relative">
        {active.type === 'video' ? (
          playing ? (
            
            <iframe
              className="aspect-video w-full rounded"
              src={`https://www.youtube.com/embed/${active.src}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            /* thumbnail + play button */
            <div className="relative">
              <Image
                src={srcFor(active)}
                alt="Course trailer thumbnail"
                width={1280}
                height={720}
                className="aspect-video w-full rounded object-cover"
              />
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play trailer"
                className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur"
              >
                <Play className="size-7 text-primary" />
              </button>
            </div>
          )
        ) : (
          /* image slide */
          <Image
            src={srcFor(active)}
            alt="Course media"
            width={1280}
            height={720}
            className="aspect-video w-full rounded object-cover"
            priority
          />
        )}

        {/* nav arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/80 shadow hover:bg-white"
          aria-label="Previous"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/80 shadow hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* thumbnail gallery */}
      <div className="flex gap-2 overflow-x-auto px-3 pb-3">
        {gallery.map((item, i) => {
          const thumb = srcFor(item);
          return (
            <button
              key={i}
              onClick={() => {
                setIdx(i);
                setPlaying(false);
              }}
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
                className="h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* price / CTA / checklist */}
      <div className="px-4 pb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-emerald-600">৳3850</span>
          <del className="text-sm text-gray-400">৳5000</del>
          <span className="rounded bg-orange-700 px-2 py-0.5 text-xs font-semibold text-white">
            1150 ৳ ছাড়
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
