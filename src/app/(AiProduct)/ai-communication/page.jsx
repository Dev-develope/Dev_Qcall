import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import SingleButton from "src/components/common/SingleButton";
import { aiCommunicateCardDataA, aiCommunicateCardDataB, aiCommunicateCardDataC, aiComunicationHeroData, herocardDataAiCommunication } from "src/constants/ai_communication";
import { pricingPlans } from "src/constants/ai_contact_center";
import inovateimg from "../../../../public/images/Blogs/inovate.png"
import aiCommunicate from "../../../../public/images/Blogs/aiCommunicate.png"
import mobile from "../../../../public/images/Blogs/mobile.png"
import PricingImg from "../../../../public/videos/QCallAiAnimate.gif"
import HumanVoiceImg from "../../../../public/images/2Product-ContactCentre/Wave.png"
import HeroBanner from "src/components/common/heroBanner";

export const metadata = {
    title: "Ai Communications | QCall AI Choose What Works Best",
    description:
      "Ai Communications QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/business-communications"),
    metadataBase: new URL("https://qcall.ai/business-communications"),
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
      title: "Ai Communications | QCall AI Choose What Works Best",
      description:
        "Ai Communications QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/business-communications"),
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
        <Hero data={aiComunicationHeroData[0]} herocardData={herocardDataAiCommunication} className="text-center">
            <SingleButton title="Schedule a Demo" route="https://cal.com/team/tinycheque/qcall"/>
        </Hero>
        <LogoSlider />
        <HeroBanner waveImage={HumanVoiceImg}/>
        <CommonCard cardDatas={aiCommunicateCardDataA} img={inovateimg}/>
        <CommonCardB cardDatas={aiCommunicateCardDataB} img={mobile}/>
        <CommonCard cardDatas={aiCommunicateCardDataC} img={aiCommunicate}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <Pricing pricingPlans={pricingPlans}  img={PricingImg}/>
        <Exploring />
    </>)
}