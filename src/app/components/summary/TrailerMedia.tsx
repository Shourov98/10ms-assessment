'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useProductStore } from '@/lib/store/productStore';

export default function TrailerMedia() {
  const { media } = useProductStore((s) => s.product!)!;
  const trailer = media.trailer
  ? {
      type: media.trailer.resource_type,
      src: media.trailer.resource_value,
      thumb: media.trailer.thumbnail_url || undefined,
    }
  : media.gallery.find((g) => g.type === 'image');
  
  if (!trailer) return null;

  return (
    <figure className="relative overflow-hidden rounded-md shadow-lg">
      <Image
        src={trailer.thumb || trailer.src}
        alt="Course trailer thumbnail"
        width={420}
        height={236}
        className="h-auto w-full object-cover"
        priority
      />
      {trailer.type === 'video' && (
        <button
          aria-label="Play course trailer"
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            grid place-items-center size-16
            rounded-full bg-white/90 backdrop-blur-sm
            text-primary hover:scale-105 transition
          "
        >
          <Play className="h-7 w-7" />
        </button>
      )}
    </figure>
  );
}
