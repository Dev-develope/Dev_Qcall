import Exploring from "src/components/common/Exploring";
import InquiryForms from "src/components/common/InquiryForms";

export const metadata = {
  title: "Enterprise Inquiry | QCall AI",
  description:
    "Enterprise model suits for big companies it will not work for small, medium companies nor with the startups and resellers, where we provide the custom server for the calls with very high limits of calls and customizations.",
  canonical: new URL("https://qcall.ai/enterprise-inquiry"),
  metadataBase: new URL("https://qcall.ai/enterprise-inquiry"),
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
    title: "Enterprise Inquiry | QCall AI",
    description:
      "Enterprise model suits for big companies it will not work for small, medium companies nor with the startups and resellers, where we provide the custom server for the calls with very high limits of calls and customizations.",
    url: new URL("https://qcall.ai/enterprise-inquiry"),
    siteName: "QCall AI",
    images: "https://www.qcall.ai/assets/cover.png",
    type: "website",
    locale: "en_US",
    publishedTime: "2024-10-17T00:00:00.000Z",
    authors: ["Kapil Karda"],
  },
};

export default function page() {
  const policyData = {
    para: "Inquiry",
    heading: "Send Us Inquiry Messages",
    heading2: "QCall Enterprise Solution",
  };
  return (
    <>
      <InquiryForms />
      <Exploring />
    </>
  );
}
