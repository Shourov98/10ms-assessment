import { getProduct } from '@/lib/api/getProduct';
import { shapeProduct } from '@/lib/api/shapeProduct';
import CoursePage from '@/app/components/CoursePage';


export default async function Page() {
  // Fetch product data from the API
  const raw = await getProduct('ielts-course');

  {/* For tidy view model */}
  const view = shapeProduct(raw);

  return <CoursePage data={view}/>;
}