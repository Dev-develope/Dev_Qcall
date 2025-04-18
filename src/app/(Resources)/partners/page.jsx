import Exploring from "src/components/common/Exploring";
import Faq from "src/components/common/Faq";
import FutureInnovationPage from "src/components/common/FutureInnovationPage";
import Hero from "src/components/common/Hero";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import SecurityCompliance from "src/components/common/SecurityComplianceSection";
import SingleButton from "src/components/common/SingleButton";
import {
  designForPartnerData,
  MainFeaturePartnerData,
  partnerHerocardData,
  PartnerHeroData1
} from "src/constants/SolutionData";

export const metadata = {
  title: "Partner | QCall AI Grow Your Business Together",
  description:
    "Discover partnership opportunities with QCall AI. Join our partner program for mutual business growth and success.",
  canonical: new URL("https://qcall.ai/partner"),
  metadataBase: new URL("https://qcall.ai/partner"),
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
    title: "Partner | QCall AI Grow Your Business Together",
    description:
      "Discover partnership opportunities with QCall AI. Join our partner program for mutual business growth and success.",
    url: new URL("https://qcall.ai/partner"),
    siteName: "QCall AI",
    images: "https://www.qcall.ai/assets/cover.png/assets/cover.png",
    type: "website",
    locale: "en_US",
    publishedTime: "2024-10-17T00:00:00.000Z",
    authors: ["Kapil Karda"],
  },
};

export default function page() {
  return (
    <>
      <Hero
        data={PartnerHeroData1[0]}
        herocardData={partnerHerocardData}
        className="text-start"
      >
        <SingleButton
          title="Become a Partner"
          route={"https://cal.com/team/tinycheque/qcall"}
        />
      </Hero>
      <SecurityCompliance securityData={MainFeaturePartnerData} />
      <FutureInnovationPage />
      <RealEstateCommunciation data={designForPartnerData[0]} />
      <Faq />
      <Exploring />
    </>
  );
}
