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
import {ProfessionalDataA, ProfessionalDataB, ProfessionalDataC, ProfessionalDataD} from "src/constants/ai_contact_center";
import { legalHerocardData, ProfessinalData, professionalFeaturesData, professionalHeroData, reatilSafety } from "src/constants/SolutionData";
import ProfesImgA from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgA.png"
import ProfesImgB from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgB.png"
import ProfesImgC from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgC.png"
import ProfesImgD from "../../../../public/images/qcallAi/3Solution-Professional Services/ProfesImgD.png"


export const metadata = {
    title: "Professional Services | QCall AI Choose What Works Best",
    description:
      "Professional Services QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/professionalServices"),
    metadataBase: new URL("https://qcall.ai/professionalServices"),
    keywords: [
      "QCall AI",
      "AI Outbound Calls",
      "AI Inbound Calls",
      "AI Calls",
      "Sales Outreach",
      "Email Marketing",
      "Sales Growth",
      "Email Growth",
      "Email Alternatives",
      "AI Call Center",
      "Call Center Automation",
      "Sales Automation",
      "Email Automation",
      "Lead Generation",
      "Email Automation",
      "Email Automation",
      "Email Automation",
      "Email Automation",
      "Email Automation",
      "Email Automation",
    ],
    authors: [{ name: "QCall AI" }],
    creator: "Kapil Karda",
    publisher: "Kapil Karda",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Professional Services | QCall AI Choose What Works Best",
      description:
        "Professional Services QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/professionalServices"),
      siteName: "QCall AI",
      images: "https://www.qcall.ai/assets/cover.png/assets/cover.png",
      type: "website",
      locale: "en_US",
      publishedTime: "2024-10-17T00:00:00.000Z",
      authors: ["Kapil Karda"],
    },
  };


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
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <RetailFeatures data={professionalFeaturesData} />
        <Exploring />
    </>)
}