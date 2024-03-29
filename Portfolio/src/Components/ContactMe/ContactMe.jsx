import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {  addDoc, collection } from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { contact } from "../../data";

const ContactMe = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [values, setValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const [error, setError] = useState({});


  const userCollectionRef = collection(db, "contacts");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
  };

  const validate = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "Name is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email))) {
      errors.email = "Email is not valid";
    }

    if (!value.subject) {
      errors.subject = "Subject is required";
    }
    if (!value.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    setError(validate(values));
    setIsSubmit(true);
    if (!values.name || !values.email || !values.subject || !values.message) {
      toast.warn("Please fill all the fields");
    } else {
      try {
        addDoc(userCollectionRef, {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        });
        setValues(initialValues);
        toast.success("Message sent successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error]);

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contáctame
          </h2>
          <p className="subtitle">
          ¿Quieres saber más sobre mí? <br />
          ¡No lo dudes y contáctame!
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            id="contactForm"
            onSubmit={handleSubmit}
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                name="name"
                value={values.name}
                className="input"
                type="text"
                placeholder="Su nombre"
                onChange={handleOnChange}
              />
              {<p className="text-red-500">{error.name}</p>}
              <input
                name="email"
                value={values.email}
                className="input"
                type="email"
                placeholder="Su email"
                onChange={handleOnChange}
              />
              {<p className="text-red-500">{error.email}</p>}
            </div>
            <input
              name="subject"
              value={values.subject}
              className="input"
              type="text"
              placeholder="Asunto"
              onChange={handleOnChange}
            />
            {<p className="text-red-500">{error.subject}</p>}
            <textarea
              name="message"
              value={values.message}
              className="textarea"
              placeholder="Su mensaje"
              onChange={handleOnChange}
            ></textarea>
            {<p className="text-red-500">{error.message}</p>}
            <button
              type="submit"
              className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </section>
  );
};

export default ContactMe;

