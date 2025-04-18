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
import {technocardDataA, technocardDataB, technocardDataC, technocardDataD } from "src/constants/ai_contact_center";
import { reatilSafety,technologyHerocardData, TechnoTeamsData, TechonologyHeroData, techSaasData } from "src/constants/SolutionData";
import security from "../../../../public/images/qcallAi/3Solution-Technology/security.png"
import reliblegloble from "../../../../public/images/qcallAi/3Solution-Technology/reliblegloble.png"
import helloRobo from "../../../../public/images/qcallAi/3Solution-Technology/helloRobo.png"



export const metadata = {
    title: "Technology | QCall AI Choose What Works Best",
    description:
      "Technology QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/technology"),
    metadataBase: new URL("https://qcall.ai/technology"),
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
      title: "Technology | QCall AI Choose What Works Best",
      description:
        "Technology QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/technology"),
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
        <Hero data={TechonologyHeroData[0]} herocardData={technologyHerocardData}>
            <SingleButton title="Get a Demo Today!" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={TechnoTeamsData} />
        <CommonCard cardDatas={technocardDataA} img={reliblegloble}/>
        <CommonCardB cardDatas={technocardDataB} img={helloRobo}/>
        <CommonCard cardDatas={technocardDataC} img={reliblegloble}/>
        <CommonCardB cardDatas={technocardDataD} img={security}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <RetailFeatures data={techSaasData} />
        
        <Exploring />
    </>)
}