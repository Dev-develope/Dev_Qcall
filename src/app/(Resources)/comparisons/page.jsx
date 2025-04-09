import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import Pricing from "src/components/common/Pricing";
import SingleButton from "src/components/common/SingleButton";
import { pricingPlans } from "src/constants/ai_contact_center";
import { compareHeroData, comprisionHerocardData, designForPartnerData, MainFeaturePartnerData, sampleData } from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={compareHeroData[0]} herocardData={comprisionHerocardData} sampleData={sampleData} className="text-start">
            <SingleButton title="Become a Partner" />
        </Hero>
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}