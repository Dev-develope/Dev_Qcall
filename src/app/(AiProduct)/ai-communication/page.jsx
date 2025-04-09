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
import { aiSalesHeroData, herocardData } from "src/constants/ai-sales";
import { aiCommunicateCardDataA, aiCommunicateCardDataB, aiCommunicateCardDataC, aiComunicationHeroData, herocardDataAiCommunication } from "src/constants/ai_communication";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF, HumanLikeVoice, pricingPlans } from "src/constants/ai_contact_center";
import WaveImg from "../../../../public/images/2Product-ContactCentre/Wave.png"
import inovateimg from "../../../../public/images/Blogs/inovate.png"
import aiCommunicate from "../../../../public/images/Blogs/aiCommunicate.png"
import mobile from "../../../../public/images/Blogs/mobile.png"
import PricingImg from "../../../../public/videos/QCallAiAnimate.gif"
import HumanVoiceImg from "../../../../public/images/2Product-ContactCentre/Wave.png"
import HeroBanner from "src/components/common/heroBanner";
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