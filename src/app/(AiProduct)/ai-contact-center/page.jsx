import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import SingleButton from "src/components/common/SingleButton";
import { pricingPlans } from "src/constants/ai_contact_center";
import { herocardData } from "src/constants/ai_contact_center";
import { AiContactHeroData, cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
import HumanVoiceImg from "../../../../public/images/2Product-ContactCentre/Wave.png"
import ChatAi from "../../../../public/images/2Product-ContactCentre/ChatAi.png"
import ChatHi from "../../../../public/images/2Product-ContactCentre/chathi.png"
import Frame2 from "../../../../public/images/2Product-ContactCentre/Frame2.png"
import Quality from "../../../../public/images/2Product-ContactCentre/Quality.png"
import CutomerSentiment from "../../../../public/images/2Product-ContactCentre/CutomerSentiment.png"
import Frame3 from "../../../../public/images/2Product-ContactCentre/Frame3.png"
import HeroBanner from "src/components/common/heroBanner";

export const metadata = {
    title: "Ai Contact Center | QCall AI Choose What Works Best",
    description:
      "Ai Contact Center QCall  AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/ai-contact-center"),
    metadataBase: new URL("https://qcall.ai/ai-contact-center"),
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
      title: "Ai Contact Center | QCall AI Choose What Works Best",
      description:
        "Ai Contact Center QCall  AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/ai-contact-center"),
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
        <Hero data={AiContactHeroData[0]} herocardData={herocardData} className="text-center">
            <SingleButton title="Schedule a Demo" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <AiFeatures />
        {/* <Pricing pricingPlans={HumanLikeVoice} img={HumanVoiceImg} /> */}
        <HeroBanner waveImage={HumanVoiceImg}/>
        <CommonCard cardDatas={cardDataA} img={ChatAi} />
        <CommonCardB cardDatas={cardDataB} img={ChatHi} />
        <CommonCard cardDatas={cardDataC} img={Frame2} />
        <CommonCardB cardDatas={cardDataD} img={Quality} />
        <CommonCard cardDatas={cardDataE} img={CutomerSentiment} />
        <CommonCardB cardDatas={cardDataF} img={Frame3} />
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://cal.com/team/tinycheque/qcall"}/>
        </div>
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}