"use client";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
            <div className="bg-white shadow-lg p-8 rounded-lg max-w-3xl w-full">
                {/* Header Section */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
                    Welcome to QCall AI! We're excited to have you onboard.
                </h1>
                <p className="text-lg text-center text-gray-700 mt-2 font-medium">
                    Before you dive in, let's review the terms you'll agree to.
                </p>
                <p className="text-xs text-center text-gray-500 mt-1">
                    LAST UPDATED ON FEBRUARY 22, 2025
                </p>

                {/* Terms & Conditions Content */}
                <div className="mt-6 text-gray-700 text-sm leading-relaxed">
                    <p>
                        First, if you've already signed a separate Cover Page to access QCall AI, those terms
                        precede what’s written here. Your Cover Page agreement will apply instead.
                    </p>

                    <p className="mt-4">
                        Now, for the rest of you – this agreement is between you (or your company) and us, QCall AI
                        (the folks behind QCall AI).
                    </p>

                    <h2 className="font-semibold mt-6 text-gray-900">The agreement has three main parts:</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>The Order Form</li>
                        <li>The Key Terms, both found on the Cover Page</li>
                        <li>The Common Paper/Cloud Service Agreement Standard Terms Version 1.1</li>
                    </ul>

                    <p className="mt-4">
                        If there’s any conflict between the Cover Page and the Standard Terms, the Cover Page will win.
                        By signing up, accessing, or using QCall AI, you're indicating that you accept this agreement
                        and agree to be bound by it. If you're using QCall AI on behalf of a company, you're representing
                        that you have the authority to accept this on the company's behalf.
                    </p>

                    <p className="mt-4">
                        We know legal stuff can be monotonous, but we want to make sure we're all on the same page. If
                        you have any questions, just let us know – we're here to help make your experience with QCall AI
                        as smooth as possible.
                    </p>
                </div>

                {/* Cover Page Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Cover Page</h2>

                    <h3 className="font-semibold mt-4 text-gray-900">Cloud Service</h3>
                    <p className="text-gray-700 text-sm mt-1">
                        "QCall AI" is a progressive voice AI platform designed to empower developers with intuitive tools
                        for crafting, testing, and seamlessly deploying sophisticated voice bots. Our comprehensive
                        service includes a versatile API for voice interactions, number provisioning, call handling,
                        and a user-friendly dashboard for effortless customization and integration while adhering to the
                        highest data protection standards.
                    </p>

                    <h3 className="font-semibold mt-4 text-gray-900">Subscription Start Date</h3>
                    <p className="text-gray-700 text-sm">Upon successful sign-up</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Subscription Period</h3>
                    <p className="text-gray-700 text-sm">Flexible pay-as-you-go model, with convenient monthly invoicing</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Non-Renewal Notice Period</h3>
                    <p className="text-gray-700 text-sm">At least 30 days before the end of the current Subscription Period</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Cloud Service Fees</h3>
                    <p className="text-gray-700 text-sm">
                        Our pricing structure is designed to be transparent and adaptable to your evolving needs. Certain
                        product features have different pricing plans, which are readily available on our website. Within
                        each Payment Period, you will be billed based on the product tier you've selected and your actual
                        usage during the Subscription Period. To ensure you always have the most up-to-date information,
                        we will provide you with at least 7 days' notice of any pricing updates, communicated through email
                        or within the product itself.
                    </p>

                    <h3 className="font-semibold mt-4 text-gray-900">Payment Period</h3>
                    <p className="text-gray-700 text-sm">1 day from the date of invoice</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Invoice Period</h3>
                    <p className="text-gray-700 text-sm">Monthly</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Professional Services</h3>
                    <p className="text-gray-700 text-sm">
                        At QCall AI, we understand that every business has unique requirements. That’s why we offer
                        customized professional services that go beyond standard technical support. Our team of experts
                        is dedicated to providing personalized consultations, advanced implementation assistance,
                        optimization strategies, and tailored solutions to meet your specific needs. For inquiries and
                        to discuss your requirements, please reach out to us at
                        <a href="mailto:support@qcall.ai" className="text-blue-500 underline"> support@qcall.ai</a>,
                        and our team will be happy to guide you toward the best-fit services for your business.
                    </p>
                </div>

                {/* Key Terms Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Key Terms</h2>

                    <h3 className="font-semibold mt-4 text-gray-900">Customer</h3>
                    <p className="text-gray-700 text-sm">
                        This refers to the company or individual who accesses or uses the Product. If the person
                        accepting this Agreement is doing so on behalf of a company, any mention of “Customer” in the
                        Agreement will be about that company.
                    </p>

                    <h3 className="font-semibold mt-4 text-gray-900">Provider</h3>
                    <p className="text-gray-700 text-sm">This is QCall, the owner of QCall AI.</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Effective Date</h3>
                    <p className="text-gray-700 text-sm">This is the date the Customer first accepts this Agreement.</p>

                    <h3 className="font-semibold mt-4 text-gray-900">Provider Covered Claims</h3>
                    <p className="text-gray-700 text-sm">
                        If anyone claims that the Cloud Service when used by the Customer according to the terms of the
                        Agreement, violates, steals, or otherwise infringes on their intellectual property or other
                        rights, we will handle that.
                    </p>

                    <h3 className="font-semibold mt-4 text-gray-900">Customer Covered Claims</h3>
                    <p className="text-gray-700 text-sm">
                        If anyone claims that (1) the Customer Content when used according to the Agreement, violates,
                        steals, or otherwise infringes on their intellectual property or other rights; or (2) the
                        Customer has breached or allegedly breached Section 21 (Restrictions on Customer), we will
                        handle that.
                    </p>

                    <h3 className="font-semibold mt-4 text-gray-900">Governing Law</h3>
                    <p className="text-gray-700 text-sm">The laws of the State of Delaware will apply.</p>
                </div>
                <div className="mt-8 text-gray-700 text-sm leading-relaxed">
                    <h2 className="font-semibold text-xl text-gray-900">Cover Page</h2>
                    <p>
                        "QCall AI" is a progressive voice AI platform designed to empower developers with intuitive tools
                        for crafting, testing, and seamlessly deploying sophisticated voice bots...
                    </p>
                    <h3 className="font-semibold mt-4">Subscription Start Date</h3>
                    <p>Upon successful sign-up.</p>

                    <h3 className="font-semibold mt-4">Subscription Period</h3>
                    <p>Flexible pay-as-you-go model, with convenient monthly invoicing.</p>

                    <h3 className="font-semibold mt-4">Non-Renewal Notice Period</h3>
                    <p>At least 30 days before the end of the current Subscription Period.</p>
                </div>

                {/* Key Terms Section */}
                <div className="mt-8">
                    <h2 className="font-semibold text-xl text-gray-900">Key Terms</h2>
                    <h3 className="font-semibold mt-4">Customer</h3>
                    <p>
                        This refers to the company or individual who accesses or uses the Product...
                    </p>

                    <h3 className="font-semibold mt-4">Provider</h3>
                    <p>This is QCall, the owner of QCall AI.</p>

                    <h3 className="font-semibold mt-4">Governing Law</h3>
                    <p>The laws of the State of Delaware will apply.</p>
                </div>

                {/* Acceptable Use Policy */}
                <div className="mt-8">
                    <h2 className="font-semibold text-xl text-gray-900">QCall AI Acceptable Use Policy</h2>
                    <h3 className="font-semibold mt-4">Compliance with Laws</h3>
                    <p>
                        We expect all users to conduct themselves according to applicable laws and regulations...
                    </p>

                    <h3 className="font-semibold mt-4">Prohibited Conduct</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Unauthorized access or interference with our service operations</li>
                        <li>Attempting to breach our security or test for vulnerabilities</li>
                        <li>Disrupting the service for other users</li>
                    </ul>
                </div>

                {/* Changes to the Standard Terms */}
                <div className="mt-8">
                    <h2 className="font-semibold text-xl text-gray-900">Changes to the Standard Terms</h2>
                    <h3 className="font-semibold mt-4">Publicity Rights</h3>
                    <p>
                        Modifying Section 14.7 of the Standard Terms, Provider may identify Customer and use Customer’s
                        logo and trademarks...
                    </p>

                    <h3 className="font-semibold mt-4">Add as Section 1.8</h3>
                    <p>
                        "Usage Data and Customer Content may be used to develop, train, or enhance artificial intelligence
                        or machine learning models that are part of Provider’s products and services...
                    </p>
                    <p>
                        However, (a) Usage Data and Customer Content must be aggregated before they can be used for these
                        purposes, and (b) Provider will use commercially reasonable efforts consistent with industry-standard
                        technology to de-identify Usage Data and Customer Content before such use...
                    </p>

                    <h3 className="font-semibold mt-4">AI and Accuracy Disclaimer</h3>
                    <p>
                        Due to the nature of artificial intelligence and machine learning, the information generated by
                        these features may be inaccurate. Product features that include artificial intelligence or machine
                        learning models are not human and are not a substitute for human oversight...
                    </p>

                    <h3 className="font-semibold mt-4">Payment Terms</h3>
                    <p>
                        If Customer does not pay undisputed fees within the Payment Period, they will be charged an
                        interest rate of 1.5% per month or the maximum rate permitted by Applicable Laws, whichever is less...
                    </p>
                </div>



                <div className="mt-8">
                    <h2 className="font-semibold text-xl text-gray-900">Changes to the Standard Terms</h2>
                    <h3 className="font-semibold mt-4">Publicity Rights</h3>
                    <p>
                        Modifying Section 14.7 of the Standard Terms, Provider may identify Customer and use Customer’s
                        logo and trademarks...
                    </p>

                    <h3 className="font-semibold mt-4">Add as Section 1.8</h3>
                    <p>
                        "Usage Data and Customer Content may be used to develop, train, or enhance artificial intelligence
                        or machine learning models that are part of Provider’s products and services...
                    </p>
                    <p>
                        However, (a) Usage Data and Customer Content must be aggregated before they can be used for these
                        purposes, and (b) Provider will use commercially reasonable efforts consistent with industry-standard
                        technology to de-identify Usage Data and Customer Content before such use...
                    </p>

                    <h3 className=" mt-4">AI and Accuracy Disclaimer</h3>
                    <p>
                        Due to the nature of artificial intelligence and machine learning, the information generated by
                        these features may be inaccurate. Product features that include artificial intelligence or machine
                        learning models are not human and are not a substitute for human oversight...
                    </p>

                    <h3 >Payment Terms</h3>
                    <p>
                        If Customer does not pay undisputed fees within the Payment Period, they will be charged an
                        interest rate of 1.5% per month or the maximum rate permitted by Applicable Laws, whichever is less...

                        Due to the nature of artificial intelligence and machine learning, the information generated by
                        these features may be inaccurate. Product features that include artificial intelligence or machine
                        learning models are not human and are not a substitute for human oversight. Add at the end of
                        Section 5.2: If Customer does not pay undisputed fees within the Payment Period, Customer will
                        pay interest on the overdue amounts at the rate of 1.5% per month or the maximum rate permitted
                        by Applicable Laws, whichever is less. In addition, Customer will reimburse Provider for all costs of
                        collection (including attorneys fees).
                        Add at the end of Section 5.2: If Customer does not pay undisputed fees within the Payment
                        Period, Customer will pay interest on the overdue amounts at the rate of 1.5% per month or the
                        maximum rate permitted by Applicable Laws, whichever is less. In addition, Customer will
                        reimburse Provider for all costs of collection (including attorneys fees).
                    </p>
                </div>
            </div>

        </div>
    );
}
