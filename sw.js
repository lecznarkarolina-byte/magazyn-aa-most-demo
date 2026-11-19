'use strict';
// Nie przechowuj danych magazynu ani odpowiedzi Supabase w pamięci podręcznej.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 if(event.request.mode!=='navigate'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(fetch(event.request).catch(()=>new Response(
  '<!doctype html><html lang="pl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#153e32"><title>MOST — brak połączenia</title><style>body{margin:0;padding:32px 22px;background:#153e32;color:#fff8e4;font:18px/1.6 system-ui,sans-serif}main{max-width:500px;margin:12vh auto}a{display:inline-block;margin-top:18px;padding:12px 20px;background:#fff8e4;color:#153e32;border-radius:12px;text-decoration:none;font-weight:700}</style><main><h1>MOST</h1><h2>Brak połączenia z internetem</h2><p>Połącz się z internetem, aby otworzyć demonstrację. Twoje przykładowe zmiany pozostają zapisane w tej przeglądarce.</p><a href="/">Spróbuj ponownie</a></main></html>',
  {status:503,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}}
 )));
});

