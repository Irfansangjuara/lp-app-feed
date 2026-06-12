"use client";

import { useEffect, useRef } from "react";

// ─── Script Injection Helpers ─────────────────────────────────────────────────

function injectMetaPixelId(pixelId: string) {
  const scriptId = `meta-pixel-${pixelId}`;
  if (document.getElementById(scriptId)) return;

  if (!window.fbq) {
    const initScript = document.createElement("script");
    initScript.id = "meta-pixel-base";
    initScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    `;
    document.head.appendChild(initScript);
  }

  const initScript = document.createElement("script");
  initScript.id = scriptId;
  initScript.innerHTML = `fbq('init', '${pixelId}');`;
  document.head.appendChild(initScript);

  window.fbq?.("trackSingle", pixelId, "PageView");

  if (!window._metaPixelIds) window._metaPixelIds = [];
  if (!window._metaPixelIds.includes(pixelId)) window._metaPixelIds.push(pixelId);
}

function injectTikTokPixelId(pixelId: string) {
  const scriptId = `tiktok-pixel-${pixelId}`;
  if (document.getElementById(scriptId)) return;

  const script = document.createElement("script");
  script.id = scriptId;
  script.innerHTML = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
      ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
      ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
      for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
      ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
      ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
      ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
      n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;
      e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
      ttq.load('${pixelId}');
      ttq.page();
    }(window, document, 'ttq');
  `;
  document.head.appendChild(script);

  if (!window._tiktokPixelIds) window._tiktokPixelIds = [];
  if (!window._tiktokPixelIds.includes(pixelId)) window._tiktokPixelIds.push(pixelId);
}

function injectGTMId(containerId: string) {
  const scriptId = `gtm-${containerId}`;
  if (document.getElementById(scriptId)) return;

  const headScript = document.createElement("script");
  headScript.id = scriptId;
  headScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');
  `;
  document.head.appendChild(headScript);

  if (!window._gtmContainerIds) window._gtmContainerIds = [];
  if (!window._gtmContainerIds.includes(containerId)) window._gtmContainerIds.push(containerId);
}

function injectGA4Id(measurementId: string) {
  const scriptId = `ga4-${measurementId}`;
  if (document.getElementById(scriptId)) return;

  if (!document.getElementById("ga4-loader")) {
    const loader = document.createElement("script");
    loader.id = "ga4-loader";
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(loader);

    const initBase = document.createElement("script");
    initBase.id = "ga4-base";
    initBase.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `;
    document.head.appendChild(initBase);
  }

  const configScript = document.createElement("script");
  configScript.id = scriptId;
  configScript.innerHTML = `gtag('config', '${measurementId}', { send_page_view: true });`;
  document.head.appendChild(configScript);

  if (!window._ga4MeasurementIds) window._ga4MeasurementIds = [];
  if (!window._ga4MeasurementIds.includes(measurementId)) window._ga4MeasurementIds.push(measurementId);
}

export function TrackingInjector() {
  const injectedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    fetch("https://copilotmarketing.id/api/trpc/admin.getPublicTrackingConfig")
      .then(res => res.json())
      .then(json => {
        const cfg = json?.result?.data?.json;
        if (!cfg) return;

        if (cfg.meta?.pixelIds?.length) {
          cfg.meta.pixelIds.forEach((id: string) => {
            if (id && !injectedRef.current.has(`meta:${id}`)) {
              injectMetaPixelId(id);
              injectedRef.current.add(`meta:${id}`);
            }
          });
        }

        if (cfg.tiktok?.pixelIds?.length) {
          cfg.tiktok.pixelIds.forEach((id: string) => {
            if (id && !injectedRef.current.has(`tiktok:${id}`)) {
              injectTikTokPixelId(id);
              injectedRef.current.add(`tiktok:${id}`);
            }
          });
        }

        if (cfg.gtm?.pixelIds?.length) {
          cfg.gtm.pixelIds.forEach((id: string) => {
            if (id && !injectedRef.current.has(`gtm:${id}`)) {
              injectGTMId(id);
              injectedRef.current.add(`gtm:${id}`);
            }
          });
        }

        if (cfg.ga?.pixelIds?.length) {
          cfg.ga.pixelIds.forEach((id: string) => {
            if (id && !injectedRef.current.has(`ga:${id}`)) {
              injectGA4Id(id);
              injectedRef.current.add(`ga:${id}`);
            }
          });
        }
      })
      .catch(err => console.error("Failed to load tracking config", err));
  }, []);

  return null;
}
