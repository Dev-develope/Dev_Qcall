"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "src/components/common/Footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {

  const path = usePathname();
  const router = useRouter();
  const { i18n } = useTranslation();
  useEffect(() => {
    const { locale } = router;
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [router.locale]);

  useEffect(() => {
    // Google Analytics
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XHVWSPLNHC"; // Replace with your GA ID
    gtagScript.async = true;
    document.body.appendChild(gtagScript);

    const gtagInitScript = document.createElement("script");
    gtagInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XHVWSPLNHC');
    `;
    document.body.appendChild(gtagInitScript);

    // Microsoft Clarity
    const clarityScript = document.createElement("script");
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){
              (c[a].q=c[a].q||[]).push(arguments)},
              c[a].l=1*new Date();
              t=l.createElement(r),
              y=l.getElementsByTagName(r)[0],
              t.async=1,
              t.src="https://www.clarity.ms/tag/pumzw5jv46"; // Replace with your Clarity ID
              y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script");
    `;
    document.body.appendChild(clarityScript);

    // Tawk.to
    // const tawkScript = document.createElement("script");
    // tawkScript.src = "https://embed.tawk.to/6625f716a0c6737bd12ed8aa/1hs24qcfb"; // Replace with your Tawk.to ID
    // tawkScript.async = true;
    // tawkScript.setAttribute("crossorigin", "*");
    // document.body.appendChild(tawkScript);

    // LinkedIn tracking script
    // window._linkedin_partner_id = "7745065";
    // window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    // window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

    // (function (l) {
    //   if (!l) {
    //     window.lintrk = function (a, b) {
    //       window.lintrk.q.push([a, b]);
    //     };
    //     window.lintrk.q = [];
    //   }
    //   var s = document.getElementsByTagName("script")[0];
    //   var b = document.createElement("script");
    //   b.type = "text/javascript";
    //   b.async = true;
    //   b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    //   s.parentNode.insertBefore(b, s);
    // })(window.lintrk);

    // Meta Pixel Code
    // !(function (f, b, e, v, n, t, s) {
    //   if (f.fbq) return;
    //   n = f.fbq = function () {
    //     n.callMethod
    //       ? n.callMethod.apply(n, arguments)
    //       : n.queue.push(arguments);
    //   };
    //   if (!f._fbq) f._fbq = n;
    //   n.push = n.loaded = !0;
    //   n.version = "2.0";
    //   n.queue = [];
    //   t = b.createElement(e);
    //   t.async = !0;
    //   t.src = v;
    //   s = b.getElementsByTagName(e)[0];
    //   s.parentNode.insertBefore(t, s);
    // })(
    //   window,
    //   document,
    //   "script",
    //   "https://connect.facebook.net/en_US/fbevents.js"
    // );
    // fbq("init", "1937066693401619");
    // fbq("track", "PageView");

    // Clean up on component unmount
    return () => {
      document.body.removeChild(gtagScript);
      document.body.removeChild(gtagInitScript);
      document.body.removeChild(clarityScript);
      // document.body.removeChild(tawkScript);
    };
  }, []);
  return (
    <html lang="en">
       <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Register - Login",
                item: "https://app.qcall.ai/auth/sign-in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Enterprise Solution",
                item: "https://qcall.ai/enterprise",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Partner With Us",
                item: "https://qcall.ai/partner",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Pricing",
                item: "https://qcall.ai/pricing",
              },
            ],
          })}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1937066693401619&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7745065&fmt=gif"
          />
        </noscript>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* <Navbar /> */}
        {children}
        <Footer />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName="cookieConsent"
            style={{
              background: "#2B373B",
              width: "90%",
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "20px",
              left: "auto",
            }}
            buttonStyle={{
              background: "#00a7e6",
              borderRadius: 10,
              paddingLeft: "20px",
              paddingRight: "20px",
              color: "#fff",
              fontSize: "18px",
            }}
            declineButtonStyle={{
              color: "#4e503b",
              borderRadius: 10,
              paddingLeft: "20px",
              paddingRight: "20px",
              color: "#fff",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            expires={300}
            enableDeclineButton
          >
            <p className="text-white">
              We use 🍪 cookies to improve your experience. By continuing, you
              agree to our{" "}
              <a style={{ color: "#00a7e6" }} href="/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
          </CookieConsent>
        </div>
      </body>
    </html>
  );
}
