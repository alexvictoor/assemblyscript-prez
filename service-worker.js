"use strict";var precacheConfig=[["/assemblyscript-prez/index.html","64a1f2fdaf5613715243bd9a6ac42ed9"],["/assemblyscript-prez/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/assemblyscript-prez/static/js/0.ef07d0fb.chunk.js","c86c6c411a229002a1f9fc45385f4c04"],["/assemblyscript-prez/static/js/1.3df47eda.chunk.js","623555ffac272e573a60fc0a283a4f8c"],["/assemblyscript-prez/static/js/10.9fa4f569.chunk.js","aef452c3f35a0be70e7b2121b6b3d253"],["/assemblyscript-prez/static/js/11.a8bc4e10.chunk.js","355f019a457bc334e837a1027c462620"],["/assemblyscript-prez/static/js/12.e78258e8.chunk.js","de0bd231334dea19f4b399a97281d889"],["/assemblyscript-prez/static/js/13.c238f49d.chunk.js","4374f547b801375d66fd853096d1d19e"],["/assemblyscript-prez/static/js/14.7593da75.chunk.js","87b6208cadeda191f07ff4df9e6907c0"],["/assemblyscript-prez/static/js/15.4b6ab323.chunk.js","af9c4f5b0fa6ae448375e2ab5aee0461"],["/assemblyscript-prez/static/js/16.5aa69ba3.chunk.js","8b7720710d8c2ff7691b904380c978c3"],["/assemblyscript-prez/static/js/17.d841b0cf.chunk.js","da35f786f0eeb7cefb827c7159666864"],["/assemblyscript-prez/static/js/18.284d477c.chunk.js","2dbcfebb51e33fd832cb1b70538c7b86"],["/assemblyscript-prez/static/js/19.7fdee0ab.chunk.js","6b0cb11f9ef718f30cfa2ae7174d5490"],["/assemblyscript-prez/static/js/2.b164afaa.chunk.js","1ad9fad2dfec9a2aaf9d30838c91fbdc"],["/assemblyscript-prez/static/js/20.3c375e34.chunk.js","6e94cbf2ebfa9db23e43df625a5dedd2"],["/assemblyscript-prez/static/js/21.097c85de.chunk.js","3e732c9417507b011e4eecb3fa7d358f"],["/assemblyscript-prez/static/js/22.caeacb77.chunk.js","4db72ab2a68091780db448bf07572a3c"],["/assemblyscript-prez/static/js/23.c86fe286.chunk.js","ead6e0ac1f8f5b58321737788a6d91fd"],["/assemblyscript-prez/static/js/24.c3f19336.chunk.js","636b7f39ca62e56ceadf6f9201667b6a"],["/assemblyscript-prez/static/js/25.79c55b92.chunk.js","55ae208dd5e5455d7e284c78af24f460"],["/assemblyscript-prez/static/js/26.63a18572.chunk.js","741b27b37bd3214b77b44767e242da79"],["/assemblyscript-prez/static/js/27.d5fd2321.chunk.js","6c4a96a084590e92f27bd9af80035dc7"],["/assemblyscript-prez/static/js/28.24b0bf7e.chunk.js","44514aed2a180a854e3142ba59c7e9e1"],["/assemblyscript-prez/static/js/29.f972e9c2.chunk.js","da81fba8d867e1eb4aad16a99d4892a4"],["/assemblyscript-prez/static/js/3.5f88c323.chunk.js","be619b920c1487eeab830ba61d0c99e5"],["/assemblyscript-prez/static/js/30.1744c529.chunk.js","cf37275920a3418effe62010ab30d4ab"],["/assemblyscript-prez/static/js/31.1aa18219.chunk.js","1b1c36d54758c14a5efd1319a132c3ce"],["/assemblyscript-prez/static/js/32.55bef18c.chunk.js","9654dc58fd2676650f27a1dacd01e412"],["/assemblyscript-prez/static/js/33.8d0d4a04.chunk.js","36474359bf5a7a9405dd1ce4c8b221ae"],["/assemblyscript-prez/static/js/34.c9847b2a.chunk.js","68c418d7f5bdca8f81e6a6d8fc778649"],["/assemblyscript-prez/static/js/35.37214e4f.chunk.js","1873e1e3c200813d7fd7920e2de9a5c1"],["/assemblyscript-prez/static/js/36.ca07ecc5.chunk.js","07b0347f564287ace336d950252f996f"],["/assemblyscript-prez/static/js/37.00928392.chunk.js","b22769245a284e1deb1bed16a3ae585b"],["/assemblyscript-prez/static/js/38.29973edd.chunk.js","d60d58ac585f76bfef200bab2498cd7f"],["/assemblyscript-prez/static/js/4.e3740f6f.chunk.js","fad34d606671ff64407cce33fe5073fd"],["/assemblyscript-prez/static/js/5.d31b840c.chunk.js","4b2e6bd6af7ddd461be688f694b177ab"],["/assemblyscript-prez/static/js/6.41c0f488.chunk.js","bb5f8a2965f921d0f453de2dd62119bf"],["/assemblyscript-prez/static/js/7.148c413e.chunk.js","30e7d98798fc41193672f165edb23431"],["/assemblyscript-prez/static/js/8.d1f0b4e1.chunk.js","e5f407bc84a652c233f8ff707b8bd04d"],["/assemblyscript-prez/static/js/9.8a834475.chunk.js","58c5794b3a557dda80930c259b254480"],["/assemblyscript-prez/static/js/main.a0c1c4b3.js","ea91f2a37aebf7b72afd9050c7895335"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],c=new URL(s,self.location),t=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),s=urlsToCacheKeys.has(a));var t="/assemblyscript-prez/index.html";!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(t,self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});