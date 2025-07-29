'use client';

import { useEffect } from 'react';
import { useProductStore } from '@/lib/store/productStore';
import Navbar from './Navbar';
import { UiProduct } from '@/types/product';

export default function ClientPage({ data }: { data: UiProduct }) {
  // hydrate once
  const setProduct = useProductStore(s => s.setProduct);
  useEffect(() => setProduct(data), [data, setProduct]);

  return (
    <main>
      <Navbar />
    </main>
  );
}