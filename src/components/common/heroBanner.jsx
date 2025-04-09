import Image from "next/image";
import Link from "next/link";
import CommonButton from "./Button";

export default function HeroBanner({ 
  headline = "Human-like voice agent to handle incoming calls. Non-stop.",
  ctaText = "Create your AI agent in 30 seconds",
  ctaLink = "/signup",
  backgroundImage = "/images/wave-background.jpg",
  waveImage = "/images/wave-animation.png",
  overlayColor = "rgba(0, 0, 20, 0.7)"
}) {
  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={waveImage}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
        />
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white max-w-2xl mb-8">
          {headline}
        </h1>
        
           <CommonButton title={ctaText} className="text-sm mt-6 bg-[#00a7e6] rounded-full" route={"https://cal.com/team/tinycheque/qcall"}/>
      </div>
    </div>
  );
}