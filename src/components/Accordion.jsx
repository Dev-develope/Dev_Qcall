"use client";
import { CircleChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { faqs } from "src/constants/naviation";

export default function Accordion({ faqData = faqs }) {
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    questionRefs.current.forEach((el) => el?.classList.remove("active"));
    parentRefs.current.forEach((el) => el?.classList.remove("active"));
    answerRefs.current.forEach((el) => {
      if (el) {
        el.style.height = "0px";
        el.style.overflow = "hidden";
        el.style.transition = "height 0.5s ease-in-out, margin-bottom 0.5s ease-in-out";
        el.style.marginBottom = "0px";
      }
    });

    if (currentIndex !== -1) {
      questionRefs.current[currentIndex]?.classList.add("active");
      parentRefs.current[currentIndex]?.classList.add("active");
      const element = answerRefs.current[currentIndex];
      if (element) {
        element.style.height = element.scrollHeight + "px";
        element.style.marginBottom = "1.5rem";
      }
    }
  }, [currentIndex]);

  return (
    <div className="space-y-3 px-4 py-10">
      {faqData.map((elm, index) => (
        <div
          ref={(el) => (parentRefs.current[index] = el)}
          key={index}
          className="bg-white shadow-md rounded-lg p-2 cursor-pointer transition-all duration-300"
          onClick={() => setCurrentIndex((prev) => (prev === index ? -1 : index))}
        >
          <h4
            ref={(el) => (questionRefs.current[index] = el)}
            className="text-lg flex justify-between items-center"
          >
            {elm.title}
            <span className={`transform transition-transform hover:text-[#00a7e6] ${currentIndex === index ? "rotate-90" : "rotate-0"}`}>
            <CircleChevronRight />
            </span>
          </h4>
          <div
            ref={(el) => (answerRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-500"
            style={{ height: "0px" }}
          >
            <p className="mt-2 text-gray-600">{elm.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
