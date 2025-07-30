'use client';

import { ReactNode } from 'react';

export default function CourseLayout({
  details,
  summary,
}: {
  details: ReactNode;
  summary: ReactNode;
}) {
  return (
    <section
      className="
        mx-auto
        max-w-screen-2xl
        px-4 md:px-8 xl:px-20 2xl:px-36
        grid gap-6
        xl:grid-cols-[minmax(0,1fr)_420px]   /* two columns ≥1280 */
      "
    >
      {details}
      {summary}
    </section>
  );
}
