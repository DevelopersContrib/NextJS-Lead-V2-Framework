"use client";

import { useState, useEffect } from "react";
import LoadingState from "./LoadingState";
import ErrorBlock from "./ErrorBlock";

function LeadForm({ domain, setSuccess }) {
  const initialValues = {
    isLoading: false,
    domain: domain,
    email: "",
  };

  const initialErrors = {
    validate: false,
    emailError: "",
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [emailExist, setEmailExist] = useState("");

  useEffect(() => {
    const validateErrors = () => {
      const dataErrors = {
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "" : "Invalid Email"),
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setEmailExist("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = !Object.values(errors).some((v) => v);
    setErrors({ ...errors, ["validate"]: true });
    if (isValid) {
      setData({ ...data, ["isLoading"]: true });
      try {
        // console.log('submit')
        const response = await fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setData({ ...data, ["isLoading"]: false });

        if (response.ok) {
          const res = await response.json();

          console.log(res.lead.success);
          if (res.lead.success == "success") {
            setSuccess(true);
            // console.log('done....')
          } else {
            setEmailExist(res.lead.success);
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
    }
  };

  const showStep = () => {
    // console.log(errors)
    return (
      <div className="">
        <div className="input-group input-group-lg mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
            placeholder="Email address..."
          />
          <button
            className="btn btn-danger tw-px-[3rem!important]"
            type="button"
            onClick={handleSubmit}
          >
            Join now!
          </button>
        </div>
        <p className="tw-text-m tw-text-gray-400 tw-mt-2 tw-text-center">
          Be part of a revolutionary ecosystem powered by CONTRIB tokens. Build, collaborate, and
          earn in ways youve never imagined.
        </p>
        <p className="tw-text-sm tw-text-gray-500 tw-mt-2 tw-text-center">
          Your information is safe with us.{" "}
          <span className="tw-font-bold">We use industry-standard encryption.</span>
        </p>
        {errors.validate ? <ErrorBlock msg={errors.emailError} /> : null}
        {emailExist ? <ErrorBlock msg={emailExist} /> : null}
      </div>
    );
  };

  return <>{data.isLoading ? <LoadingState /> : showStep()}</>;
}

export default LeadForm;
