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
import SingleButton from "src/components/common/SingleButton";
import {clientEngagementData, realEstateHerocardData, realEstateHeroData, realStateClientData, reatilSafety, recruiterHerocardData, recruitmentData, retailClientData} from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={realEstateHeroData[0]} herocardData={realEstateHerocardData} className="text-center">
            <SingleButton title="Get a Demo Today!" className="bg-[#00a7e6]" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <FutureCard data={clientEngagementData[0]} />
        <RealEstateCommunciation data={realStateClientData[0]}/>
        <Exploring />
    </>)
}