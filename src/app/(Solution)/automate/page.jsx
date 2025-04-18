import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import SingleButton from "src/components/common/SingleButton";
import { autoAiPowerdSalesData, automatecardDataA, automatecardDataB, automatecardDataC, automatecardDataD, automatecardDataE, automatecardDataF, automateHerocardData, AutomateHeroData, reatilSafety} from "src/constants/SolutionData";
import nevermisssales from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/nevermisssales.png"
import reachmorecutomer from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/reachmorecutomer.png"
import conversation from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/conversation.png"
import collab from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/collab.png"
import hi from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/hi.png"
import imporve from "../../../../public/images/qcallAi/3Solution-Automotive Retailers/improve.png"

export const metadata = {
    title: "Automotive | QCall AI Choose What Works Best",
    description:
      "Automotive QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/automotive"),
    metadataBase: new URL("https://qcall.ai/automotive"),
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
      title: "Automotive | QCall AI Choose What Works Best",
      description:
        "Automotive QCall AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/automotive"),
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
        <Hero data={AutomateHeroData[0]} herocardData={automateHerocardData}>
            <SingleButton title="Get a Demo Today!" route={"https://cal.com/team/tinycheque/qcall"}/>
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={autoAiPowerdSalesData} />
        <CommonCard cardDatas={automatecardDataA} img={reachmorecutomer}/>
        <CommonCardB cardDatas={automatecardDataB} img={nevermisssales}/>
        <CommonCard cardDatas={automatecardDataC} img={conversation}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!"  route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <ConnectwithTeams data={autoAiPowerdSalesData} />
        <CommonCard cardDatas={automatecardDataD} img={hi}/>
        <CommonCardB cardDatas={automatecardDataE} img={collab}/>
        <CommonCard cardDatas={automatecardDataF} img={imporve}/>
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#00a7e6] font-light text-white" title="try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
        </div>
        <Exploring />
    </>)
}