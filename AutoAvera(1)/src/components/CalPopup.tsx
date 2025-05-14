import { useEffect } from 'react';

export default function CalPopup() {
  useEffect(() => {
    // Create script element for Cal.com popup integration
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "discovery-call", {origin:"https://cal.com"});
      Cal.ns["discovery-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;

    // Append script to document
    document.body.appendChild(script);

    // Clean up function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
