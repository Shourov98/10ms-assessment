import { useProductStore } from '@/lib/store/productStore';
import CourseHeader from './CourseHeader';
import InstructorCard from './InstructorCard';
import FeaturesGrid from './FeaturesGrid';
import FreePdfBanner from './PdfBanner';

export default function CourseDetails() {
  const sections = useProductStore((s) => s.product!.sections);
  const instructors = Array.isArray(sections.instructors) ? sections.instructors : [];

  const features = Array.isArray(sections.features) ? sections.features : [];

  //console.log(sections.pdf_banner, 'PDF Banner Data');

  return (
    <div className="flex flex-col gap-12">
      <CourseHeader />

      <InstructorCard data={instructors[0]} />
      <FeaturesGrid data={features} />
      <FreePdfBanner data={sections.pdf_banner} />

      {/* ⬇ add later: Checklist, Features, etc. */}
    </div>
  );
}
