import DoubleButton from "src/components/common/DoubleButton";
import EducationCommunication from "src/components/common/EducationCommunication";
import Exploring from "src/components/common/Exploring";
import FutureCard from "src/components/common/FutureCard";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import {educationHerocardData, educationHeroData, reatilSafety, stuProInstrucCommuData } from "src/constants/SolutionData";

export const metadata = {
    title: "Education | QCall AI Choose What Works Best",
    description:
      "Education QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/education"),
    metadataBase: new URL("https://qcall.ai/education"),
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
      title: "Education | QCall AI Choose What Works Best",
      description:
        "Education QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/education"),
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
        <Hero data={educationHeroData[0]} herocardData={educationHerocardData} className="text-center">
            <DoubleButton title1="Get a Demo & Experience It Yourself!" title2="Book a Demo" route={"https://cal.com/team/tinycheque/qcall"} route2={"https://app.qcall.ai/auth/sign-up"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <FutureCard data={stuProInstrucCommuData[0]} />
        {/* <RealEstateCommunciation data={eduVertualCommData[0]} />
        <RealEstateCommunciation data={eduVertualCommData2[0]} /> */}
        <EducationCommunication/>
        {/* <FutureCard data={smartFeatureData[0]} /> */}
        <Exploring />
    </>)
}