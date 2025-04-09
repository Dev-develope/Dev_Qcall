import Link from "next/link";
import Accordion from "../Accordion";

export default function Faq() {
  return (<>
    <div className="container my-10 px-4 mx-auto">
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="lg:w-5/12 mt-24">
          <div>
            <h6 className="text-lg font-semibold text-gray-700">FAQs</h6>
            <h2 className="text-3xl font-bold mt-2">
              Frequently Asked <span className="text-blue-500">questions</span>
            </h2>
          </div>
          <p className="text-gray-600 mt-4">
            We denounce with righteous indignation and dislike <br />
            men who are beguiled and demoralized by the charms <br />
            pleasure of the moment blinded by desire.
          </p>
        </div>
        <div className="lg:w-lg">
          <div className="bg-white rounded-lg">
            <Accordion />
          </div>
        </div>
      </div>
    </div >
  </>)
}