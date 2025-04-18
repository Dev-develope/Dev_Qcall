import CommonButton from "src/components/common/Button";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import {
  enterpriseHeroData,
  enterPriseTeamsData,
  legalHerocardData,
} from "src/constants/SolutionData";
import waveImg from "../../../public/images/2Product-ContactCentre/Wave.png";
import ContactCenterEcosystem from "src/components/common/ContactCenterEcosystem";
import HeroBanner from "src/components/common/heroBanner";
import DoubleButton from "src/components/common/DoubleButton";
import EnterPriseAudioDetailsCard from "src/components/common/EnterPriseAudioDetailsCard";

export const metadata = {
  title: "Enterprise Solutions | QCall AI Boost Your Business",
  description:
    "Discover QCall AI's enterprise solutions designed to optimize business operations through AI-driven automation. Boost efficiency and productivity effortlessly.",
  canonical: new URL("https://qcall.ai/enterprise"),
  metadataBase: new URL("https://qcall.ai/enterprise"),
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
    title: "Enterprise Solutions | QCall AI Boost Your Business",
    description:
      "Discover QCall AI's enterprise solutions designed to optimize business operations through AI-driven automation. Boost efficiency and productivity effortlessly.",
    url: new URL("https://qcall.ai/enterprise"),
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
      <Hero data={enterpriseHeroData[0]} herocardData={legalHerocardData}>
        <DoubleButton
          title1="Try It Now For Free"
          title2="Book a Demo"
          route={"https://cal.com/team/tinycheque/qcall"}
          route2={"https://app.qcall.ai/auth/sign-up"}
        />
      </Hero>
      <ContactCenterEcosystem />
      <ConnectwithTeams data={enterPriseTeamsData} />
      <EnterPriseAudioDetailsCard />
      <div className="flex justify-center items-center mt-1 mb-10">
        <CommonButton
          className="bg-[#00a7e6] font-light text-white"
          title="try it now for free!!!"
          route={"https://app.qcall.ai/auth/sign-up"}
        />
      </div>
      <HeroBanner waveImage={waveImg} />
      <Exploring />
    </>
  );
}
