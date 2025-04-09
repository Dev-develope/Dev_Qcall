"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BlogPost from "src/components/common/BlogPost";
export default function page() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const stored = sessionStorage.getItem("selectedPost");
      if (stored) {
        setData(JSON.parse(stored));
      }
    }, []); // ← Don't include [data] here

   
    return (<>
        <BlogPost data={data}/>
    </>)
}