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
        mx-auto max-w-screen-2xl
        px-4 md:px-8 xl:px-20 2xl:px-36
        grid gap-6
        md:grid-cols-[minmax(0,1fr)_var(--summary)]
        [@media(max-width:770px)]:grid-cols-1
      "
      style={
        {
          '--summary': 'clamp(252px, 32vw, 420px)',
        } as React.CSSProperties
      }
    >
      {details}

      {/* keep the explicit width clamp for the card */}
      <div
        style={{
          width: 'var(--summary)',
          minWidth: 'var(--summary)',
          maxWidth: 'var(--summary)',
        }}
      >
        {summary}
      </div>
    </section>
  );
}
