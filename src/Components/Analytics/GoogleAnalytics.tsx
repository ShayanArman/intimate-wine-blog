import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BV8KLVYL1V" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11398102909" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11398102909');
            gtag('config', 'G-BV8KLVYL1V'); 
        `}
      </Script>
    </>
  );
}

export function registerClickSignUpEventGoogle() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'sign_up', {
      'event_category': 'User Actions',
      'value': 1
    });
  }
}
