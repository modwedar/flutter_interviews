'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d6ef669725e869ca26bebeb08b04c5c8",
"version.json": "2205c5894eb18e0f83903b2d12f17a13",
"index.html": "15ea380dbe36247dde37f068132565e8",
"/": "15ea380dbe36247dde37f068132565e8",
"main.dart.js": "c3c432fc08043bce93ddefc0aef527b0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8a4d801212d59789a3ba5a73ce1ebd7d",
".git/config": "de12ffd1004cfe9b7b8a0b14858a007d",
".git/objects/61/1c323169682bfe1d6c18c2e9fc9ae5087e48dd": "2c17cfeed2c6c9428de1ac8c9b2a0fda",
".git/objects/50/2970edcb56de1b88c52b4cf4496a40a9980478": "add8d987de4bd9dee01bbbad81f24dd3",
".git/objects/3b/f171f582b59fd41479b376af1f794a5c186229": "86531b96cb467b4df864d2a1a24c20db",
".git/objects/9b/1b30465b1c3a37033d5e9230f557f0da204303": "868cf44f735d841472396c46bb2530f6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/69/5c6e458fee6aba721549112e018b1e9ead2250": "949edc685cec67548f88f65400019a2d",
".git/objects/3c/d87ee54f1517bd4118501f05e4b67a53f1893c": "eedf6cd76a427452fd11a4143f6b5b0f",
".git/objects/51/23ef7d877a69b92a39494dac7c4c0fa5835db9": "9d4e273aa61b1e011e8dccf39ab22e1c",
".git/objects/58/657db393251dec00ce244b5d49f83bdc4eaf89": "cb5b3f1d2d03797e60a5872883c45da8",
".git/objects/93/65eb736473ae34950b43f2c582afc215ad9cc4": "11cdcb396d90230e813914f4a6256214",
".git/objects/33/545ee2f7acd23a62be9b100868ebe11433757e": "9ff4ef1cfb2735bdbd01e7ef998d4ef2",
".git/objects/b5/13f50c9c35b04fff58ba07631cfeeef0f166db": "0a9fcc363b725b0d4f28e16fab47c8f1",
".git/objects/ac/e03bd3f123388a3539c5b1df4a04eb4437e516": "6edebbe0b2e917ab07cb5c29325664a4",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a2/1e43af4b997a97b16c7452d7821f993bf7f630": "0fa1d6c70ae7160cdc28d130f80d9383",
".git/objects/a2/8915789730f52167cb1cd67f046593c2232bed": "a10326e948739e82825d36d0a82ebf4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/23082ba5cb6c01d95a3cee36420890a340682e": "dcf534577b172eb50db2dd5701bc088f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/e8d2aeec4e00955a8082f0c74b19fda5f7a547": "6e9271ad604fd11687f3bfca65c3776f",
".git/objects/ee/4ef66cb7bcfe2127e2d9573d095873cc1acfab": "3748f5eb451684bf04ac1e8e89931bfe",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/8bdaa7f979feb4c5fb8862cc56435f7c2de790": "195fab532d893fd281ca75559be6f6e6",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ec/50e5c78d2690b57d7b7c688f8f8d5a7005fc72": "3b3f92320efa759bd26bde976b8fac14",
".git/objects/20/fb29c0aa77892eb3bc8ff1e4f3e759ac3df94e": "909d626434d54d0fbbb66b341175bff6",
".git/objects/16/3aa26ee101b7273435ef1fb6c9400afe38e3da": "c475a3b86ad9f827abd967a4da0c5ea8",
".git/objects/16/9f50485f09cfd8c8e876d539dc2dd6115bbd6f": "7110177a77309b55f1d262794095fdf1",
".git/objects/42/8f5559ce14161cd8540b8acdae310185e67d8f": "70bd699ea0ce328b5377f4a5b56f4124",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/98eb9323d10a34012eb85d964ada05bebaaaae": "d6133ef04e367549a5c99e61df1da049",
".git/objects/4c/42e3abaef0855d55639c7bfb59f49db05323c0": "094dae3e5f3bc1af3dc75dadf689c65b",
".git/objects/4d/7e164780e6783f5593fea42baae6adb9f1dc85": "f94d880fe29c344cfdb142dba9297123",
".git/objects/81/2f8c15414a14abab7045aaa410ad3d36807646": "dbc6aa3e79302f8137ac8ae8bb6c0e7d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5d/4522c4ac3fc0acad8d2e4380c90d8235da1200": "635efc55bfee845f2ca12c566be99ef9",
".git/objects/62/877d1d1217d54b87db1e00b4a60a1a3d88479d": "6a8c98cad816f3d4317a797fa7616452",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/08/c9b51876b1567243e8b83dc81f857a3be24dbb": "9f89339b0a472fb89c8a06c057acf4ad",
".git/objects/01/710a40721a2c533278d929d44355615cdc9661": "06d462c27a50706724468b9bfea4fa57",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/fedee79b9aef095a1f870a0af293f3f9e3a4b2": "3a3b55c28c4c411c24c260bf0540331a",
".git/objects/b8/a134483c502565f43ba5ebdab8af617e67aaad": "130214aefd1a29141f2d7f144b1b3211",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a01f8742b4a07f036e40880d01e51bf0c9219a": "8ba03bcb90b555743d5e7f94e201da61",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/4f03197f2c97bf4698906cf6de0ca747e75c2a": "5745cee64a4d37064b84ba263023f03a",
".git/objects/e1/efedf1823e3cd021b3dab077f2fe9087f37943": "019a76e8579631aecd919aac18fffd59",
".git/objects/f7/22e17b9d0656832e415e1ef5ee7ce9f6ca5ae7": "6e597194e73b482f2063479421b6a15a",
".git/objects/f6/b3f3322085788c5be2c0787e32d04bf08da068": "31d74fb979b8d6675ec5bd0ccf6f69e8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/b643766ab1ed15b308699cd9548b3a7fa20ca0": "161006be9d4ff989c6a50f87ac909a1f",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/031084442d646bd72a9f7426086f3f7c21224e": "09242c0feb01e18a8fcfd3b474415700",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/85/60af6ca9be7ac0d3c6a0310f7250f5817fa47e": "f4e01b03f236a246c74816e5b37364d3",
".git/objects/1c/28ff0865b82b7dc30a222ff692557cad2bc944": "0752ebd1531ac21ac0240d7f8b0d30da",
".git/objects/47/0422bf052e048f710000c54f5883ef7593383e": "9785a92d7a8f8a0687536c0402e6ab5e",
".git/objects/7f/981e0313db635a9a6a5748390315329f8b1e58": "e7c08ccd61922d88029fced430ca3cb2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1a95c5c0291bbcb5594e0e48c3eac3e",
".git/logs/refs/heads/main": "c1a95c5c0291bbcb5594e0e48c3eac3e",
".git/logs/refs/remotes/origin/main": "89cde51cace3a4f4be7f5e3331f9d159",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4ea1e3bda9862cc4f72c6b925cb4f3a5",
".git/refs/remotes/origin/main": "4ea1e3bda9862cc4f72c6b925cb4f3a5",
".git/index": "9356a559a596884830e0227095c031d0",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
"assets/AssetManifest.json": "289df5dfb08d6f43dd04ddd9a0b093c5",
"assets/NOTICES": "b727481e124bf43a992cf2d9d77e0931",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "725751376b1d017c5a5786ac4aa885b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1e3a63663b5a6b505b08dfde73fb6581",
"assets/fonts/MaterialIcons-Regular.otf": "4b3f5325521689304278694307c11e3a",
"assets/assets/data.aes": "1f08e369290180dca6794f9f3f964230",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
