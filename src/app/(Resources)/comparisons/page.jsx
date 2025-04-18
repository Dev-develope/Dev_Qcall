import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import Pricing from "src/components/common/Pricing";
import { pricingPlans } from "src/constants/ai_contact_center";
import {  compareHeroData1, comprisionHerocardData, sampleData } from "src/constants/SolutionData";


export const metadata = {
    title: "Compare | QCall AI Choose What Works Best",
    description: "Compare QCall  AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
    canonical: new URL("https://qcall.ai/comparison"),
    metadataBase: new URL("https://qcall.ai/comparison"),
    keywords: ["QCall AI", "AI Outbound Calls", "AI Inbound Calls", "AI Calls", "Sales Outreach", "Email Marketing", "Sales Growth", "Email Growth", "Email Alternatives", "AI Call Center", "Call Center Automation", "Sales Automation", "Email Automation", "Lead Generation", "Email Automation", "Email Automation", "Email Automation", "Email Automation", "Email Automation", "Email Automation"],
    authors: [{ name: "QCall AI" }],
    creator: "Kapil Karda",
    publisher: "Kapil Karda",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Compare | QCall AI Choose What Works Best",
      description: "Compare QCall  AI with other options to find the best fit for your needs. Explore features and pricing to make the right choice for your business.",
      url: new URL("https://qcall.ai/comparison"),
      siteName: "QCall AI",
      images: "https://www.qcall.ai/assets/cover.png/assets/cover.png",
      type: "website",
      locale: "en_US",
      publishedTime: '2024-10-17T00:00:00.000Z',
      authors: ['Kapil Karda'],
    },
  };


export default function page() {
    return (<>
        <Hero data={compareHeroData1[0]} herocardData={comprisionHerocardData} sampleData={sampleData} className="text-start">
            {/* <SingleButton title="Become a Partner" /> */}
        </Hero>
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}