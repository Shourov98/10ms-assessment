// FeaturesGrid.tsx
import Image from 'next/image';

export default function FeaturesGrid({ data }: { data: any[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">কোর্সটি যেভাবে সাজানো হয়েছে</h2>

      <div className="rounded-md bg-slate-900 text-white p-6 grid md:grid-cols-2 gap-6">
        {data.map((f) => (
          <div key={f.id} className="flex gap-4">
            <div className="flex-shrink-0 grid place-items-center size-11   rounded-full bg-[#0F172A]/90">
              <Image src={f.icon} alt="" width={36} height={36} />
            </div>
            <div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm leading-5 mt-1">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
