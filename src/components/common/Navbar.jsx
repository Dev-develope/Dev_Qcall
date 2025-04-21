"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  LayoutGrid,
  Settings,
  Database,
  Code,
  ChevronDown,
  ChevronRight,
  CircleArrowRight,
  CircleArrowRightIcon,
  ArrowRight,
} from "lucide-react";
import CommonButton from "./Button";
import { menuItems } from "src/constants/naviation";
import Image from "next/image";
import logo from "../../../public/images/QcallLogo.png";
import logo2 from "../../../public/images/qcallaidarklogo2.png";
import { usePathname } from "next/navigation";

export default function Navbar({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Run once on mount

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav
      className={`${className} fixed top-0 left-0 w-[100dvw] max-w-full z-[9999] py-3 transition-all duration-300 ${
        scrolled ? "bg-white shadow-2xl" : " text-white"
      }`}
      // className={`${className} fixed top-0 left-0 w-[100dvw] max-w-full z-[9999] py-2 transition-all duration-300 ${
      //   scrolled
      //     ? "bg-gradient-to-r from-[#0b0c1e] via-[#0e0f2a] to-[#101236] text-white shadow-md"
      //     : " text-white"
      // }`}
    >
      <div className="container lg:mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center lg:w-1/2 md:w-full justify-around space-x-8">
          <Link href="/">
            <Image
              src={scrolled ? logo2 : logo}
              alt="logo"
              height={30}
              width={100}
              className="ml-3"
            />
          </Link>

          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={item.url}
                  className={`hover:text-[#00a7e6] text-sm font-bold flex items-center space-x-1 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  <span>{item.text}</span>
                  {item.hasChildren ? (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  ) : (
                    " "
                  )}
                </Link>
                {item.hasChildren && (
                  // <div className="absolute left-0 bg-[#11121c] min-w-4xl text-white rounded-2xl shadow-lg p-4 hidden group-hover:flex flex-col">
                  <div
                    className="absolute left-0 bg-[#11121c] min-w-3xl text-white rounded-2xl shadow-lg p-4 
                     opacity-0 scale-95 pointer-events-none 
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
                     transition-all duration-500 ease-in-out flex-col"
                  >
                    <h3 className="text-sm text-gray-400 mb-3">
                      AI Product Offer by QCall.ai
                    </h3>

                    {/* Grid Layout for Submenu */}
                    <div className="flex flex-wrap gap-2">
                      {item.subMenu.map((sub, index) => (
                        <Link
                          href={sub.url}
                          key={index}
                          className="flex items-center justify-between border rounded-2xl w-60 p-5 bg-[#171825] pl-2 pr-2 hover:bg-gray-800"
                        >
                          <div className="flex items-center space-x-3 rounded-2xl transition">
                            <div>
                              <p className="text-sm">{sub.text}</p>
                              <p className="text-xs text-gray-400">
                                {sub.sortDec}
                              </p>
                            </div>
                          </div>
                          <div className="p-1 rounded-full border border-gray-500 hover:bg-[#00a7e6]">
                            <ChevronRight className="text-white  transition-colors duration-200" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {!isMobile && (
          <div className="flex items-center space-x-4 mr-5 w-[15rem]">
            <CommonButton
              className={`lg:text-sm md:text-xs font-bold px-4 py-2 w-1/2 rounded-xl ${
                scrolled ? "text-black bg-[#00a7e6]" : "text-white bg-[#00a7e6]"
              }`}
              title="Sign up"
              route="https://app.qcall.ai/auth/sign-up"
            >
              <ArrowRight size={16} />
            </CommonButton>

            <CommonButton
              className={`lg:text-sm md:text-xs font-bold px-4 py-2 w-1/2 rounded-xl ${
                scrolled ? "text-black bg-[#00a7e6]" : "text-white bg-[#00a7e6]"
              }`}
              title="Log in"
              route="https://app.qcall.ai/auth/sign-in"
            >
              <ArrowRight size={16} />
            </CommonButton>
          </div>
        )}

        {isMobile && (
          <div className=" mr-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={scrolled ? `text-black` : `text-white`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={30} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-dvh w-full bg-[#161616]  text-white overflow-scroll transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pl-5 pr-5">
          <Link href="/">
            <Image src={logo} alt="logo" height={25} width={100} />
          </Link>
          <X
            size={24}
            className="mr-3"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className="flex flex-col py-6 px-5 space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full text-left">
              <button
                className={`w-full text-md font-bold py-3 flex justify-between items-center transition-colors duration-200 ${
                  openSubMenu === item.id
                    ? "text-[#00a7e6]"
                    : "text-white hover:text-[#00a7e6]"
                }`}
                onClick={() => item.hasChildren && toggleSubMenu(item.id)}
              >
                {item.text}
                {item.hasChildren && (
                  <ChevronRight
                    className={`transition-transform duration-300 ${
                      openSubMenu === item.id ? "rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </button>

              {item.hasChildren && (
                <div
                  className={`transition-all duration-400 ${
                    openSubMenu === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* <ul className="bg-[#121212] text-white py-2 border-t border-gray-700 overflow-y-auto">
                    {item.subMenu.map((sub) => {
                      const isActive = pathname === sub.url;

                      return (
                        <li
                          key={sub.url}
                          className={`py-2 px-4 ${
                            isActive
                              ? "text-[#00a7e6] font-bold"
                              : "hover:text-[#00a7e6]"
                          }`}
                        >
                          <Link
                            href={sub.url}
                            className="block"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMenuOpen(false);}}
                          >
                            {sub.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul> */}
                  {openSubMenu === item.id && (
                    <ul className="bg-[#121212] text-white py-2 border-t border-gray-700 overflow-y-auto">
                      {item.subMenu.map((sub) => {
                        const isActive = pathname === sub.url;
                        return (
                          <li
                            key={sub.url}
                            className={`py-2 px-4 ${
                              isActive
                                ? "text-[#00a7e6] font-bold"
                                : "hover:text-[#00a7e6]"
                            }`}
                          >
                            <Link
                              href={sub.url}
                              className="block"
                              onClick={(e) => {
                                e.stopPropagation();
                                setMenuOpen(false); 
                              }}
                            >
                              {sub.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <CommonButton
              className="text-black bg-[#00a7e6] text-sm px-4 py-2 rounded-full w-1/2"
              title="Sign up"
            />
            <CommonButton
              className="text-black bg-white px-4 py-2 rounded-full w-1/2"
              title="Log in"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
