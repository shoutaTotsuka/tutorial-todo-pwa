if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.08bade3f.css",revision:"d9e813e87ea8af5bb4acb4b9333ceeea"},{url:"assets/index.cd532b39.js",revision:"98836b50bcb77f59f600281085486ec6"},{url:"assets/vendor.f665d9ae.js",revision:"8d7bb064db08deb76a8af337f3536164"},{url:"index.html",revision:"3c27298ee8b98e7a2f0bc7f359cf260b"},{url:"icon-192x192.png",revision:"4c90e6986ff7015753efea31e68b2c61"},{url:"icon-512x512.png",revision:"25e18f076cce11f2b7814ff09de14bf2"},{url:"manifest.webmanifest",revision:"b430f6788c51ba232add8cc9c73de0f4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
