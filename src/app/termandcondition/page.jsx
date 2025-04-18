import Exploring from "src/components/common/Exploring";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
import PrivacyPolicy from "src/components/common/privacypolicy";
import TermsAndConditions from "src/components/common/TermsAndConditions";

export const metadata = {
    title: "Policies | QCall AI Terms & Conditions",
    description: "QCall AI's terms and conditions to understand our policies regarding the use of our services.",
    canonical: new URL("https://qcall.ai/terms-conditions"),
    metadataBase: new URL("https://qcall.ai/terms-conditions"),
    keywords: ["QCall AI", "AI Outbound Calls", "AI Inbound Calls", "AI Calls", "Sales Outreach", "Email Marketing", "Sales Growth", "Email Growth", "Email Alternatives", "AI Call Center", "Call Center Automation", "Sales Automation", "Email Automation", "Lead Generation", "Email Automation", "Email Automation", "Email Automation", "Email Automation", "Email Automation", "Email Automation"],
    authors: [{ name: "QCall AI" }],
    creator: "Kapil Karda",
    publisher: "Kapil Karda",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Policies | QCall AI Terms & Conditions",
      description: "QCall AI's terms and conditions to understand our policies regarding the use of our services.",
      url: new URL("https://qcall.ai/terms-conditions"),
      siteName: "QCall AI",
      images: "https://www.qcall.ai/assets/cover.png/assets/cover.png",
      type: "website",
      locale: "en_US",
      publishedTime: '2024-10-17T00:00:00.000Z',
      authors: ['Kapil Karda'],
    },
  };

export default function page() {
    const policyData = { para: "Let's review the terms you'll agree to.", heading: "Terms & Conditions" }
    return (<>
        <HeroBackgroundImage data={policyData} />
        <PrivacyPolicy />
        <Exploring />
    </>)
}