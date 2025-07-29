'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Phone } from 'lucide-react';
import MobileDrawer from './MobileDrawer';



const NAV_ITEMS = [
  'ক্লাস ৬-১২',
  'স্কিলস',
  'ভর্তি পরীক্ষা',
  'অনলাইন ব্যাচ',
  'ইংলিশ সেন্টার',
  'আরো',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* container */}
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 xl:px-8">
        {/* ───────── left controls ───────── */}
        {/* hamburger on <xl */}
        <button
          onClick={() => setOpen(true)}
          className="xl:hidden mr-1 rounded p-1.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Open main menu"
        >
          <Menu className="size-6" />
        </button>

        {/* brand */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-10ms.svg" // save the logo here or swap URL
            alt="10 Minute School"
            width={125}
            height={28}
            priority
          />
        </Link>

        {/* ───────── search ───────── */}
        <div className="flex flex-1 justify-center">
          {/* full input from md-up */}
          <div className="relative hidden md:block w-full max-w-[500px] xl:max-w-[640px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="search"
              aria-label="Search"
              placeholder="ক্লাস কোর্স, কিঙ্গবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full rounded-full border border-gray-200 py-2 pl-12 pr-4 text-sm placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          
        </div>

        {/* ───────── nav links (xl-only) ───────── */}
        <nav className="hidden xl:flex items-center gap-6 pl-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 hover:text-primary focus:outline-none"
            >
              {item}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          ))}
        </nav>

        {/* ───────── right controls ───────── */}
        <div className="flex text-gray-800 shrink-0 items-center gap-3 md:gap-4 pl-2">
          {/* language toggle: hidden on <md */}
          <button className="hidden md:inline-flex items-center rounded border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            <span className="mr-1 text-xs">আ</span>
            EN
          </button>

          {/* icon-only button on <md */}
          <button
            aria-label="Search"
            className="md:hidden rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Search className="size-6" />
          </button>

          {/* phone: icon always, number md-up */}
          <Link
            href="tel:16910"
            className="flex text-green-700 items-center gap-1 text-primary hover:underline"
          >
            <Phone className="size-4" />
            <span className="hidden md:inline">16910</span>
          </Link>

          {/* login */}
          <Link
            href="/login"
            className="rounded-md bg-green-600 px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            লগ-ইন
          </Link>
        </div>
      </div>

      {/* mobile drawer */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* Optional thin gradient border helper (tailwind plugin-free) */
export function BorderGradient() {
  return (
    <div className="h-[2px] bg-[linear-gradient(90deg,#b30000_0%,#ff6a00_50%,#b30000_100%)]" />
  );
}
