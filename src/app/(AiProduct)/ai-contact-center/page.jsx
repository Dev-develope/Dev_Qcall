import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import SingleButton from "src/components/common/SingleButton";
import { pricingPlans, HumanLikeVoice } from "src/constants/ai_contact_center";
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
// }
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