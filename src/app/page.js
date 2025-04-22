// // "use client";
// import AiMythsSection from "src/components/common/AiMythSection";
// import CardItem1 from "src/components/common/CardItem1";
// import CardItem2 from "src/components/common/CardItem2";
// import CardItem3 from "src/components/common/CardItem3";
// import DoubleButton from "src/components/common/DoubleButton";
// import Exploring from "src/components/common/Exploring";
// import Faq from "src/components/common/Faq";
// import FinalThuoght from "src/components/common/FinalThuoght";
// import Future from "src/components/common/Future";
// import Hero from "src/components/common/Hero";
// import Images from "src/components/common/Images";
// import Language from "src/components/common/Language";
// import LogoSlider from "src/components/common/LogoSlider";
// import Pricing from "src/components/common/Pricing";
// import Steps from "src/components/common/Steps";
// import UpgradeSection from "src/components/common/UpgradeSection";
// import { pricingPlans } from "src/constants/ai_contact_center";
// import {
//   HomeHeroSectionData,
//   mythData,
// } from "src/constants/HomeHeroSectionData";
// import QcallCombineImage from "../../public/images/LandingPage/Group.png";
// import overlayImgfrom from "../../public/images/LandingPage/QCall.png";
// import LanguageIamge from "../../public/images/LandingPage/BG.png";
// import FrameImage from "../../public/images/LandingPage/Frame 1000004818.png";
// import Animationvideo2 from "../../public/videos/qcall2.mp4";
// import CardImage from "../../public/images/LandingPage/SHAPE.png";
// import CardImage2 from "../../public/images/LandingPage/SHAPE2.png";
// // import backGroundVideo from "../../public/images/LandingPage/QCallAi Animation 2.mp4"
// import backGroundVideo from "../../public/images/LandingPage/Qcall.ai+video.mp4";
// import pricingImg from "../../public/videos/QCallAiAnimate.gif";


//  export const metadata = {
//   title: "QCall AI - 24/7 AI Agent Calling Platform",
//   description:
//     "QCall  AI utilizes generative AI to drive its voice-based sales automation tool, streamlining sales processes through AI-powered voice bots. Whether you're a startup or an enterprise, it's designed to facilitate business growth effortlessly.",
//   canonical: new URL("https://qcall.ai/"),
//   metadataBase: new URL("https://qcall.ai/"),
//   keywords: ["QCall AI", "AI Outbound Calls", "AI Inbound Calls", "AI Calls", "Sales Outreach", "Email Marketing", "Sales Growth", "Email Growth", "Email Alternatives", "AI Call Center", "Call Center Automation", "Sales Automation", "Email Automation", "Lead Generation", "Email Automation", "Email Automation", "Email Automation", "Email Automation", "Email Automation", "Email Automation"],
//   authors: [{ name: "QCall AI" }],
//   creator: "Kapil Karda",
//   publisher: "Kapil Karda",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     title: "QCall AI - 24/7 AI Agent Calling Platform",
//     description:
//       "QCall  AI utilizes generative AI to drive its voice-based sales automation tool, streamlining sales processes through AI-powered voice bots. Whether you're a startup or an enterprise, it's designed to facilitate business growth effortlessly.",
//     url: new URL("https://qcall.ai/"),
//     siteName: "QCall AI",
//     images: "https://www.qcall.ai/assets/cover.png",
//     type: "website",
//     locale: "en_US",
//     publishedTime: '2024-10-17T00:00:00.000Z',
//     authors: ['Kapil Karda'],
//   },
// };

// export default function Home() {
//   return (
//     <>
//       <Hero data={HomeHeroSectionData[0]} videoPath={backGroundVideo}>
//         <DoubleButton
//           title1="Try It Now For Free"
//           title2="Book a Demo"
//           route={"https://cal.com/team/tinycheque/qcall"}
//           route2={"https://app.qcall.ai/auth/sign-up"}
//         />
//       </Hero>
//       <Images img={QcallCombineImage} />
//       <CardItem1 />
//       {/* <LogoSlider /> */}
//       <CardItem2 />
//       <CardItem3 />
//       <Language img={LanguageIamge} />
//       <Steps img={CardImage} img2={CardImage2} />
//       <AiMythsSection mythData={mythData} />
//       <Future img={FrameImage} />
//       <UpgradeSection img={LanguageIamge} />
//       <FinalThuoght />
//       <Pricing
//         pricingPlans={pricingPlans}
//         video={Animationvideo2}
//         img={pricingImg}
//       />
//       <Faq />
//       <Exploring />
//     </>
//   );
// }



// "use client";
import AiMythsSection from "src/components/common/AiMythSection";
import CardItem1 from "src/components/common/CardItem1";
import CardItem2 from "src/components/common/CardItem2";
import CardItem3 from "src/components/common/CardItem3";
import DoubleButton from "src/components/common/DoubleButton";
import Exploring from "src/components/common/Exploring";
import Faq from "src/components/common/Faq";
import FinalThuoght from "src/components/common/FinalThuoght";
import Future from "src/components/common/Future";
import Hero from "src/components/common/Hero";
import Images from "src/components/common/Images";
import Language from "src/components/common/Language";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import Steps from "src/components/common/Steps";
import UpgradeSection from "src/components/common/UpgradeSection";
import {FarmerMotion} from "src/components/common/FarmerMotion"; // ✅ import added

import { pricingPlans } from "src/constants/ai_contact_center";
import {
  HomeHeroSectionData,
  mythData,
} from "src/constants/HomeHeroSectionData";

import QcallCombineImage from "../../public/images/LandingPage/Group.png";
import overlayImgfrom from "../../public/images/LandingPage/QCall.png";
import LanguageIamge from "../../public/images/LandingPage/BG.png";
import FrameImage from "../../public/images/LandingPage/Frame 1000004818.png";
import Animationvideo2 from "../../public/videos/qcall2.mp4";
import CardImage from "../../public/images/LandingPage/SHAPE.png";
import CardImage2 from "../../public/images/LandingPage/SHAPE2.png";
import backGroundVideo from "../../public/images/LandingPage/Qcall.ai+video.mp4";
import pricingImg from "../../public/videos/QCallAiAnimate.gif";

export const metadata = {
  title: "QCall AI - 24/7 AI Agent Calling Platform",
  description:
    "QCall  AI utilizes generative AI to drive its voice-based sales automation tool, streamlining sales processes through AI-powered voice bots. Whether you're a startup or an enterprise, it's designed to facilitate business growth effortlessly.",
  canonical: new URL("https://qcall.ai/"),
  metadataBase: new URL("https://qcall.ai/"),
  keywords: [
    "QCall AI", "AI Outbound Calls", "AI Inbound Calls", "AI Calls", "Sales Outreach",
    "Email Marketing", "Sales Growth", "Email Growth", "Email Alternatives",
    "AI Call Center", "Call Center Automation", "Sales Automation", "Email Automation",
    "Lead Generation", "Email Automation"
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
    title: "QCall AI - 24/7 AI Agent Calling Platform",
    description:
      "QCall AI utilizes generative AI to drive its voice-based sales automation tool...",
    url: new URL("https://qcall.ai/"),
    siteName: "QCall AI",
    images: "https://www.qcall.ai/assets/cover.png",
    type: "website",
    locale: "en_US",
    publishedTime: '2024-10-17T00:00:00.000Z',
    authors: ['Kapil Karda'],
  },
};

export default function Home() {
  return (
    <>
      <Hero data={HomeHeroSectionData[0]} videoPath={backGroundVideo}>
        <DoubleButton
          title1="Try It Now For Free"
          title2="Book a Demo"
          route={"https://cal.com/team/tinycheque/qcall"}
          route2={"https://app.qcall.ai/auth/sign-up"}
        />
      </Hero>

      <FarmerMotion>
        <Images img={QcallCombineImage} />
      </FarmerMotion>

      <FarmerMotion>
        <CardItem1 />
      </FarmerMotion>

      {/* <LogoSlider /> */}

      <FarmerMotion>
        <CardItem2 />
      </FarmerMotion>

      <FarmerMotion>
        <CardItem3 />
      </FarmerMotion>

      <FarmerMotion>
        <Language img={LanguageIamge} />
      </FarmerMotion>

      <FarmerMotion>
        <Steps img={CardImage} img2={CardImage2} />
      </FarmerMotion>

      <FarmerMotion>
        <AiMythsSection mythData={mythData} />
      </FarmerMotion>

      <FarmerMotion>
        <Future img={FrameImage} />
      </FarmerMotion>

      <FarmerMotion>
        <UpgradeSection img={LanguageIamge} />
      </FarmerMotion>

      <FarmerMotion>
        <FinalThuoght />
      </FarmerMotion>

      <FarmerMotion>
        <Pricing
          pricingPlans={pricingPlans}
          video={Animationvideo2}
          img={pricingImg}
        />
      </FarmerMotion>

      <FarmerMotion>
        <Faq />
      </FarmerMotion>

      <FarmerMotion>
        <Exploring />
      </FarmerMotion>
    </>
  );
}
