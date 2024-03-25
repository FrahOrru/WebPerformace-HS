1. Added Vite
2. Added bundle analysis
3. Added Lighthouse to build step
4. Added web vitals
5. Added cssnano
6. Added lazy loading to images
7. Added `fetchpriority="high"`
8. Added convertion images to the WebP
9. Eliminated render-blocking resources by preloading critical fonts, using crossorigin for preloaded fonts from different origins, combined Google Fonts requests and defered non-critical CSS or inline critical styles in the `<head>`

Create /server folder
Setup basic ExpressJS app, https://expressjs.com/en/starter/static-files.html 
Server should serve built version of the FE app
Add Gzip or Brotli compression
Add Etags headers, https://expressjs.com/en/api.html 
Add pm2 setup to run in production
* Add endpoint to store data submitted via reservations form
* Save data in text file or SQLite