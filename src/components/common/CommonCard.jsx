// "use client";

// import Image from "next/image";
// import img from "../../../public/images/AiImage.PNG";
// import listLogoImg from "../../../public/images/listlogo.png";
// import WavePlayer from "./WavePlayer";

// export default function CommonCard({ cardDatas, img }) {
//   return (
//     <div className="container mx-auto p-4 flex justify-center items-center">
//       {cardDatas.map((card, index) => (
//         <div
//           key={index}
//           className="flex flex-col md:flex-row bg-white overflow-hidden p-6 justify-center items-center space-x-10"
//         >
//           <div className="w-1/3 flex flex-col justify-center p-6">
//             <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] self-start">
//               {card.span}
//             </span>
//             {card.para && <p className="mt-5 text-sm">{card.para}</p>}
//             <h2 className="text-2xl font-bold text-gray-800 mt-4">{card.h1}</h2>
//             <ul className="mt-4 space-y-2 text-gray-600 text-sm">
//               {card.list.map((item, listIndex) => (
//                 <li key={listIndex} className="flex items-start">
//                   <Image
//                     src={listLogoImg}
//                     alt="Chat AI"
//                     height={10}
//                     width={10}
//                     className="mr-3 mt-1"
//                   />
//                   <div>{item.text}</div>
//                 </li>
//               ))}
//             </ul>
//             {card?.playeradd && (
//               <div className="lg:w-1/2 md-w-full mt-2 ml-5">
//                 {card?.playeradd && <WavePlayer audio={card?.playeradd} />}
//               </div>
//             )}
//           </div>
//           <div className="w-1/3 flex justify-center">
//             <Image
//               src={img}
//               alt="Chat AI"
//               width={400}
//               height={250}
//               className="rounded-xl border border-gray-200 shadow-md object-contain p-2"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import listLogoImg from "../../../public/images/listlogo.png";
import WavePlayer from "./WavePlayer";
import { FarmerMotionCard } from "./FarmerMotion";

export default function CommonCard({ cardDatas, img }) {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="space-y-10 max-w-4xl">
        {cardDatas.map((card, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-white p-6 rounded-xl"
          >
            {/* Left: Text Content */}
            <FarmerMotionCard>
              <div className="flex justify-center">
                <Image
                  src={img}
                  alt="Chat AI"
                  width={400}
                  height={250}
                  className="rounded-xl border border-gray-200 shadow object-contain p-2"
                />
              </div>
            </FarmerMotionCard>
            <FarmerMotionCard direction="right">
              <div className="space-y-4">
                <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] inline-block w-fit">
                  {card.span}
                </span>

                <h2 className="text-2xl font-bold text-gray-800">{card.h1}</h2>

                {card.para && (
                  <p className="text-sm text-gray-700">{card.para}</p>
                )}

                <ul className="space-y-2 text-gray-600 text-sm">
                  {card.list.map((item, listIndex) => (
                    <li key={listIndex} className="flex items-start">
                      <Image
                        src={listLogoImg}
                        alt="Icon"
                        height={10}
                        width={10}
                        className="mr-3 mt-1"
                      />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                {card?.playeradd && (
                  <div className="mt-2 w-full max-w-sm">
                    <WavePlayer audio={card.playeradd} />
                  </div>
                )}
              </div>
            </FarmerMotionCard>

            {/* Right: Image */}
          </div>
        ))}
      </div>
    </div>
  );
}
