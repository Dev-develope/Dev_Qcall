import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import HeroCard from "src/components/common/HeroCard";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import QCallHeroSection from "src/components/common/QCallHeroSection";
import SingleButton from "src/components/common/SingleButton";
import { aiSalesCardDataA, aiSalesCardDataB, aiSalesCardDataC, aiSalesCardDataD, aiSalesCardDataE, aiSalesHeroData, herocardData, herocardDataAiSales } from "src/constants/ai-sales";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF, HumanLikeVoice, pricingPlans } from "src/constants/ai_contact_center";
import WaveImg from "../../../../public/images/2Product-ContactCentre/Wave.png"
import Automate from "../../../../public/images/Product-Sales/Automate.png"
import RealTime from "../../../../public/images/Product-Sales/RealTime.png"
import robohi from "../../../../public/images/Product-Sales/robohi.png"
import BringImg from "../../../../public/images/Product-Sales/Bring.png"
import helpImg from "../../../../public/images/Product-Sales/help.png"
import MinimizeImg from "../../../../public/images/Product-Sales/Minimize.png"
import HumanVoiceImg from "../../../../public/images/2Product-ContactCentre/Wave.png"
import HeroBanner from "src/components/common/heroBanner";

export const metadata = {
    title: "Ai Sales | QCall AI Choose What Works Best",
    description:
      "Ai Sales QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/ai-sales"),
    metadataBase: new URL("https://qcall.ai/ai-sales"),
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
      title: "Ai Sales | QCall AI Choose What Works Best",
      description:
        "Ai Sales QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/ai-sales"),
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
        <Hero data={aiSalesHeroData[0]} herocardData={herocardData} className="text-center">
            <SingleButton title="Schedule a Demo" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <AiFeatures />
        <HeroBanner waveImage={HumanVoiceImg}/>
        <CommonCard cardDatas={aiSalesCardDataA} img={Automate} />
        <CommonCardB cardDatas={aiSalesCardDataC}  img={RealTime} />
        <CommonCard cardDatas={aiSalesCardDataB} img={robohi} />
        <QCallHeroSection img={WaveImg}/>
        <CommonCardB cardDatas={aiSalesCardDataD} img={BringImg} />
        <CommonCard cardDatas={aiSalesCardDataE} img={helpImg}/>
        <CommonCardB cardDatas={cardDataF} img={MinimizeImg}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}