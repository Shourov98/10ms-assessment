import { useProductStore } from '@/lib/store/productStore';
import CourseHeader from './CourseHeader';
import InstructorCard from './InstructorCard';

export default function CourseDetails() {
  const sections = useProductStore((s) => s.product!.sections);
  const instructors = Array.isArray(sections.instructors) ? sections.instructors : [];

  // console.log(instructors, 'instructors from CourseDetails');

  return (
    <div className="flex flex-col gap-12">
      <CourseHeader />

      <InstructorCard data={instructors[0]} />

      {/* ⬇ add later: Checklist, Features, etc. */}
    </div>
  );
}
