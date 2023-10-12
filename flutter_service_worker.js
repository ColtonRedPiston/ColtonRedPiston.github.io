'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e6e296516984048df701a3a0d1e6fff0",
"index.html": "6ccd585dca4e40cd4113adf552d1b601",
"/": "6ccd585dca4e40cd4113adf552d1b601",
"main.dart.js": "8e94c641a5ad0b78d32599d4ea6dbef7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19b16253b9f4a3558b4aeabee83c5ba2",
".git/config": "bdcb536094c6753ac5e96663f4b6b729",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/912181ef03b06b0360c98a8fe4d37a6f9aba10": "0c449faff84cd529e971c90dc6520299",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/60/462e03051e91b6bc77562735d06d30771fa58d": "d95e7adba701cc181736fed6d32871b2",
".git/objects/5f/d96862d86632f2888a247d6a3e249dd0173d01": "d9dad123798c2631bbd6d5eb799250c8",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/27f8351aa50bb343d16947b06afee57281d2d7": "de96fc55453562729c2af6cd23f6ccc9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/0f421fbe852c054f7e7335064016db45a9fce2": "8dc92a3d0e9e1b7f262f06cc3f389523",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/7fa1b50d390931ff557a661cedd233ff2518ce": "8eac3337c0ef519852e3470fe57084b0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/1d817cbdcca906e057e729cef81d62c7b6976d": "11ae483750d70b0e33366161524f1099",
".git/objects/fb/e8b6e20069185c75935dec9a04a9ab173ea191": "1afb5394a14411ca0acf53af20a97b75",
".git/objects/20/ed88dbe24f0e6d9ef8d2f8789152afe8244342": "ffb5fe022c3e9b4b9c14afbae8384332",
".git/objects/16/931fe85961c473b8d8f2483895924395ebd291": "cf7013f01c153ce3f657600738592de9",
".git/objects/1f/aafddf735a026642e2d290e842ea1ef917cef0": "6bb2e93ac517211639498e79d9eab4b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/f223b5422de30b47ee3142ab495663642b541d": "017995e8482403d5cb15cd9a194cb82d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/8e22074ca1fa56a50ad105c639ddbf3a2ac19b": "d3ddc26eccbcb84080bdd71dca0c13cd",
".git/objects/21/48170e5b2c90b4629c5e1734f7a57a4a9803f3": "858d271f8231d0c7979b4e4ea0eb608d",
".git/objects/2a/931086e9f403b87cccc68434b633b74cb5f234": "6405b650d3afdda68f79527c003460e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/300264e67e18fcbf2c804e486c4a736ed04bc0": "e3406c87050913589ab7361b2b45d768",
".git/objects/6e/9a4ad2c618c3eb6bf39eb0de795c5deb6412da": "c76dff602763d4e2914f59d5204f0e41",
".git/objects/31/54e559541ca65854667d01a047278c63b9d2f1": "ccc5a7a5595cf1d47038ff6ec7c9ff97",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/b5c70ae528cbc33d95de0527df60062370545a": "afbf07ce5bbf09583ce4bb0be54974d9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/2287fd9f5e25884feb2364bf1b232b475c9647": "50ba7d2b8fd6c27c3a24fcab027e50db",
".git/objects/0f/f259cac8e64a56723925b2d1b4087c571b15c9": "23b52a73df9d27970024ef9e7405bfe2",
".git/objects/0a/83e6b4bf98aaf408f50acdb5b29675154446da": "a72250bb40a1d166fb24c3255bcbe5c6",
".git/objects/64/1813d94d5a94bd0ae24dc7bef260d3bfcc8fdc": "054541063e93dceca14e96c83b87112a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/8bdcc1bbd3ff7f7a31a260e84c65b096653143": "4c65d5571e3655b5217fb297796a64d6",
".git/objects/d5/4753b753a02be106070f58deeacb000d008b41": "5a1836ee51b83c96bc487b1c284d830c",
".git/objects/aa/391c7bf97915959fe557edb8c207e2672de529": "c13865f71a94ecb6802cb12446b22756",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f9/d7a96dd135c6433a3be3ff58cbeb36761f575d": "d2ab17e57ebc2d084b5488403ab2b7c5",
".git/objects/f7/ef8d22bee141326e120783583599c4ea7d612f": "201885990ace40fad55f7dc84305fc01",
".git/objects/c2/ed0e56eaee7971142902718b707e6edb00d622": "d460094da7c025d4b529916436a9b293",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/12/bb3bca30688e216578cfd18893c9a92dcb9222": "320132acc71df9cc3ce90b672ed327b5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/793973df714012b9183819cb3a12c5e0536d7e": "889b538dc0975cd22cf9aca183939fe2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e88e5c41bb61a042125aa522d98543de",
".git/logs/refs/heads/main": "a9b49f929befe00b32fa519f677355b6",
".git/logs/refs/remotes/origin/main": "108dd7c2ba0a74a98ea7d9f7fbca9575",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/main": "dbd64e63f529d08b0825db6f287ba478",
".git/refs/remotes/origin/main": "dbd64e63f529d08b0825db6f287ba478",
".git/index": "30b50bf5893b2387e15b8e2cef4dc3c2",
".git/COMMIT_EDITMSG": "2faf370726c21ce0102a26085037444b",
"assets/AssetManifest.json": "9d2d0b88424876ab7c808423f5a72a5d",
"assets/NOTICES": "14c96c8e388fe20298893727a2f5a3b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ae4bd54543a9818ba62bb0805a18a6b7",
"assets/fonts/MaterialIcons-Regular.otf": "0e69f8900edb9cf237b0ac604c1b7b02",
"assets/assets/images/table_sick_pending.png": "f062a7a964687491889601d6e609b393",
"assets/assets/images/table_vacation_approved.png": "02e5ecfe7b0e3a624fa08e543000cc50",
"assets/assets/images/table_sick_denied.png": "7e075315fb318bb007b1bd43c9f0dddf",
"assets/assets/images/table_vacation_pending.png": "84586ec17418452ff2a36bbe7abcb039",
"assets/assets/images/table_personal_denied.png": "9001be4813b6b494fa5737654514484a",
"assets/assets/images/table_personal_approved.png": "302ade23a3e36eacbc1ca2e50822955d",
"assets/assets/images/bulb.jpg": "1b3f94e0e02c876d8d1c1f9b200ecec7",
"assets/assets/images/beach.jpg": "a635aa9f401cab7ebafe5b1394748700",
"assets/assets/images/table_person.png": "19ab21e8ba542662f3afee75e8d27e41",
"assets/assets/images/table_vacation_denied.png": "ac520e38bd8b116858f60e304595cfda",
"assets/assets/images/table_sick_approved.png": "53725ba140629fe2862239c5021cfe57",
"assets/assets/images/table_personal_pending.png": "2c3246c43904f218075805c52b1f3847",
"assets/assets/images/sick.png": "43c1b3b679f31e24936a9b889e819a97",
"assets/assets/images/vacation.png": "45ecd64c3b56a4bc56d5e3f80403c5a9",
"assets/assets/images/personal.png": "097c53ef9e596b3e21e24c74270fb103",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
