'use client';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-slate-50 py-10 text-sm text-gray-600">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-8 xl:px-20 2xl:px-36">
        {/* left column */}
        <div className="space-y-2">
          <p>© {new Date().getFullYear()} 10 Minute School (Assessment Task)</p>
          <p>
            Built with&nbsp;
            <a
              href="https://nextjs.org"
              className="font-medium text-primary hover:underline"
              target="_blank"
            >
              Next&nbsp;JS 14
            </a>
            , Tailwind CSS & Zustand.
          </p>
        </div>

        {/* simple link list */}
        <ul className="flex flex-wrap gap-4 font-medium">
          <li>
            <a href="#" className="hover:text-primary/80">
              About&nbsp;Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary/80">
              Privacy&nbsp;Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary/80">
              Terms&nbsp;of&nbsp;Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary/80">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
