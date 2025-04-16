import CommonButton from "./Button";

export default function Exploring() {
    return (<>
        <div className="bg-[#ddebf6]">
            <div className="container mx-auto px-4">
                <div className="min-h-[22rem] flex flex-co text-center justify-center items-center">

                    <div className="d-flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mt-4 text-black">
                            Start Exploring QCall.ai with Free Trial
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto  text-sm sm:text-base">
                            Experience expectaional support deom our dedicated team who are ready to assist you <br />around the clock.Explore our support center for a wealth of self learrning resources.
                        </p>
                        <p className="mt-4 max-w-2xl mx-auto text-xs">
                            join us today and elevate your customer service Experience
                        </p>


                        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
                            <CommonButton className="bg-[#00a7e6] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 shadow-lg" title="Try it now for free!!!" route={"https://app.qcall.ai/auth/sign-up"}/>
                            <CommonButton className="bg-white  text-black hover:text-[#00a7e6] text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 shadow-lg" title="Book a demo" route={"https://cal.com/team/tinycheque/qcall"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}