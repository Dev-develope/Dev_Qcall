import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import FutureCard from "src/components/common/FutureCard";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import RetailFeatures from "src/components/common/RetailFeatures";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
import { legalFeaturesData, legalHerocardData, legalHeroData, reatilSafety, recruiterHerocardData, recruitingHeroData, recruitmentClientData, recruitmentData, retailFeaturesData, retailHerocardData, retailHeroData, retailTeamsData } from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={recruitingHeroData[0]} herocardData={recruiterHerocardData} className="text-center">
            <SingleButton title="Get a Demo Today!" className="bg-[#00a7e6]" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <FutureCard data={recruitmentData[0]} />
        <RealEstateCommunciation data={recruitmentClientData[0]} />
        <Exploring />
    </>)
}