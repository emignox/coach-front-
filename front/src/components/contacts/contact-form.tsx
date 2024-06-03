import { useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { CustomButton } from "../blocs/Custom-button";
import Titles from "../blocs/titles";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email inviata con successo!");
          },
          (error) => {
            console.log(error.text);
            alert("Errore nell'invio dell'email.");
          }
        );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen space-y-5 md:items-start md:p-20 md:flex-row md:justify-center md:gap-52">
        <div className="flex flex-col items-center justify-center">
          <Titles
            title="Contat me "
            className="w-full font-black text-center md:w-1/2 "
          />
          <img
            className="w-full rounded-full h-1/2 md:w-4/5 md:h-4/5"
            src="https://ideogram.ai/assets/image/balanced/response/mH4dJUEYTUCvfUvs234MxA"
            alt=""
          />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center w-4/5 py-32 space-y-4 text-black transition duration-500 transform border-4 md:w-1/2 rounded-2xl hover:border-custom-red"
        >
          <label
            htmlFor="from_name"
            className="text-lg font-thin text-gray-100"
          >
            Name:
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            className="w-3/5 font-thin bg-transparent border-b border-gray-100 focus:outline-none"
          />

          <label
            htmlFor="from_email"
            className="text-lg font-thin text-gray-100"
          >
            Email:
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            required
            className="w-3/5 font-thin bg-transparent border-b border-gray-100 focus:outline-none"
          />

          <label htmlFor="message" className="text-lg font-thin text-gray-100">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-3/5 p-2 text-gray-100 bg-transparent border border-gray-300 rounded focus:outline-none"
          />

          <CustomButton value="Invia" type="submit" className="p-2 " />
        </form>
      </div>
    </>
  );
}

export default ContactForm;
