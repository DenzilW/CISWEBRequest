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

var precacheConfig = [["app/src/app.html","e171b89256884dc1b590f780caa4522a"],["app/src/app.js","12936e93e6957aee17f961f34ab0f3d5"],["app/src/app.js.map","6bee3800b38da2e03d8e07f7900e0651"],["app/src/main.js","11c8b7a37f07aa550699afdf3ea419cf"],["app/src/main.js.map","a7753cfd1a6af57f7b58e92991bdc360"],["app/src/models/chart.js","bacc5f73b89af7c17ae5af69062aebcd"],["app/src/models/chart.js.map","3fb1892fb3468fdc843c3f225c1ee9d4"],["app/src/models/cis-parameters.js","1ab2b18b8c0c9126fae0b47ba59543b8"],["app/src/models/cis-parameters.js.map","0e5cfd137f71b5386db38d78122c8567"],["app/src/models/cis-project.js","8662031ea98d17cebc175fa57d357425"],["app/src/models/cis-project.js.map","b1ebfc2a2e65649636c19713e38384ab"],["app/src/models/cis-report-data.js","317986d70a33d9ca9299da2c12187833"],["app/src/models/cis-report-data.js.map","f60aca6932f1d81bbe601aeb9e274b11"],["app/src/models/cis-report.js","d278a4b1e50ba1eeac95d21b0991c2f3"],["app/src/models/cis-report.js.map","e6f9d39fb01c8aee48bb342b00143ca8"],["app/src/models/collection-base.js","ab56df8163e6f26531211197c0058cde"],["app/src/models/collection-base.js.map","bb85f1700b5cd3115e236ec3735a873a"],["app/src/models/email.js","901cabdba1ae540a7d1ea8ec40158f55"],["app/src/models/email.js.map","cf8fdcb5c0c09d36c131b01ef943eac0"],["app/src/models/report-base.js","891d0ca10bf1d0db10dee36dba769bb3"],["app/src/models/report-base.js.map","3d35fffae14e7e4d72d812644a2d2f40"],["app/src/models/report.js","cb5ba93d286f917f952f3337db969837"],["app/src/models/report.js.map","2b0597d1734ca2ba16bfcc90230850ec"],["app/src/models/templates.js","f700e7c745c5bee2f0b2c1f7b1420431"],["app/src/models/templates.js.map","3adb95b459a92a3b7e0bd42d45a532aa"],["app/src/vendor-build.js","d7e842ff3b6630d72a666bf33ca64b8d"],["app/src/views/welcome/tab-charts.css","a2903464fcc2a2a33d77032ebe743614"],["app/src/views/welcome/tab-charts.css.map","56b323dc0a36d5ff7a7ccb8dbb1dc407"],["app/src/views/welcome/tab-charts.html","69e275ec15e0824c03666686887809ce"],["app/src/views/welcome/tab-data.css","78e18623cf4c037cc9fd2446b8feda61"],["app/src/views/welcome/tab-data.css.map","3bce9ff82e004120120ec13e379cc2cd"],["app/src/views/welcome/tab-data.html","c59debf2e465b53e03c75050bd57ef86"],["app/src/views/welcome/tab-parameters.css","4ffa80dc67c5e6c933ad45e90eae56cd"],["app/src/views/welcome/tab-parameters.css.map","a6afdfa94a2ede78403bc3707da7e094"],["app/src/views/welcome/tab-parameters.html","b58f84c64eafad3063a33939fffa9b3a"],["app/src/views/welcome/tab-preview.html","ca635b3988a3caa05e701473014244df"],["app/src/views/welcome/tab-project.html","7cca73d98bf3deb9f4b73cc19cc169b0"],["app/src/views/welcome/welcome.html","4733aad84fd191faa610af8bc4250677"],["app/src/views/welcome/welcome.js","bd7de54901c4b5c6f96595279c8851fa"],["app/src/views/welcome/welcome.js.map","76eee60e6554fd20ac30b6fef17f6caf"],["config.js","435a6914859fd1e7848aad953e6f79a4"],["images/app.svg","c91b40bf4094f2a92c683600b49d58fc"],["index.html","97e8e2b45403374fd95df4db87f88f70"],["jspm_packages/system.js","ccb57ddb81fcb668634811146ec94748"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/layout.css","651794f95a1b0041becac7a71933a588"],["styles/normalize.css","58d3fec65d490967a42254fbfc55ef8b"],["styles/style.css","987c6886ddc3bec8fb465521f3344562"]];
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







