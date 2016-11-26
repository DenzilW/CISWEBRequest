/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app/src/app.html","e171b89256884dc1b590f780caa4522a"],["app/src/app.js","12936e93e6957aee17f961f34ab0f3d5"],["app/src/app.js.map","26320bcb4be9775d12ec8452cc065247"],["app/src/main.js","11c8b7a37f07aa550699afdf3ea419cf"],["app/src/main.js.map","8d492d77ada3f2b92f6e82b7bd850ca7"],["app/src/models/chart.js","a180b23777c853785f049ed0b934affe"],["app/src/models/chart.js.map","12d0a1f1885993748b17ad4de55686e7"],["app/src/models/cis-parameters.js","e837bee7bb22177141df7046d1e925b5"],["app/src/models/cis-parameters.js.map","1f355357754f12a657bd75557e77862f"],["app/src/models/cis-project.js","38fdfc09c5f3714df0b16629c676966c"],["app/src/models/cis-project.js.map","326aba21948d1d3e96edddb1ed16ec58"],["app/src/models/cis-report.js","074ec4eaa4ba5a871569484966f6fac6"],["app/src/models/cis-report.js.map","6bbd7a82c43d1a47985906ceafaff36b"],["app/src/models/report-base.js","891d0ca10bf1d0db10dee36dba769bb3"],["app/src/models/report-base.js.map","1f7e4378e579b193587a4dc66f446470"],["app/src/models/report-data.js","43619c10c3fe994da23ff1b696035894"],["app/src/models/report-data.js.map","d6a86baff2b13a9fcb35b34ebdd2283a"],["app/src/models/report.js","6c5d546a6191a478cabc94d6f000b900"],["app/src/models/report.js.map","89b7b1e3272956384a72be0a68a0b47d"],["app/src/models/templates.js","3caa0ad8109ac48df629d479f4a6ac12"],["app/src/models/templates.js.map","72d7e0e1265e5fcb01a5dc26fabdb872"],["app/src/vendor-build.js","d7e842ff3b6630d72a666bf33ca64b8d"],["app/src/views/welcome/tab-charts.html","3c465a3eee1f3272316036179bf7fb39"],["app/src/views/welcome/tab-data.html","cb9dcc6ed2ef1962a46921dc0b0e2a50"],["app/src/views/welcome/tab-parameters.css","2f319b4cddcd67609fd0d24089f3bd92"],["app/src/views/welcome/tab-parameters.css.map","944d03511b8772a1c65d876fd8186758"],["app/src/views/welcome/tab-parameters.html","a88636682609852541ed4bd6ba3f7b7f"],["app/src/views/welcome/tab-project.html","7cca73d98bf3deb9f4b73cc19cc169b0"],["app/src/views/welcome/welcome.html","8f0649aa9c54a16c17345b217ccfddd0"],["app/src/views/welcome/welcome.js","c97117622868351cd127028d13a38638"],["app/src/views/welcome/welcome.js.map","1d97d042266bbabead8ab918fca1c444"],["config.js","d48293d7f399d567d67721e074b38c20"],["images/app.svg","c91b40bf4094f2a92c683600b49d58fc"],["index.html","3df5aaeb208265d3a2c41b1d93782e08"],["jspm_packages/system.js","79eee2df13bb5a04060affd2fb3afd93"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/layout.css","651794f95a1b0041becac7a71933a588"],["styles/normalize.css","58d3fec65d490967a42254fbfc55ef8b"],["styles/style.css","a7c4090c657790884708c9d1775e7270"]];
var cacheName = 'sw-precache-v2-untitled-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







