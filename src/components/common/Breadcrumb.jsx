// components/Breadcrumb.js
import Link from 'next/link';
import { Home } from 'lucide-react'; // or use any icon library

const Breadcrumb = ({route,BreadcrumbData}) => {
  return (
    <nav className="flex items-center text-sm text-white space-x-2 mt-5 font-bold">
      {/* <Link href="/" className="flex items-center hover:text-gray-700">
        <Home className="w-4 h-4 mr-1" />
      </Link>

      <span className="text-gray-400">›</span> */}

      <Link href="/" className="font-light hover:text-gray-700 text-xl">
      Home
      </Link>

      <span className="font-bold text-gray-400 text-2xl">›</span>

      <span className=" font-light text-xl text-[#00a7e6] underline decoration-2">About Company</span>
    </nav>
  );
};

export default Breadcrumb;
