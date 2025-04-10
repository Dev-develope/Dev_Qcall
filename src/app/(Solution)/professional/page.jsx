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
import {leaglProfessionalDataA, leaglProfessionalDataB, leaglProfessionalDataC, ProfessionalDataA, ProfessionalDataB, ProfessionalDataC, ProfessionalDataD} from "src/constants/ai_contact_center";
import { leaglProfeData, legalFeaturesData, legalHerocardData, legalHeroData, ProfessinalData, professionalFeaturesData, professionalHeroData, reatilSafety } from "src/constants/SolutionData";
import securityImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/security.png"
import boostproductImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/boostproduct.png"
import trackclientImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/trackclient.png"

import ProfesImgA from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgA.png"
import ProfesImgB from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgB.png"
import ProfesImgC from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgC.png"
import ProfesImgD from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgD.png"


export default function page() {
    return (<>
        <Hero data={professionalHeroData[0]} herocardData={legalHerocardData}>
            <SingleButton title="Get a Demo Today!" route='https://cal.com/team/tinycheque/qcall'/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={ProfessinalData} />
        <CommonCard cardDatas={ProfessionalDataA} img={ProfesImgA}/>
        <CommonCardB cardDatas={ProfessionalDataB} img={ProfesImgB}/>
        <CommonCard cardDatas={ProfessionalDataC} img={ProfesImgD}/>
        <CommonCardB cardDatas={ProfessionalDataD} img={ProfesImgC}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" />
        </div>
        <RetailFeatures data={professionalFeaturesData} />
        <Exploring />
    </>)
}