import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "../widgets/layout";

const InputField = (props) => {
  const { handleChange, label, name, type, value } = props;
  return (
    <div className="mb-5">
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2"
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
      />
    </div>
  );
};

const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className="mb-5">
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        onChange={handleChange}
        defaultValue="role"
        name={name}
        className="w-full border-b-2 py-2 outline-none"
      >
        <option value="role" disabled>
          I am interested in
        </option>
        <option value="investing" className="py-1">
          Investing
        </option>
        <option value="partnership" className="py-1">
          Partnership
        </option>
        <option value="applying_for_funding" className="py-1">
          Applying for research funding
        </option>
        <option value="website_sn" className="py-1">
          Website and social network
        </option>
        <option value="smart_contract" className="py-1">
          SMART contract development
        </option>
        <option value="outreach" className="py-1">
          Ourreach and community expansion
        </option>
        <option value="education" className="py-1">
          Cancer education efforts
        </option>
        <option value="others"s className="py-1">
          Others
        </option>
      </select>
    </div>
  );
};

const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div>
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <textarea
        onChange={handleChange}
        name={name}
        rows="4"
        className="w-full border-b-2 outline-none bg-gray-100 p-2"
        value={value}
      ></textarea>
    </div>
  );
};

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
      <p>your message submitted successfully</p>
    </div>
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_wiwv75m", "template_kc3ynws", values, "G2eaWbB441h7zl1q9")
      .then(
        (response) => {
          setValues({
            fullName: "",
            email: "",
            role: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section id="contact" className="bg-white px-4 pb-20 pt-4">
      <div className="container mx-auto">
        <PageTitle
          section="Contact Us"
          heading="We need your help to move this project forward!"
        >
          Please complete this form and we will get back to you as soon as possible.
        </PageTitle>
        {status && renderAlert()}
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full mt-12 lg:w-5/12"
        >
          <div className="mb-auto flex gap-8">
            <InputField
              value={values.fullName}
              handleChange={handleChange}
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="John Doe"
            />
            <InputField
              value={values.email}
              handleChange={handleChange}
              label="E-Mail"
              name="email"
              type="email"
              placeholder="jphn@example.com"
            />
          </div>
          <div className="mb-8">
            <SelectField
              handleChange={handleChange}
              name="role"
              label=""
            />
          </div>
          <TextareaField
            value={values.message}
            handleChange={handleChange}
            label="Your message here (optional)"
            name="message"
          />
          <button
            type="submit"
            className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
          >
            Send <ChevronRightIcon className="w-6 ml-2 float-right" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
