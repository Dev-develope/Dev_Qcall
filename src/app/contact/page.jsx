"use client";
import Exploring from "src/components/common/Exploring";
import BolgImg from "../../../public/images/BG.png"
import { usePathname } from "next/navigation";
import HeroBackgroundImage from "src/components/common/HeroBackgroundImage";
import inovateimg from "../../../public/images/Blogs/aiCommunicate.png"
import { AboutcardDatas} from "src/constants/ai_communication";
import AboutUsCard from "src/components/common/AboutUsCard";
import AboutThreeCard from "src/components/common/AboutThreeCard";
import ContactForm from "src/components/common/ContactForm";
import Breadcrumb from "src/components/common/Breadcrumb";
export default function page() {
    const path = usePathname();
    const isBlogPage = path === "/blog";
    const policyData = { para: "Contact", heading: ` "Contact US" ` }
    return (<>
       <HeroBackgroundImage data={policyData} img ={BolgImg}>
       <Breadcrumb/>
       </HeroBackgroundImage>
        <AboutUsCard cardDatas={AboutcardDatas} img={inovateimg}/>
        <ContactForm/>
        <Exploring />
    </>)
}