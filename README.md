1. Added Vite
2. Added bundle analysis
3. Added Lighthouse to build step
4. Added web vitals
5. Added cssnano
6. Added lazy loading to images
7. Added `fetchpriority="high"`
8. Added convertion images to the WebP
9. Eliminated render-blocking resources by preloading critical fonts, using crossorigin for preloaded fonts from different origins, combined Google Fonts requests and defered non-critical CSS or inline critical styles in the `<head>`

Inside the /server folder, create a file (server.js) and set up your ExpressJS app.
install compression and add it in the server
add ETags to server
Install pm2 globally
start your app with pm2
implement the logic to store the data
install sqlite3
set up SQLite to store reservation data
