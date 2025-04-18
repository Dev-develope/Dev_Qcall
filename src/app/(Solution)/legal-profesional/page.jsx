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
import {leaglProfessionalDataA, leaglProfessionalDataB, leaglProfessionalDataC} from "src/constants/ai_contact_center";
import { leaglProfeData, legalFeaturesData1, legalHerocardData, legalHeroData, reatilSafety } from "src/constants/SolutionData";
import securityImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/security.png"
import boostproductImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/boostproduct.png"
import trackclientImg from "../../../../public/images/qcallAi/3Solution-Legal Professionals/trackclient.png"



export const metadata = {
    title: "Legal | QCall AI Choose What Works Best",
    description:
      "Legal QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/legal"),
    metadataBase: new URL("https://qcall.ai/legal"),
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
      title: "Legal | QCall AI Choose What Works Best",
      description:
        "Legal QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/legal"),
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
        <Hero data={legalHeroData[0]} herocardData={legalHerocardData}>
            <SingleButton title="Get a Demo Today!" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={leaglProfeData} />
        <CommonCard cardDatas={leaglProfessionalDataA} img={trackclientImg}/>
        <CommonCardB cardDatas={leaglProfessionalDataB} img={boostproductImg}/>
        <CommonCard cardDatas={leaglProfessionalDataC} img={securityImg}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <RetailFeatures data={legalFeaturesData1} />
        <Exploring />
    </>)
}