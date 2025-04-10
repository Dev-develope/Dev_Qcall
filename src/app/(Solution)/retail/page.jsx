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
import {retailDataA, retailDataB, retailDataC, retailDataD, retailDataE, retailDataF, retailDataG } from "src/constants/ai_contact_center";
import { reatilSafety, retailFeaturesData, retailHerocardData, retailHeroData, retailTeamsData } from "src/constants/SolutionData";
import secureImg from "../../../../public/images/qcallAi/3Solution-Retail Networks/secure.png"
import streamlin from "../../../../public/images/qcallAi/3Solution-Retail Networks/streamline.png"
import instant from "../../../../public/images/qcallAi/3Solution-Retail Networks/instant.png"
import elevate from "../../../../public/images/qcallAi/3Solution-Retail Networks/elevate.png"
import connect from "../../../../public/images/qcallAi/3Solution-Retail Networks/connect.png"
import unified from "../../../../public/images/qcallAi/3Solution-Retail Networks/unified.png"
import record from "../../../../public/images/qcallAi/3Solution-Retail Networks/record.png"

export default function page() {
    return (<>
        <Hero data={retailHeroData[0]} herocardData={retailHerocardData}>
            <SingleButton title="Get a Demo Today!!" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={retailTeamsData} />
        <CommonCard cardDatas={retailDataA} img={unified}/>
        <CommonCardB cardDatas={retailDataB} img={record}/>
        <CommonCard cardDatas={retailDataC} img={connect}/>
        <CommonCardB cardDatas={retailDataD} img={elevate}/>
        <CommonCard cardDatas={retailDataE} img={instant}/>
        <CommonCardB cardDatas={retailDataF} img={streamlin}/>
        <CommonCard cardDatas={retailDataG} img={secureImg}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" />
        </div>
        <RetailFeatures data={retailFeaturesData} />
        
        <Exploring />
    </>)
}