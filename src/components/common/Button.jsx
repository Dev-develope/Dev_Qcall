"use client";

export default function CommonButton({ onClick, className, title, route }) {
  const handleClick = () => {
    if (route) {
      window.open(route, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${className} px-4 py-2 rounded-full cursor-pointer`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
