'use client';

import Image from 'next/image';
import { useProductStore } from '@/lib/store/productStore';

interface FeatureCard {
  id: string;
  title: string;
  checklist: string[];
  file_type: 'image' | 'video';
  file_url: string;
  video_thumbnail?: string;
}

export default function ExclusiveFeatures() {
  const cards = useProductStore(
    (s) => s.product?.sections.exclusive as FeatureCard[] | undefined
  );

  if (!cards?.length) return null;

  return (
    <section>
      <h2 className="mb-4 mt-6 text-xl font-bold">কোর্স এক্সক্লুসিভ ফিচার</h2>

      <div className="rounded-md border p-6 flex flex-col gap-10">
        {cards.map((card, i) => (
          <div key={card.id} className="grid md:grid-cols-2 gap-6">
            {/* left column: checklist */}
            <div>
              <h3 className="font-semibold">{card.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6">
                {card.checklist.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0 text-primary mt-[6px]"
                    >
                      <path fill="currentColor" d="m6 9 6 6 6-6" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* right column: image or video thumb */}
            <div className="flex justify-end">
              <Image
                src={
                  card.file_type === 'video'
                    ? card.video_thumbnail || '/placeholder-16x9.png'
                    : card.file_url
                }
                alt={card.title}
                width={200}
                height={115}
                className="rounded object-cover"
              />
            </div>

            {/* divider except for last card */}
            {i < cards.length - 1 && (
              <div className="col-span-full border-t mt-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
