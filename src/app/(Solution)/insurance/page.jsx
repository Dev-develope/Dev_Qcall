import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CardItem3 from "src/components/common/CardItem3";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import QCallHeroSection from "src/components/common/QCallHeroSection";
import SecurityCompliance from "src/components/common/SecurityComplianceSection";
import SecurityComplianceSection from "src/components/common/SecurityComplianceSection";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
import { faithSafety, InsuranceHeroData, InsuranceSafety, insureanceHerocardData, pricingPlans } from "src/constants/Insurance";
import { designForInsuranceData, healthSecurityData, insuranceCardsData, reatilSafety, securityData } from "src/constants/SolutionData";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
// }
export default function page() {
    return (<>
        <Hero data={InsuranceHeroData[0]} herocardData={insureanceHerocardData} className="text-center">
            <SingleButton title="Get a Demo" className="bg-[#00a7e6]" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <SecurityCompliance securityData={insuranceCardsData}/>
        <RealEstateCommunciation data={designForInsuranceData[0]} />   {/* make a seprate compoent for RealEstateCommunciation */}
        <Exploring />
    </>)
}