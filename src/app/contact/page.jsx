"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello ";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true)
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true)
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-8">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl sm:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-white rounded-xl text-md sm:text-xl flex flex-col gap-8 justify-center p-8 sm:p-12 md:p-16 lg:p-12 xl:p-24 " ref={form} onSubmit={sendEmail}>
          <span>Dear Diniru Dev,</span>
          <textarea
            className="bg-transparent border-b-2 border-b-gray-300 outline-none resize-none"
            rows={4}
            name="message"
          />
          <span>My e-mail address is, </span>
          <input
            className="bg-transparent border-b-2 border-b-gray-300 outline-none"
            type="email"
            name="user_email"
          />
          <span>Regards</span>
          <button className="bg-purple-300 rounded font-semibold text-gray-600 p-2 text-md sm:p-3">
            Send
          </button>
          {success && <span className="text-green-600 font-semibold">Your message has be sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
