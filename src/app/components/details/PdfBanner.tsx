'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface PdfBannerModel {
  
  background: {
    image: string;
    primary_color?: string;
    secondary_color?: string;
  };
  /* CTA object */
  cta: {
    text: string;
    clicked_url: string;
    color?: string;
  };
  /* left-column copy */
  title: string;
  description: string;
  /* right-hand image */
  thumbnail: string;
  /* top-left sticker */
  top_left_icon_img?: string;
}

export default function FreePdfBanner({ data }: { data: PdfBannerModel }) {
  if (!data) return null;

  const {
    background,
    title,
    description,
    cta,
    thumbnail,
    top_left_icon_img,
  } = data;

  return (
    <section className="rounded-md overflow-hidden">
      {/* BG layer */}
      <div
        className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8"
        style={{
          backgroundImage: `url(${background.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* copy column */}
        <div className="text-white max-w-md relative">
          {/* optional sticker */}
          {top_left_icon_img && (
            <Image
              src={top_left_icon_img}
              alt=""
              width={120}
              height={120}
            />
          )}

          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 max-w-prose text-sm md:text-base">
            {description}
          </p>

          <Link
            href={cta.clicked_url}
            target="_blank"
            className="mt-4 inline-block rounded bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            style={{ backgroundColor: cta.color || undefined }}
          >
            {cta.text}
          </Link>
        </div>

        {/* right-hand thumbnail */}
        {thumbnail && (
          <Image
            src={thumbnail}
            alt=""
            width={260}
            height={140}
            className="mt-6 rounded md:mt-0"
          />
        )}
      </div>
    </section>
  );
}
