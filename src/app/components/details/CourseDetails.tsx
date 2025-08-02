
import { useProductStore } from '@/lib/store/productStore';
import CourseHeader from './CourseHeader';
import InstructorCard from './InstructorCard';
import FeaturesGrid from './FeaturesGrid';
import FreePdfBanner, { PdfBannerModel } from './PdfBanner';
import PointersList from './PointersList';
import AboutAccordion from './AboutAccordion';
import ExclusiveFeatures from './ExclusiveFeatures';
import TestimonialCarousel from './TestimonialCarousel';

export default function CourseDetails() {
  const sections = useProductStore((s) => s.product!.sections);
  const instructors = Array.isArray(sections.instructors) ? sections.instructors : [];

  const features = Array.isArray(sections.features) ? sections.features : [];
  
  const pointersList = Array.isArray(sections.pointers) ? sections.pointers : [];

  return (
    <div className="flex flex-col gap-12 -mt-30">
      <CourseHeader />

      <InstructorCard data={instructors[0]} />
      <FeaturesGrid data={features} />
      <FreePdfBanner data={sections.pdf_banner as PdfBannerModel} />
      <PointersList data={pointersList} />
      <AboutAccordion data={sections.about as any[]} />
      <ExclusiveFeatures />
      <TestimonialCarousel />


      {/* ⬇ add later: Checklist, Features, etc. */}
    </div>
  );
}
