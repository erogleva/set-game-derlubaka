"use strict";var precacheConfig=[["/set-game-derlubaka/index.html","358be8945936e457a8b9aa22940fe579"],["/set-game-derlubaka/static/css/main.2b53078d.css","98d20c3a1728b2ce918ab08b1fcb3176"],["/set-game-derlubaka/static/js/main.ebf1014b.js","48ee4c0469453bd165ff16aac530b29c"],["/set-game-derlubaka/static/media/B_E01.1bda31d8.png","1bda31d8560fa5c6df6d37edb1afc210"],["/set-game-derlubaka/static/media/B_E01.92d39ff7.png","92d39ff73736eec96d1a92f593ec5440"],["/set-game-derlubaka/static/media/B_E01.ea0aa220.png","ea0aa220ad8c94ece65475868122bdb6"],["/set-game-derlubaka/static/media/B_E02.58b4e6e7.png","58b4e6e71fba531d7fc75adcab1502a3"],["/set-game-derlubaka/static/media/B_E02.9af64097.png","9af64097412e2212b0d2c1d22f5627cc"],["/set-game-derlubaka/static/media/B_E02.fa254faa.png","fa254faa61d4b225f588853e504c4163"],["/set-game-derlubaka/static/media/B_E03.377abea1.png","377abea19bc6ef933abc463f1907e393"],["/set-game-derlubaka/static/media/B_E03.71152ab1.png","71152ab1c612635f875ce3459debae45"],["/set-game-derlubaka/static/media/B_E03.b926da33.png","b926da336244dbfa37a297b7e16abf2c"],["/set-game-derlubaka/static/media/B_F01.078f8c4d.png","078f8c4d348e5fed6b95bedebf7b7d23"],["/set-game-derlubaka/static/media/B_F01.382df340.png","382df340e0441677743cb4ce84cd3e8e"],["/set-game-derlubaka/static/media/B_F01.8ec57bea.png","8ec57bea229e98fc56b37e275877344b"],["/set-game-derlubaka/static/media/B_F02.2ae55854.png","2ae55854ef476b09efd7168689d2ad5d"],["/set-game-derlubaka/static/media/B_F02.dd08c7a9.png","dd08c7a9a8cfb0076f2afff25ffbe4f0"],["/set-game-derlubaka/static/media/B_F02.f01190bd.png","f01190bd8d480706c950122347fb725d"],["/set-game-derlubaka/static/media/B_F03.58a3200c.png","58a3200c95db5eda1eb79e7be3c4b9ca"],["/set-game-derlubaka/static/media/B_F03.895f85a5.png","895f85a5ae97d7430cc812909d432deb"],["/set-game-derlubaka/static/media/B_F03.c4ab3627.png","c4ab3627b41a49ce95c4927997b10dad"],["/set-game-derlubaka/static/media/B_S01.12c5b898.png","12c5b898817c4590256f9beb3bf8475a"],["/set-game-derlubaka/static/media/B_S01.45c5d2c8.png","45c5d2c866387d81bb82dc52aa762cc1"],["/set-game-derlubaka/static/media/B_S01.e969c7b9.png","e969c7b987fb4f55af8db446f851a1a4"],["/set-game-derlubaka/static/media/B_S02.43cdf618.png","43cdf618b84ffd25eca6638c43bdc9c2"],["/set-game-derlubaka/static/media/B_S02.4ebd2def.png","4ebd2def91f0a0c3f881fb883ffa5643"],["/set-game-derlubaka/static/media/B_S02.98bd0873.png","98bd0873aa92badfe7176ac916e0dffa"],["/set-game-derlubaka/static/media/B_S03.4fad4896.png","4fad48963f416b5effa16fa7cb2d9b6e"],["/set-game-derlubaka/static/media/B_S03.5fd8867f.png","5fd8867fc6e4456021d4f6a0d8a011d8"],["/set-game-derlubaka/static/media/B_S03.6c8fbd53.png","6c8fbd533c94c71edecae7b9c069ba29"],["/set-game-derlubaka/static/media/C_E01.0a8ea01f.png","0a8ea01ffb98e852db8f694d837daf56"],["/set-game-derlubaka/static/media/C_E01.4d86bc1a.png","4d86bc1a2535a7776296c55035e0d799"],["/set-game-derlubaka/static/media/C_E01.6105a991.png","6105a9917d147db2c8b9bca925ab797a"],["/set-game-derlubaka/static/media/C_E02.48342b15.png","48342b1545777acba38faad3e7386f2c"],["/set-game-derlubaka/static/media/C_E02.9fe564a6.png","9fe564a686d7cba36fb79a578fd11464"],["/set-game-derlubaka/static/media/C_E02.da54bace.png","da54bace5214ac405225744c9a7c7da0"],["/set-game-derlubaka/static/media/C_E03.a4658c1b.png","a4658c1bb4f098cef4b9866d9289dd05"],["/set-game-derlubaka/static/media/C_E03.d50bb56e.png","d50bb56e9fd81f6b21ace4afab972545"],["/set-game-derlubaka/static/media/C_E03.de4b50a5.png","de4b50a59824c67d5be438b17dfbfe71"],["/set-game-derlubaka/static/media/C_F01.363cefac.png","363cefac60fa56edf4c9800b6fa5e4e7"],["/set-game-derlubaka/static/media/C_F01.5bf92a66.png","5bf92a662d85f63192e479edb76e5341"],["/set-game-derlubaka/static/media/C_F01.ab9818fa.png","ab9818faab2ef1196089552918e86e30"],["/set-game-derlubaka/static/media/C_F02.44899328.png","44899328136a92d42469acde57ed6ae4"],["/set-game-derlubaka/static/media/C_F02.9125020d.png","9125020dbd307a083dbb568aa14e8a5d"],["/set-game-derlubaka/static/media/C_F02.af4482c4.png","af4482c4315d1d2f98635b995ce156b7"],["/set-game-derlubaka/static/media/C_F03.25225bed.png","25225beddd569fd4c3d92ec6eac988c2"],["/set-game-derlubaka/static/media/C_F03.3e47c573.png","3e47c573135ed3e65035519cfa856b0f"],["/set-game-derlubaka/static/media/C_F03.b8dd0bef.png","b8dd0befa83389dc5f2dee9310f8dfaf"],["/set-game-derlubaka/static/media/C_S01.5da891f9.png","5da891f956415e09ec11f294532ca1a2"],["/set-game-derlubaka/static/media/C_S01.6474f41a.png","6474f41a4f41b995b6587a618847bcc3"],["/set-game-derlubaka/static/media/C_S01.aa301a41.png","aa301a418d8bb29b3a5051123ec5ef28"],["/set-game-derlubaka/static/media/C_S02.19423420.png","194234201da5cd4cfc43bd9dd1ef6380"],["/set-game-derlubaka/static/media/C_S02.434b9214.png","434b9214f4f4b6a992511e7bc7416fee"],["/set-game-derlubaka/static/media/C_S02.ae494ef7.png","ae494ef70763a8c2210999d4bbf95086"],["/set-game-derlubaka/static/media/C_S03.155fc6a4.png","155fc6a49ebe16428f49d65309cf6e0d"],["/set-game-derlubaka/static/media/C_S03.5e1c3b17.png","5e1c3b1722808529b5d0dcdbd0abcba5"],["/set-game-derlubaka/static/media/C_S03.c93ccc03.png","c93ccc03215eeaf8fe45588a88638a6e"],["/set-game-derlubaka/static/media/GLAGOLICA.44ea0e55.jpg","44ea0e55564cb7904872fbabfbdbe716"],["/set-game-derlubaka/static/media/Muli-Black.6d782a98.ttf","6d782a98b54c6ef15f7ca92e57e53dd8"],["/set-game-derlubaka/static/media/Poppins-Medium.a4e11dda.ttf","a4e11dda40531debd374e4c8b1dcc7f4"],["/set-game-derlubaka/static/media/S_E01.3b4486cd.png","3b4486cda1f10b7d97dfab4c2d582f32"],["/set-game-derlubaka/static/media/S_E01.be9bf04e.png","be9bf04e73772855f51196bb31cc2e3c"],["/set-game-derlubaka/static/media/S_E01.ff0557de.png","ff0557de5f85824237bce6c101343152"],["/set-game-derlubaka/static/media/S_E02.62481d2d.png","62481d2d7a18e6ee99fc236a5126bd20"],["/set-game-derlubaka/static/media/S_E02.ef548759.png","ef548759fd46f9860be94ca012f88c91"],["/set-game-derlubaka/static/media/S_E02.fa8e7e38.png","fa8e7e3886e70109b8bbcd482ce242f6"],["/set-game-derlubaka/static/media/S_E03.2af2cd73.png","2af2cd73d91ac7af1839cd955faabe07"],["/set-game-derlubaka/static/media/S_E03.30aab5a7.png","30aab5a713d2e98d697d179b5a234159"],["/set-game-derlubaka/static/media/S_E03.b9f1bdaf.png","b9f1bdaf7c4ec62ba47f2642029b5066"],["/set-game-derlubaka/static/media/S_F01.38af2fff.png","38af2ffff77be594561525909141c29b"],["/set-game-derlubaka/static/media/S_F01.3ef1d13f.png","3ef1d13f0f7e1e3f5e02c635f2cf0b7a"],["/set-game-derlubaka/static/media/S_F01.b9ba51e8.png","b9ba51e8f499573e9854fd4a732fa819"],["/set-game-derlubaka/static/media/S_F02.47ab9051.png","47ab905105e37d9c3ba81e2f45aea765"],["/set-game-derlubaka/static/media/S_F02.9626e071.png","9626e071ef3d6e485942895d9a995e7e"],["/set-game-derlubaka/static/media/S_F02.c324f8d7.png","c324f8d760b28c32c0e3473c274da642"],["/set-game-derlubaka/static/media/S_F03.0903e16c.png","0903e16cac9e0322df8382d88d8a061f"],["/set-game-derlubaka/static/media/S_F03.154c645e.png","154c645ee2b797ed5e29846089298c43"],["/set-game-derlubaka/static/media/S_F03.1bfd21f1.png","1bfd21f16af9017073ced0924fe0fbb0"],["/set-game-derlubaka/static/media/S_S01.4f4ddf55.png","4f4ddf55d300b5f27254da2f52de3091"],["/set-game-derlubaka/static/media/S_S01.6a75c019.png","6a75c01900a621fe8a4d61550ec36d92"],["/set-game-derlubaka/static/media/S_S01.cf82170b.png","cf82170b58f413e9329917cc6db0eddf"],["/set-game-derlubaka/static/media/S_S02.89e184ab.png","89e184ab1d5b589c6ba14fedca21a395"],["/set-game-derlubaka/static/media/S_S02.8ba53af2.png","8ba53af275b074abbc646c55c5748f84"],["/set-game-derlubaka/static/media/S_S02.fba99b4c.png","fba99b4c9cceee80e7e454bf3c65e3dd"],["/set-game-derlubaka/static/media/S_S03.4c060a90.png","4c060a9057c1e5e6c04ba26cdf5f1f4a"],["/set-game-derlubaka/static/media/S_S03.76ed8a37.png","76ed8a379aed16b624c750f11e5d856b"],["/set-game-derlubaka/static/media/S_S03.f228d0f8.png","f228d0f86c85df568ac1b993e196e63e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,d){var c=new URL(e);return d&&c.pathname.match(d)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],d=new URL(a,self.location),c=createCacheKey(d,hashParamName,t,/\.\w{8}\./);return[d.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(d){return setOfCachedUrls(d).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return d.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),d="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,d),e=urlsToCacheKeys.has(t));var c="/set-game-derlubaka/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});