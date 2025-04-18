import Exploring from "src/components/common/Exploring";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
import TermsAndConditions from "src/components/common/TermsAndConditions";

export const metadata = {
  title: "Privacy Policy | QCall AI Privacy Policy",
  description:
    "Discover how QCall AI safeguards your personal information with our comprehensive privacy policy. Your privacy is our top priority, ensuring peace of mind for all users.",
  canonical: new URL("https://qcall.ai/privacy-policy"),
  metadataBase: new URL("https://qcall.ai/privacy-policy"),
  keywords: [
    "QCall AI",
    "AI Outbound Calls",
    "AI Inbound Calls",
    "AI Calls",
    "Sales Outreach",
    "Email Marketing",
    "Sales Growth",
    "Email Growth",
    "Email Alternatives",
    "AI Call Center",
    "Call Center Automation",
    "Sales Automation",
    "Email Automation",
    "Lead Generation",
    "Email Automation",
    "Email Automation",
    "Email Automation",
    "Email Automation",
    "Email Automation",
    "Email Automation",
  ],
  authors: [{ name: "QCall AI" }],
  creator: "Kapil Karda",
  publisher: "Kapil Karda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Privacy Policy | QCall AI Privacy Policy",
    description:
      "Discover how QCall AI safeguards your personal information with our comprehensive privacy policy. Your privacy is our top priority, ensuring peace of mind for all users.",
    url: new URL("https://qcall.ai/privacy-policy"),
    siteName: "QCall AI",
    images: "https://www.qcall.ai/assets/cover.png/assets/cover.png",
    type: "website",
    locale: "en_US",
    publishedTime: "2024-10-17T00:00:00.000Z",
    authors: ["Kapil Karda"],
  },
};

export default function page() {
  const policyData = {
    para: "Let's review the terms you'll agree to.",
    heading: "Privacy Policy",
  };
  return (
    <>
      <HeroBackgroundImage data={policyData} />
      <TermsAndConditions />
      <Exploring />
    </>
  );
}
