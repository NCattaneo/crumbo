const CACHE_NAME = "crumbo-v4";


const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./styles.css",

    "./app.js",

    "./songs.js",

    "./manifest.json"

];



self.addEventListener(
"install",
event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

    self.skipWaiting();

});



self.addEventListener(
"activate",
event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});



self.addEventListener(
"fetch",
event => {

    event.respondWith(

        fetch(event.request)

        .then(response => {

            return response;

        })

        .catch(()=>{

            return caches.match(event.request);

        })

    );

});