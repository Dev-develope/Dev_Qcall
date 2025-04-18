"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meetingImg from "../../../public/images/Blogs/meeting1.png"
import aibootImg from "../../../public/images/Blogs/aiboot.png"
import audioImg from "../../../public/images/Blogs/audio.png"
import CutomerEngageImg from "../../../public/images/Blogs/aiCommunicate.png"
import inovateImg from "../../../public/images/Blogs/inovate.png"
import mobileImg from "../../../public/images/Blogs/mobile.png"
import { useRouter } from 'next/navigation';
// Sample data for categories and blog posts
const categories = [
  { id: 'all', label: 'All' },
  { id: 'technology', label: 'Technology' },
  { id: 'ai-integration', label: 'AI Integration' },
  { id: 'it-managed-services', label: 'IT Managed Services' },
  { id: 'product-development', label: 'Product Development' },
  { id: 'ai-devops', label: 'AI DevOps' },
];

const blogPosts = [
  {
    id: 1,
    title: 'Revolutionizing Customer Interaction: Harnessing AI Voicebots in Telecommunication',
    excerpt: 'AI voicebots have emerged as a transformative technology in the field of customer service, particularly within the telecommunications sector. These automated systems leverage advanced technologies such as natural language processing...',
    image: meetingImg,
    category: 'it-managed-services',
    date: 'FEBRUARY 22, 2025',
    readTime: '2 MINS READ',
    link:""
  },
  {
    id: 2,
    title: 'Transforming Communication: The Benefits of an AI Voicebot for Inbound and Outbound Calling',
    excerpt: 'AI voicebots represent a significant advancement in communication technology, utilizing sophisticated algorithms to enhance both inbound and outbound calling processes.',
    image: aibootImg,
    category: 'product-development',
    date: 'FEBRUARY 22, 2025',
    readTime: '2 MINS READ',
     link:"https://blog.qcall.ai/transforming-communication-the-benefits-of-an-ai-voicebot-for-inbound-and-outbound-calling/"
  },
  {
    id: 3,
    title: 'Elevate Your Calling Experience: The Impact of AI Voicebots on Inbound and Outbound Communication',
    excerpt: 'AI voicebots have emerged as transformative tools in the realm of communication, particularly enhancing both inbound and outbound calling experiences. These advanced systems leverage innovative technologies such as speech recognition...',
    image: audioImg,
    category: 'ai-integration',
    date: 'FEBRUARY 22, 2025',
    readTime: '2 MINS READ',
    link:"https://blog.qcall.ai/elevate-your-calling-experience-the-impact-of-ai-voicebots-on-inbound-and-outbound-communication/"
  },
  {
    id: 4,
    title: 'Enhancing Customer Engagement with AI Voicebots for Call Handling',
    excerpt: 'AI voicebots represent a significant advancement in the way businesses handle inbound and outbound calls, leveraging sophisticated technology to enhance customer engagement. Essentially, these are automated systems powered by artificdK',
    image: CutomerEngageImg,
    category: 'technology',
    date: 'FEBRUARY 22, 2025',
    readTime: '2 MINS READ',
    link:"https://blog.qcall.ai/enhancing-customer-engagement-with-ai-voicebots-for-call-handling/"
  },
  {
    id: 5,
    title: 'Revolutionizing Communication The Ultimate AI Voicebot for YourCall Management',
    excerpt: 'AI voicebots have emerged as indispensable tools for modern communication, particularly in the realm of call management. These intelligent systems are programmed  to handle both inbound and outbound callswith remarkable efficiency.',
    image: inovateImg,
    category: 'ai-integration',
    date: 'FEBRUARY 22, 2025',
    readTime: '2 MINS READ',
    link:"https://blog.qcall.ai/revolutionizing-communication-the-ultimate-ai-voicebot-for-your-call-management/"
  },
  {
    id: 6,
    title: 'Transform Your Communication Harnessing the Power of AI Voicebots for Inbound and OuÙ',
    excerpt: 'The core functionality of AI voicebots lies in their ability to interpret spoken language and provide appropriate responses, which significantly enhances the customer experience. They can manage numerous calls simultaneously, reducing wait times  K',
    image: mobileImg,
    category: 'ai-devops',
    date: 'FEBRUARY 22, 2025',
    readTime: '2 MINS READ',
    linl:"https://blog.qcall.ai/transform-your-communication-harnessing-the-power-of-ai-voicebots-for-inbound-and-outbound-calling/"
  },
];

export default function BlogArticle() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);


    console.log(filteredPosts,"filterPosts")
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex flex-wrap border-b border-gray-200 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`mr-6 py-2 text-sm font-medium transition-colors duration-200 ${activeCategory === category.id
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-gray-700'
              }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>


      <div className="flex gap-5 items-center justify-center flex-wrap cursor-pointer">
        {filteredPosts.map((post) => (
          <div key={post.id} className="border border-gray-100 w-[19rem] rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300" onClick={() => {
            // sessionStorage.setItem("selectedPost", JSON.stringify(post))
            router.push(post?.link)
          }}>

            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>


            <div className="p-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full mb-3">
                {categories.find(cat => cat.id === post.category)?.label}
              </span>


              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h3>


              <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                {post.excerpt}
              </p>


              <div className="flex items-center text-xs text-gray-500 mt-auto">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}