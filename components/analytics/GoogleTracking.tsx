import { BUSINESS_INFO } from "@/lib/business-info";

export default function GoogleTracking() {
  const gtmId = BUSINESS_INFO.tracking.gtmId;
  const googleAdsId = BUSINESS_INFO.tracking.googleAdsId;
  const gaId = BUSINESS_INFO.tracking.gaId;

  return (
    <>
      {/* Google Tag Manager (GTM) Container */}
      {gtmId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* Google Ads / GA4 gtag.js */}
      {googleAdsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdsId}', {
                  page_path: window.location.pathname,
                });
                ${gaId ? `gtag('config', '${gaId}');` : ""}
              `,
            }}
          />
        </>
      )}
    </>
  );
}

/**
 * GTM Noscript fallback for the <body> tag
 */
export function GoogleTagManagerNoscript() {
  const gtmId = BUSINESS_INFO.tracking.gtmId;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
