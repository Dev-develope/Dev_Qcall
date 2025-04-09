import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RetailFeatures from "src/components/common/RetailFeatures";
import SingleButton from "src/components/common/SingleButton";
import {technocardDataA, technocardDataB, technocardDataC, technocardDataD } from "src/constants/ai_contact_center";
import { reatilSafety,technologyHerocardData, TechnoTeamsData, TechonologyHeroData, techSaasData } from "src/constants/SolutionData";
import security from "../../../../public/images/qcallAi/3Solution-Technology/security.png"
import reliblegloble from "../../../../public/images/qcallAi/3Solution-Technology/reliblegloble.png"
import helloRobo from "../../../../public/images/qcallAi/3Solution-Technology/helloRobo.png"
// import smartcollabrate from "../../../../public/images/qcallAi/3Solution-Technology/smartcollabrate.png"
export default function page() {
    return (<>
        <Hero data={TechonologyHeroData[0]} herocardData={technologyHerocardData}>
            <SingleButton title="Get a Demo Today!" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={TechnoTeamsData} />
        <CommonCard cardDatas={technocardDataA} img={reliblegloble}/>
        <CommonCardB cardDatas={technocardDataB} img={helloRobo}/>
        <CommonCard cardDatas={technocardDataC} img={reliblegloble}/>
        <CommonCardB cardDatas={technocardDataD} img={security}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" />
        </div>
        <RetailFeatures data={techSaasData} />
        
        <Exploring />
    </>)
}