import Exploring from "src/components/common/Exploring";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
import PrivacyPolicy from "src/components/common/privacypolicy";
import TermsAndConditions from "src/components/common/TermsAndConditions";
export default function page() {
    const policyData = { para: "Let's review the terms you'll agree to.", heading: "Terms & Conditions" }
    return (<>
        <HeroBackgroundImage data={policyData} />
        <PrivacyPolicy />
        <Exploring />
    </>)
}