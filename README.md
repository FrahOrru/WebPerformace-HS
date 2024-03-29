1. Added Vite
2. Added bundle analysis
3. Added Lighthouse to build step
4. Added web vitals
5. Added cssnano
6. Added lazy loading to images
7. Added `fetchpriority="high"`
8. Added convertion images to the WebP
9. Eliminated render-blocking resources by preloading critical fonts, using crossorigin for preloaded fonts from different origins, combined Google Fonts requests and defered non-critical CSS or inline critical styles in the `<head>`

Features
- Uses Next.js for server-side rendering
- Image component for special menus
- Code splitting and routing with Link component
- API endpoint for reservation (`pages/api/reserve.ts`)
- Deployment on Vercel

## How to Run Locally
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
