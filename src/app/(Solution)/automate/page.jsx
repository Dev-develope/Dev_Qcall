import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import SingleButton from "src/components/common/SingleButton";
import { autoAiPowerdSalesData, automatecardDataA, automatecardDataB, automatecardDataC, automatecardDataD, automatecardDataE, automatecardDataF, automateHerocardData, AutomateHeroData, reatilSafety} from "src/constants/SolutionData";
import nevermisssales from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/nevermisssales.png"
import reachmorecutomer from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/reachmorecutomer.png"
import conversation from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/conversation.png"
import collab from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/collab.png"
import hi from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/hi.png"
import imporve from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/improve.png"
export default function page() {
    return (<>
        <Hero data={AutomateHeroData[0]} herocardData={automateHerocardData}>
            <SingleButton title="Get a Demo Today!" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={autoAiPowerdSalesData} />
        <CommonCard cardDatas={automatecardDataA} img={reachmorecutomer}/>
        <CommonCardB cardDatas={automatecardDataB} img={nevermisssales}/>
        <CommonCard cardDatas={automatecardDataC} img={conversation}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" />
        </div>
        <ConnectwithTeams data={autoAiPowerdSalesData} />
        <CommonCard cardDatas={automatecardDataD} img={hi}/>
        <CommonCardB cardDatas={automatecardDataE} img={collab}/>
        <CommonCard cardDatas={automatecardDataF} img={imporve}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" />
        </div>
        <Exploring />
    </>)
}