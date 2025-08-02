'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

import { useProductStore } from '@/lib/store/productStore';

// Define the Testimonial type (adjust fields as needed)
type Testimonial = {
  id: string;
  name: string;
  testimonial: string;
  video_url?: string;
  thumb?: string;
  profile_image?: string;
  description?: string;
};

// Utility to get YouTube thumbnail from video URL
function ytThumb(url: string): string {
  // Accepts full YouTube URL or just video ID
  const idMatch = url.match(/[?&]v=([^&#]+)/) || url.match(/youtu\.be\/([^?&#]+)/) || url.match(/^([\w-]{11})$/);
  const id = idMatch ? idMatch[1] : url;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function TestimonialCarousel() {
  const list = useProductStore((s: any) => s.product?.sections.testimonials as Testimonial[] | undefined);
  if (!list?.length) return null;

  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [refCallback, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1023px)': { slides: { perView: 1.5, spacing: 20 } },
      '(max-width: 767px)': { slides: { perView: 1, spacing: 16 } },
    },
    mode: 'free-snap',
  });


  function setRef(node: HTMLDivElement) {
    sliderRef.current = node;
    refCallback(node);
  }

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold">শিক্ষার্থীরা যা বলছে</h2>

      {/* arrows sit over the whole track */}
      <div className="relative">
        <button
          onClick={() => slider.current?.prev()}
          aria-label="Prev"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-white shadow"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          onClick={() => slider.current?.next()}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-white shadow"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* slider track */}
        <div ref={setRef} className="keen-slider">
          {list.map((card: Testimonial) => {
            const isPlaying = playing[card.id] ?? false;
            const thumb =
              card.video_url &&
              (card.thumb?.trim() || ytThumb(card.video_url));

            return (
              <div
                key={card.id}
                className="keen-slider__slide flex flex-col rounded-lg shadow-md shadow-gray-500 p-6"
                style={{ minHeight: 340 }}
              >
                {card.video_url ? (
                  isPlaying ? (
                    <iframe
                      className="aspect-video w-full rounded"
                      src={`https://www.youtube.com/embed/${card.video_url}?autoplay=1&rel=0`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative">
                      <Image
                        src={thumb!}
                        alt=""
                        width={800}
                        height={450}
                        className="aspect-video w-full rounded object-cover"
                      />
                      <button
                        onClick={() =>
                          setPlaying((p) => ({ ...p, [card.id]: true }))
                        }
                        className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur"
                      >
                        <Play className="size-6 text-primary" />
                      </button>
                    </div>
                  )
                ) : (
                  <p className="line-clamp-6 text-sm leading-6 md:text-base">
                    “{card.testimonial}”
                  </p>
                )}

                <div className="mt-auto flex items-center gap-2 pt-4">
                  {card.profile_image && (
                    <Image
                      src={card.profile_image}
                      alt={card.name}
                      width={56}
                      height={56}
                      className="size-14 rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col text-left">
                    <span className="font-semibold">{card.name}</span>
                    {card.description && (
                      <span className="text-sm text-gray-500">
                        {card.description}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
