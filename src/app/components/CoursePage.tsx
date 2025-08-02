'use client';

import { useEffect } from 'react';
import { useProductStore } from '@/lib/store/productStore';
import Navbar from './Navbar';
import { UiProduct } from '@/types/product';
import CourseLayout from './layout/CourseLayout';
import CourseDetails from './details/CourseDetails';
import CourseSummary from './summary/CourseSummary';
import CourseBanner from './CourseBanner';
import Footer from './Footer';

export default function ClientPage({ data }: { data: UiProduct }) {
  // hydrate once
  const setProduct = useProductStore(s => s.setProduct);
  const product = useProductStore(s => s.product);
  useEffect(() => setProduct(data), [data, setProduct]);

  return (
    <>
      <Navbar />
      <CourseBanner />
      {product && (
        <CourseLayout
          details={<CourseDetails />}
          summary={<CourseSummary />}
        />
      )}
      <Footer />
    </>
  );
}