import DoubleButton from "src/components/common/DoubleButton";
import EducationCommunication from "src/components/common/EducationCommunication";
import Exploring from "src/components/common/Exploring";
import FutureCard from "src/components/common/FutureCard";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import SingleButton from "src/components/common/SingleButton";
import {educationHerocardData, educationHeroData, eduVertualCommData, eduVertualCommData2, reatilSafety, stuProInstrucCommuData } from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={educationHeroData[0]} herocardData={educationHerocardData} className="text-center">
            <DoubleButton title1="Get a Demo & Experience It Yourself!" title2="Book a Demo" route={"https://cal.com/team/tinycheque/qcall"} route2={"https://app.qcall.ai/auth/sign-up"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <FutureCard data={stuProInstrucCommuData[0]} />
        {/* <RealEstateCommunciation data={eduVertualCommData[0]} />
        <RealEstateCommunciation data={eduVertualCommData2[0]} /> */}
        <EducationCommunication/>
        {/* <FutureCard data={smartFeatureData[0]} /> */}
        <Exploring />
    </>)
}