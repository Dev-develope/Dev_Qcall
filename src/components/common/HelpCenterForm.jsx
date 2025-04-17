import CommonButton from "./Button";

export default function HelpCenterForm() {
    return (<>
        <div className="h-[35rem] w-full sm:w-4/5 md:w-3/5 lg:w-2/3 flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-10 ">
            <p className="px-4 py-2 rounded-full inline-block text-xs border border-gray-400">
                {"Get in Touch"}
            </p>
            <h1 className="text-3xl mt-2 mb-5">Send Us Messages</h1>
            <form class="w-full mx-auto">
                <div className="flex flex-row gap-5">
                    <div class="mb-5 w-1/2">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="email" id="email" class="shadow-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="enter your name" required />
                    </div>
                    <div class="mb-5 w-1/2">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                        </label>
                        <input type="email" id="email" placeholder="enter your Email" class="shadow-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <div class="mb-5 w-1/2">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                        <input type="text" id="text" class="shadow-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="WebSite URL" required />
                    </div>
                    <div class="mb-5 w-1/2">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number
                        </label>
                        <input type="number" id="text" class="shadow-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Phone" required />
                    </div>
                </div>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                <div className="flex justify-end">
                    <CommonButton title="Submit" className="bg-[#00a7e6] mt-5" />
                </div>
            </form>
        </div>
    </>)
}