// "use client";
// import { usePathname } from "next/navigation";

// export default function CommonButton({ onClick, className, title, route, children }) {
//   const path = usePathname();
//   const handleClick = () => {
//     if (route) {
//       window.open(route, "_blank");
//     } else if (onClick) {
//       onClick();
//     }
//   };

//   return (
//     <button
//       className={`${className} hover:bg-[#1f1f1f] hover:text-[#00a7e6] hover:border hover:border-[#00a7e6] px-4 py-2 rounded-full cursor-pointer flex items-center justify-center gap-2`}
//       onClick={handleClick}
//     >
//       <span>{title}</span>
//       {children}
//     </button>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function CommonButton({ onClick, className, title, route, children }) {
  const path = usePathname();

  const handleClick = () => {
    if (route) {
      window.open(route, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }} // slight tap shrink effect
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(0, 167, 230, 0.4)", // glow effect
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={handleClick}
      className={`${className} relative overflow-hidden hover:bg-[#1f1f1f] hover:text-[#00a7e6] hover:border hover:border-[#00a7e6] px-4 py-2 rounded-full cursor-pointer flex items-center justify-center gap-2`}
    >
      <span className="z-10">{title}</span>
      {children}

      {/* Wave effect */}
      <span className="absolute w-full h-full left-0 top-0 rounded-full bg-[#00a7e6] opacity-0 scale-0 hover:opacity-10 hover:scale-150 transition duration-500 ease-out" />
    </motion.button>
  );
}
