"use client";
import Exploring from "src/components/common/Exploring";
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