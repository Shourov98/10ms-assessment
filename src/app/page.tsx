import { getProduct } from '@/lib/api/getProduct';
import { shapeProduct } from '@/lib/api/shapeProduct';
import CoursePage from '@/app/components/CoursePage';


export default async function Page() {
  // 1) fetch raw JSON (ISR cache 60 s)
  const raw = await getProduct('ielts-course');

  // 2) map to tidy view‑model
  const view = shapeProduct(raw);
  //console.log('Mapped product', view);

  // 3) hand over to client realm
  return <CoursePage data={view}/>;
}