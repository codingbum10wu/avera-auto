import { useEffect } from 'react';

export default function CalendarEmbed() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "discovery-call-about-the-ai-agent", {origin:"https://cal.com"});
      
      Cal.ns["discovery-call-about-the-ai-agent"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "neurova-yd4azf/discovery-call-about-the-ai-agent",
      });
      
      Cal.ns["discovery-call-about-the-ai-agent"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;

    // Append script to document
    document.body.appendChild(script);

    // Clean up
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="calendar-container">
      <h3 className="text-2xl font-bold mb-6 text-center">Book Your Free Discovery Call</h3>
      <div 
        id="my-cal-inline" 
        style={{width: '100%', height: '500px', overflow: 'scroll', margin: '0 auto', maxWidth: '800px'}}
      />
      <p className="text-xs text-slate-500 text-center mt-4">
        By booking a call, you agree to our privacy policy and terms of service.
      </p>
    </div>
  );
}
