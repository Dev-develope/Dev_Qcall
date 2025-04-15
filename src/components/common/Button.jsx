"use client";
import { usePathname } from "next/navigation";

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
    <button
      className={`${className} px-4 py-2 rounded-full cursor-pointer flex items-center justify-center gap-2`}
      onClick={handleClick}
    >
      <span>{title}</span>
      {children}
    </button>
  );
}
