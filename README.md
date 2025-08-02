
# 10ms Assessment – Next.js IELTS Course Page

This project is a modern course platform built with [Next.js](https://nextjs.org), TypeScript, Zustand, and Tailwind CSS. It features responsive layouts, dynamic course content, instructor profiles, testimonials, and more. The codebase is designed for scalability, maintainability, and professional UI/UX.
Deployed in Vercel : [10ms-assessment] (https://10ms-assessment-phi.vercel.app/)

## Features

- ⚡ Fast, production-ready Next.js app (App Router)
- 🎨 Responsive design with Tailwind CSS
- 🗂️ TypeScript for type safety
- 🗃️ Zustand for state management
- 🖼️ Optimized images with Next.js Image
- 📱 Mobile-friendly navigation and layouts
- 🧑‍🏫 Instructor and testimonial carousels
- 🐳 Docker support for easy deployment

## Getting Started (Development)


Clone the repository and install dependencies:

```bash
git clone https://github.com/Shourov98/10ms-assessment.git
cd 10ms-assessment
npm install
# or yarn / pnpm / bun
```

Run the development server:

```bash
npm run dev
# or yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Running with Docker

Build and run the app in a container:

```bash
docker build -t 10ms-assessment .
docker run -p 3000:3000 10ms-assessment
```


## Project Structure


```
10ms-assessment/
├── data.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── Dockerfile
├── public/
│   └── ... (static assets)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── CourseBanner.tsx
│   │       ├── CoursePage.tsx
│   │       ├── Footer.tsx
│   │       ├── MobileDrawer.tsx
│   │       ├── Navbar.tsx
│   │       ├── details/
│   │       │   ├── AboutAccordion.tsx
│   │       │   ├── CourseDetails.tsx
│   │       │   ├── CourseHeader.tsx
│   │       │   ├── ExclusiveFeatures.tsx
│   │       │   ├── FeaturesGrid.tsx
│   │       │   ├── InstructorCard.tsx
│   │       │   ├── PdfBanner.tsx
│   │       │   ├── PointersList.tsx
│   │       │   └── TestimonialCarousel.tsx
│   │       ├── layout/
│   │       │   └── CourseLayout.tsx
│   │       └── summary/
│   │           └── CourseSummary.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   ├── getProduct.ts
│   │   │   └── shapeProduct.ts
│   │   └── store/
│   │       └── productStore.ts
│   └── types/
│       └── product.ts
```

- `src/app/` – Main app and page components
- `src/lib/` – API, store, and utility logic
- `src/types/` – TypeScript interfaces
- `public/` – Static assets
- `data.json` – Example API data

## Customization

- Edit `src/app/page.tsx` to change the landing page
- Update `data.json` to modify course/testimonial data
- Adjust Tailwind config in `tailwind.config.js` as needed

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License

This project is for assessment and educational purposes.
