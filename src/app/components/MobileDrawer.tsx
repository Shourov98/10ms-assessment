'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

interface Props {
  open: boolean;
  onClose: () => void;
}
const NAV_ITEMS = [
  'ক্লাস ৬-১২',
  'স্কিলস',
  'ভর্তি পরীক্ষা',
  'অনলাইন ব্যাচ',
  'ইংলিশ সেন্টার',
  'আরো',
];

export default function MobileDrawer({ open, onClose }: Props) {
  return (
    <aside
      className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      {/* panel */}
      <div
        className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between border-b p-4">
          <span className="text-lg font-semibold">মেনু</span>
          <button
            onClick={onClose}
            className="rounded p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close menu"
          >
            <X className="size-6" />
          </button>
        </header>

        <nav className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="flex items-center justify-between rounded px-2 py-2 text-sm font-medium hover:bg-gray-100"
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

        <div className="mt-auto p-4">
          <Link
            href="/login"
            className="block w-full rounded-md bg-green-600 py-2 text-center text-sm font-semibold text-white hover:bg-green-700"
          >
            লগ-ইন
          </Link>
        </div>
      </div>
    </aside>
  );
}
