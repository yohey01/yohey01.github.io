'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "248abd16c6c0393c08220c27ea2b448b",
"assets/assets/audios/bgsound.mp3": "31094760bb27cc3d3e21e6802a8ba166",
"assets/assets/audios/call.mp3": "0b39c4e0f7d9bb29596fd8e8c5c32e52",
"assets/assets/audios/round1/0.mp3": "6af5e142d65107898cdf146b087d7dc4",
"assets/assets/audios/round1/1.mp3": "29324ac9909891b947d17e748dbaa928",
"assets/assets/audios/round1/10.mp3": "dd3ff1e9e48cb0fe942003b060b49435",
"assets/assets/audios/round1/11.mp3": "d4a6aa87a49c2ac04450cb5423579434",
"assets/assets/audios/round1/12.mp3": "353cdcc6df61669fbb164acb51024222",
"assets/assets/audios/round1/13.mp3": "8a24ced944ce70f05b0679530551bd8a",
"assets/assets/audios/round1/14.mp3": "534198ac931f2ff6b67a9c0b92fa282a",
"assets/assets/audios/round1/15.mp3": "741760e93861beead2365a95237f8073",
"assets/assets/audios/round1/16.mp3": "e294dd9dc26f4e5149dae3cdf04aa492",
"assets/assets/audios/round1/17.mp3": "d36e3de9d308ea5a1ce11b7bab2c8631",
"assets/assets/audios/round1/19.mp3": "d4e1118824272dd0cffdff5a03bba5b2",
"assets/assets/audios/round1/2.mp3": "6e27e269e645eb176ecbd974daf88e83",
"assets/assets/audios/round1/3.mp3": "a99f425aafe7c8627362d60ffaededdf",
"assets/assets/audios/round1/4.mp3": "99699261c185a003dd994b70ebb917eb",
"assets/assets/audios/round1/5.mp3": "271afbfe967631f158bfee956254fd19",
"assets/assets/audios/round1/6.mp3": "2a97a2c85dc5a486acae4a75939c16bf",
"assets/assets/audios/round1/7.mp3": "58c9f938aa6831771fb74fd2259e45ac",
"assets/assets/audios/round1/8.mp3": "f687a46debc96123e0f9d4516f8d9b24",
"assets/assets/audios/round1/9.mp3": "017c5ae050fc195a60c155be9c9e8e88",
"assets/assets/audios/round2/0.mp3": "705db82bb19e4ff87aa5790202133299",
"assets/assets/audios/round2/1.mp3": "5d4051714039a655ce8eb2c0dba35c02",
"assets/assets/audios/round2/2.mp3": "bf43bbe1d461f25b4b495656742980c1",
"assets/assets/audios/round2/3.mp3": "207cb631f8048deb957368919aee5f9e",
"assets/assets/audios/round2/4.mp3": "0f0f2a3cded38482bc7d612238f018f3",
"assets/assets/audios/round2/5.mp3": "3c2ce62714f3e09cd59cd14bd172b80d",
"assets/assets/audios/round2/6.mp3": "53b92ecc9a65648bcc6f4c1127f252d1",
"assets/assets/fonts/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/assets/images/67/0.png": "ac7ce53f6480a137599ca360c89983de",
"assets/assets/images/67/1.png": "0e9bdbcc17d40ccaf8d9946f0f8e2cb8",
"assets/assets/images/67/10.png": "98d66b3e906545a97cef4f962532c625",
"assets/assets/images/67/2.png": "bcbbb1221784997f6a3961b20aac61f4",
"assets/assets/images/67/24.png": "299c2f09ccd0c62bdaf484205ffb86f8",
"assets/assets/images/67/26.png": "12e0c7c8a7918fff6742c3b7ed9eaa89",
"assets/assets/images/67/27.png": "238bfef9538d4457c8da8283b51282fd",
"assets/assets/images/67/29.png": "ebed100545ea453fe81e732a1b48d1d2",
"assets/assets/images/67/4.png": "b6005a5fc3ca6acba2aac9e294ae764d",
"assets/assets/images/67/67.png": "55182b67c040e80cc4adf387d8857d0d",
"assets/assets/images/67/7.png": "1253dcaefc6715d3447aa89aa69535c8",
"assets/assets/images/67/8.png": "147424a7ad0f076432efc5bba0a7750d",
"assets/assets/images/67/9.png": "14dbb147d2ff3471838f386a41b5abf7",
"assets/assets/images/background/0.png": "63b66572dbca5906e92a00b2fc760ff6",
"assets/assets/images/background/1.png": "d057448a54797bc0bdbccad4438d8f19",
"assets/assets/images/background/10.png": "b1dfe51fd5ef073d15db02c78db18f70",
"assets/assets/images/background/2.png": "6fc282d7a799bcf730e95adf5ea9b3c7",
"assets/assets/images/background/3.png": "4e1f6510f48526220d11525d20123a56",
"assets/assets/images/background/4.png": "9e24dd9d030653db600913ea28af4a57",
"assets/assets/images/background/5.png": "a0bb5e1b9277c419f5d9bfb166736346",
"assets/assets/images/background/6.png": "7e591d31ce3e29b8ad113e1bf66efcc9",
"assets/assets/images/background/7.png": "001a0c6616f85c409429aa46b37e186c",
"assets/assets/images/background/8.png": "fc4ed225bd5c0b1eaa4da2f4a1ea8e62",
"assets/assets/images/background/9.png": "24b71ae3fead8da6e98cb406eac00256",
"assets/assets/images/start.png": "4633dd24c85f5c8f3bdebac81453feb9",
"assets/assets/images/textbox.png": "f54c0895137ef3cb7327e980c74e0211",
"assets/assets/videos/0.mp4": "9c65d86c0578daf92189d0f43f85f76f",
"assets/assets/videos/1.mp4": "4e77a285f05ed1a2e2c731c9a93aa723",
"assets/assets/videos/2.mp4": "ac8ff82f96fcc475ffac3efc846c4307",
"assets/assets/videos/3.mp4": "c187edb955d16d1420395eaab5af1923",
"assets/FontManifest.json": "8579c6adc9e38c35424c0f467921413b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "56a175bdb0af9c262c8f740978770ccc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "37cf788f7a38184efe3ef3a5f08391c4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8429928050f346104cd730c3fe98050",
"/": "f8429928050f346104cd730c3fe98050",
"main.dart.js": "d6c5f3a02a252dbe832e45c980d52943",
"manifest.json": "a9a65edd6f95e0d3359f9ae44431aa98",
"version.json": "3f76bfcd6e947d74b65a32b7f657b266"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
