"use client";
import DoubleButton from "src/components/common/DoubleButton";
import EducationCommunication from "src/components/common/EducationCommunication";
import Exploring from "src/components/common/Exploring";
import Faq from "src/components/common/Faq";
import FutureCard from "src/components/common/FutureCard";
import FutureInnovationPage from "src/components/common/FutureInnovationPage";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import SecurityCompliance from "src/components/common/SecurityComplianceSection";
import SingleButton from "src/components/common/SingleButton";
import { designForInsuranceData, designForPartnerData, MainFeaturePartnerData, partnerHerocardData, PartnerHeroData, securityData } from "src/constants/SolutionData";
import BolgImg from "../../../../public/images/BG.png"
import { usePathname } from "next/navigation";
import BlogArticle from "src/components/common/BlogArticle";
import BlogPost from "src/components/common/BlogPost";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
export default function page() {
    const path = usePathname();
    const isBlogPage = path === "/blog";
    const policyData = { para: "Blogs", heading: " Our Blogs" }
    return (<>
       <HeroBackgroundImage data={policyData} img ={BolgImg}/>
        <BlogArticle/>
        <Exploring />
    </>)
}