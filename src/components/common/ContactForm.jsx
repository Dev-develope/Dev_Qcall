import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { convertToE164, isValidPhoneNumber } from "src/utils/utils";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter valid email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email"),
    website: Yup.string().url("Enter valid website url"),
    phone: Yup.string()
      .required("Phone number is required")
      .test("valid-phone", "Enter valid phone number", (value) => {
        return isValidPhoneNumber(value);
      }),
    message: Yup.string().required("Message is required"),
  });
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      website: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const requestData = {
        full_name: values?.name,
        email: values?.email,
        website: values?.website,
        phone: values?.phone,
        message: values?.message,
      };
      handleSubmitData(requestData);
    },
  });

  const handleSubmitData = async (requestData) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.qcall.ai/api/v1/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        if (result.success) {
          formik.resetForm();
          toast.success(`${result.message}`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(`${result.message}`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        
      } else {
        toast.error(`${result.message}`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("Ops Something went wrong!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-8">
        <p className="text-gray-500 font-medium">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Send Us <span className="text-sky-500 italic">Messages</span>
        </h2>
        {/* <div className="w-6 h-6 border-2 border-sky-500 rounded-full mx-auto mt-2" /> */}
      </div>

      <div className="w-full max-w-3xl bg-indigo-50 p-8 md:p-12 rounded-lg shadow-xl">
        <div  className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
                <input
                id="name"
                name="name"
                placeholder="Full Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="p-3 rounded-lg border w-full outline-none focus:ring-2 focus:ring-sky-500"
                />
                {formik.touched.name && formik.errors.name ? (
                    <div style={{color: "red", fontSize: 14, marginTop: 10}}>
                    {formik.errors.name.toString()}
                    </div>
                ) : null}
            </div>
            <div>
                <input
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="p-3 rounded-lg border w-full outline-none focus:ring-2 focus:ring-sky-500"
                />

{               formik.touched.email && formik.errors.email ? (
                    <div style={{color: "red", fontSize: 14, marginTop: 10}}>
                    {formik.errors.email.toString()}
                    </div>
                ) : null}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
                <input
                id="website"
                name="website"
                placeholder="Website"
                onChange={formik.handleChange}
                value={formik.values.website}
                className="p-3 rounded-lg border w-full outline-none focus:ring-2 focus:ring-sky-500"
                />
                
                {formik.touched.website && formik.errors.website ? (
                    <div style={{color: "red", fontSize: 14, marginTop: 10}}>
                    {formik.errors.website.toString()}
                    </div>
                ) : null}
            </div>
            {/* Using react-phone-input-2 for phone input */}
            <div className="phone-input-wrapper">
              <PhoneInput
                inputProps={{
                    name: "phone",
                    id: "phone",
                    required: true,
                    className: "bg-transparent w-full h-[50px] border rounded-lg pl-12"
                }}
                buttonStyle={{
                    borderRadius: "8px",
                }}
                country={"us"}
                value={formik.values.phone}
                onChange={(value, country, event, formattedValue) => {
                    let myPhone = convertToE164(formattedValue);
                    formik.setFieldValue("phone", myPhone);
                }}
                />
              {formik.touched.phone && formik.errors.phone ? (
                    <div style={{color: "red", fontSize: 14, marginTop: 10}}>
                    {formik.errors.phone.toString()}
                    </div>
                ) : null}
            </div>
          </div>
          <div>
            <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.message}
                className="p-3 rounded-lg border w-full outline-none focus:ring-2 focus:ring-sky-500"
            />
            {formik.touched.message && formik.errors.message ? (
                <div style={{color: "red", fontSize: 14, marginTop: 10}}>
                {formik.errors.message.toString()}
                </div>
            ) : null}
          </div>
          <div className="text-center">
            <button
              disabled={isLoading}
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 cursor-pointer"
              onClick={() => formik.handleSubmit()}
            >
              {isLoading ? "Sending..." : "Send Us Message"}
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS to adjust react-phone-input-2 styling */}
      <style jsx>{`
        /* Custom styles for phone input to match design */
        :global(.phone-input-wrapper .react-tel-input .form-control) {
          width: 100%;
          height: 48px;
          border-radius: 0.5rem;
        }
        
        :global(.phone-input-wrapper .react-tel-input .flag-dropdown) {
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
          border-right: 1px solid #E5E7EB;
          background-color: white;
        }
        
        :global(.phone-input-wrapper .react-tel-input .selected-flag) {
          padding: 0 8px 0 12px;
        }
        
        :global(.phone-input-wrapper .react-tel-input .selected-flag:hover, 
                .phone-input-wrapper .react-tel-input .selected-flag:focus) {
          background-color: transparent;
        }
        
        :global(.phone-input-wrapper .react-tel-input .flag-dropdown.open) {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;