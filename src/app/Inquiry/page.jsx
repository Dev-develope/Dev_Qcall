import Exploring from "src/components/common/Exploring";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
import InquiryForms from "src/components/common/InquiryForms";
export default function page() {
    const policyData = { para: "Inquiry", heading: "Send Us Inquiry Messages", heading2: "QCall Enterprise Solution" }
    return (<>
        <InquiryForms/>
        <Exploring />
    </>)
}