import { log } from "console";

// src/lib/api/getProduct.ts
export async function getProduct(slug: string, lang = 'en') {
  // ✅ 1. correct path (no stray “d.”)
  // ✅ 2. keep the query string exactly as curl (lang + empty param)
  const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}&=`;

  const res = await fetch(url, {
    // ✅ 3. same headers your curl sends
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      accept: 'application/json',
    },
    next: { revalidate: 60 }, // optional ISR
  });

  if (!res.ok) {
    const body = await res.text();          // helpful during dev
    console.error('API error', res.status, body.slice(0, 200));
    throw new Error(`API error ${res.status}`);
  }
  // console.log('API response', await res.json());
  return (await res.json()).data;           // raw product JSON
}
