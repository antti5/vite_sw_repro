import { precacheAndRoute } from 'workbox-precaching';

import preval from 'preval.macro';
const buildTime = preval`module.exports = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC', timeZoneName: 'short', hour12: false }).format(new Date())`;
console.info('Service worker build time:', buildTime);

precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();