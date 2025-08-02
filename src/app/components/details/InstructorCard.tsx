import DOMPurify from 'dompurify';
import Image from 'next/image';

export default function InstructorCard({
  data,
}: {
  data: {
    name?: string;
    image?: string;
    description?: string; // html
    short_description?: string;
  };
}) {
  if (!data) return null;

  const { name = 'Unknown', image, description = '', short_description = '' } = data;


  return (
    <section>
      <h2 className="mb-4 mt-6 text-xl font-bold">কোর্স ইন্সট্রাক্টর</h2>
      <div className="rounded-md shadow-lg px-6 py-4 flex gap-4 items-start">
        {data.image ? (
          <Image
            src={data.image}
            alt={name}
            width={64}
            height={64}
            className="size-16 rounded-full object-cover"
          />
        ) : (
          <div className="size-16 rounded-full bg-gray-200" />
        )}
        <div className="flex-1">
          <h3 className="font-semibold flex items-center gap-1">
            {name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-4"
            >
              <path
                fill="currentColor"
                d="M10 17l5-5-5-5v10z"
              />
            </svg>
          </h3>
          <div
            className="mt-1 text-sm leading-5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </div>
      </div>
    </section>
  );
}
