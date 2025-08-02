// PointersList.tsx
export default function PointersList({ data }: { data: any[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">কোর্সটি করে যা শিখবেন</h2>

      <ul className="rounded-md shadow-md p-6 grid md:grid-cols-2 gap-y-3 gap-x-8">
        {data.map((p) => (
          <li key={p.id} className="flex gap-2">
            <svg
              viewBox="0 0 24 24"
              className="mt-1 size-4 shrink-0 text-primary text-green-700"
            >
              <path
                fill="currentColor"
                d="M9 16.17 4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z"
              />
            </svg>
            <span className="text-sm leading-6">{p.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
