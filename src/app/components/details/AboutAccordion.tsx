// AboutAccordion.tsx
'use client';

import { useState } from 'react';
import DOMPurify from 'dompurify';

export default function AboutAccordion({ data }: { data: any[] }) {
  const [open, setOpen] = useState(0); // first panel open

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">কোর্স সম্পর্কে বিস্তারিত</h2>

      <div className="rounded-md border divide-y">
        {data.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setOpen((o) => (o === i ? -1 : i))}
            className="w-full text-left p-5 focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.title),
                }}
              />
              <svg
                className={`size-4 transition-transform ${
                  open === i ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" fill="currentColor" />
              </svg>
            </div>

            {open === i && (
              <div
                className="prose mt-4 text-sm"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.description),
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
