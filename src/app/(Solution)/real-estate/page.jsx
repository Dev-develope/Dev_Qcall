import Exploring from "src/components/common/Exploring";
import FutureCard from "src/components/common/FutureCard";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import SingleButton from "src/components/common/SingleButton";
import {clientEngagementData, realEstateHerocardData, realEstateHeroData, realStateClientData, reatilSafety} from "src/constants/SolutionData";


export const metadata = {
    title: "Real Estate | QCall AI Choose What Works Best",
    description:
      "Real Estate QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/realEstate"),
    metadataBase: new URL("https://qcall.ai/realEstate"),
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
      title: "Real Estate | QCall AI Choose What Works Best",
      description:
        "Real Estate QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/realEstate"),
      siteName: "QCall AI",
      images: "https://www.qcall.ai/assets/cover.png/assets/cover.png",
      type: "website",
      locale: "en_US",
      publishedTime: "2024-10-17T00:00:00.000Z",
      authors: ["Kapil Karda"],
    },
  };


export default function page() {
    return (<>
        <Hero data={realEstateHeroData[0]} herocardData={realEstateHerocardData} className="text-center">
            <SingleButton title="Get a Demo Today!" className="bg-[#00a7e6]" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <FutureCard data={clientEngagementData[0]} />
        <RealEstateCommunciation data={realStateClientData[0]}/>
        <Exploring />
    </>)
}