import DoubleButton from "src/components/common/DoubleButton";
import EducationCommunication from "src/components/common/EducationCommunication";
import Exploring from "src/components/common/Exploring";
import Faq from "src/components/common/Faq";
import FutureCard from "src/components/common/FutureCard";
import FutureInnovationPage from "src/components/common/FutureInnovationPage";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import SecurityCompliance from "src/components/common/SecurityComplianceSection";
import SingleButton from "src/components/common/SingleButton";
import { designForInsuranceData, designForPartnerData, MainFeaturePartnerData, partnerHerocardData, PartnerHeroData, securityData } from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={PartnerHeroData[0]} herocardData={partnerHerocardData} className="text-start">
            <SingleButton title="Become a Partner" />
        </Hero>
        <SecurityCompliance securityData={MainFeaturePartnerData} />
        <FutureInnovationPage />
        <RealEstateCommunciation data={designForPartnerData[0]} />
        <Faq />
        <Exploring />
    </>)
}