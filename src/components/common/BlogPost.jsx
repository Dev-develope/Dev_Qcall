import Link from "next/link";
import Image from "next/image";
import meetingImg from "../../../public/images/Blogs/meeting1.png";
import {
  ArrowLeft,
  ArrowLeftIcon,
  ArrowRightIcon,
  SearchIcon,
} from "lucide-react";
import CommonButton from "./Button";
import Exploring from "./Exploring";
import Navbar from "./Navbar";

const BlogPost = ({ data }) => {
  return (
    <>
      <Navbar className="bg-gradient-to-r from-[#0b0c1e] via-[#0e0f2a] to-[#101236]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 mt-10">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-500 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className="text-black text-center border border-[#00a7e6] py-2 px-4 cursor-pointer rounded-2xl max-w-[10rem] font-bold mx-auto sm:mx-0"
          >
            Go Back
          </Link>
          <div className="mt-4">
            <Link href="#" className="hover:underline">
              BLOG
            </Link>
            &gt;
            <Link href="#" className="hover:underline">
              {data?.category}
            </Link>
            &gt;
            <span className="text-gray-600">
              Revolutionizing Customer Interaction...
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Content (2/3) */}
          <div className="md:col-span-2">
            {/* Category Badge */}
            <span className="inline-block bg-purple-100 text-[#00a7e6] text-xs font-semibold px-3 py-1 rounded-md mb-3">
              AI Integration
            </span>

            {/* Blog Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {data?.title}
            </h1>

            {/* Metadata */}
            <p className="text-gray-500 text-sm mb-5">
              February 22, 2025 • 2 MINS READ
            </p>

            {/* Blog Image */}
            <Image
              src={data?.image}
              alt="People discussing AI Voicebots"
              className="w-full h-auto rounded-lg shadow-md"
            />

            {/* Blog Content */}
            <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
              <h2 className="font-bold text-lg">
                Understanding AI Voicebots and Their Role in Customer Engagement
              </h2>
              <p>
                AI voicebots have emerged as a transformative technology in the
                field of customer service, particularly within the
                telecommunications sector. These automated systems leverage
                advanced technologies such as natural language processing (NLP)
                and machine learning (ML) to facilitate seamless interactions
                with customers through both inbound and outbound calls. At their
                core, AI voicebots are designed to understand human language,
                allowing them to interpret and respond to inquiries in
                real-time, effectively mimicking human conversational patterns.
              </p>
              <p>
                In the context of customer engagement, AI voicebots serve
                several critical functions. They can handle a wide array of
                customer inquiries, ranging from simple questions about billing
                to more complex requests like technical support. By automating
                these interactions, businesses can provide immediate assistance,
                reducing wait times and enhancing overall customer satisfaction.
                The ability of voicebots to operate 24/7 means that customers
                can receive support whenever they need it, leading to improved
                service availability and response times.
              </p>
              <p>
                Moreover, AI voicebots utilize machine learning algorithms to
                continually improve their performance. As they interact with
                customers, they gather data that enables them to better
                understand user preferences and behaviors over time. This
                capability supports more personalized interactions, where
                voicebots can tailor responses based on past interactions or
                specific customer profiles. For instance, a telecommunications
                company might deploy a voicebot to handle subscriber inquiries,
                ensuring that the bot is capable of addressing common questions
                as well as escalating more complicated issues to human
                representatives when necessary.
              </p>
              <p>
                By employing AI voicebots, businesses can significantly enhance
                workflow efficiency. They reduce the burden on human agents,
                allowing them to focus on more intricate tasks that require a
                human touch, thus optimizing overall resource allocation. As the
                technology continues to advance, the impact of AI voicebots on
                customer engagement will only grow, offering new avenues for
                improving service delivery and fostering stronger customer
                relationships.
              </p>
            </div>
            <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
              <h2 className="font-bold text-lg">
                Understanding AI Voicebots and Their Role in Customer Engagement
              </h2>
              <p>
                AI voicebots have emerged as a transformative technology in the
                field of customer service, particularly within the
                telecommunications sector. These automated systems leverage
                advanced technologies such as natural language processing (NLP)
                and machine learning (ML) to facilitate seamless interactions
                with customers through both inbound and outbound calls. At their
                core, AI voicebots are designed to understand human language,
                allowing them to interpret and respond to inquiries in
                real-time, effectively mimicking human conversational patterns.
              </p>
              <p>
                In the context of customer engagement, AI voicebots serve
                several critical functions. They can handle a wide array of
                customer inquiries, ranging from simple questions about billing
                to more complex requests like technical support. By automating
                these interactions, businesses can provide immediate assistance,
                reducing wait times and enhancing overall customer satisfaction.
                The ability of voicebots to operate 24/7 means that customers
                can receive support whenever they need it, leading to improved
                service availability and response times.
              </p>
              <p>
                Moreover, AI voicebots utilize machine learning algorithms to
                continually improve their performance. As they interact with
                customers, they gather data that enables them to better
                understand user preferences and behaviors over time. This
                capability supports more personalized interactions, where
                voicebots can tailor responses based on past interactions or
                specific customer profiles. For instance, a telecommunications
                company might deploy a voicebot to handle subscriber inquiries,
                ensuring that the bot is capable of addressing common questions
                as well as escalating more complicated issues to human
                representatives when necessary.
              </p>
              <p>
                By employing AI voicebots, businesses can significantly enhance
                workflow efficiency. They reduce the burden on human agents,
                allowing them to focus on more intricate tasks that require a
                human touch, thus optimizing overall resource allocation. As the
                technology continues to advance, the impact of AI voicebots on
                customer engagement will only grow, offering new avenues for
                improving service delivery and fostering stronger customer
                relationships.
              </p>
            </div>
            <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
              <h2 className="font-bold text-lg">
                Understanding AI Voicebots and Their Role in Customer Engagement
              </h2>
              <p>
                AI voicebots have emerged as a transformative technology in the
                field of customer service, particularly within the
                telecommunications sector. These automated systems leverage
                advanced technologies such as natural language processing (NLP)
                and machine learning (ML) to facilitate seamless interactions
                with customers through both inbound and outbound calls. At their
                core, AI voicebots are designed to understand human language,
                allowing them to interpret and respond to inquiries in
                real-time, effectively mimicking human conversational patterns.
              </p>
              <p>
                In the context of customer engagement, AI voicebots serve
                several critical functions. They can handle a wide array of
                customer inquiries, ranging from simple questions about billing
                to more complex requests like technical support. By automating
                these interactions, businesses can provide immediate assistance,
                reducing wait times and enhancing overall customer satisfaction.
                The ability of voicebots to operate 24/7 means that customers
                can receive support whenever they need it, leading to improved
                service availability and response times.
              </p>
              <p>
                Moreover, AI voicebots utilize machine learning algorithms to
                continually improve their performance. As they interact with
                customers, they gather data that enables them to better
                understand user preferences and behaviors over time. This
                capability supports more personalized interactions, where
                voicebots can tailor responses based on past interactions or
                specific customer profiles. For instance, a telecommunications
                company might deploy a voicebot to handle subscriber inquiries,
                ensuring that the bot is capable of addressing common questions
                as well as escalating more complicated issues to human
                representatives when necessary.
              </p>
              <p>
                By employing AI voicebots, businesses can significantly enhance
                workflow efficiency. They reduce the burden on human agents,
                allowing them to focus on more intricate tasks that require a
                human touch, thus optimizing overall resource allocation. As the
                technology continues to advance, the impact of AI voicebots on
                customer engagement will only grow, offering new avenues for
                improving service delivery and fostering stronger customer
                relationships.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 mt-5 border-t border-t-[#00a7e6] py-10">
              <div className="flex flex-col p-4 border border-gray-200 rounded-2xl">
                <ArrowLeftIcon />
                <span className="text-gray-500 text-sm mt-2">
                  PREVIOUS BLOG
                </span>
                <h1 className="font-bold text-lg mt-2">
                  Revolutionizing Customer Interaction: Harnessing AI Voicebots
                  in Telecommunication
                </h1>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 rounded-2xl">
                <ArrowRightIcon className="flex self-end" />
                <span className="text-gray-500 text-sm mt-2">NEXT BLOG</span>
                <h1 className="font-bold text-lg mt-2">
                  Revolutionizing Customer Interaction: Harnessing AI Voicebots
                  in Telecommunication
                </h1>
              </div>
            </div>

            <div className="max-w-3xl mx-auto p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Leave a Reply</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Website URL
                  </label>
                  <input
                    type="url"
                    placeholder="Type here"
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write text here..."
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <div className="mt-4 flex items-center">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo" className="text-sm text-gray-700">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <CommonButton
                className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                title="Submit"
              />
            </div>
          </div>

          {/* Right Sidebar (1/3) */}
          <aside>
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />
              <button className="absolute right-2 top-2 text-[#00a7e6]">
                <SearchIcon />
              </button>
            </div>

            {/* Recent Posts */}
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Recent Posts
            </h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-[#00a7e6]">
                  Transforming Communication: The Benefits of an AI Voicebot...
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00a7e6]">
                  Elevate Your Calling Experience: The Impact of AI Voicebots...
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00a7e6]">
                  Enhancing Customer Engagement with AI Voicebots for Call
                  Handling
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00a7e6]">
                  Revolutionizing Communication: The Ultimate AI Voicebot...
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <Exploring />
    </>
  );
};

export default BlogPost;
