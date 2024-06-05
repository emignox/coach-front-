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
            alert("Email sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Error sending email.");
          }
        );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-5 ">
        <div className="flex flex-col items-center w-full space-y-10 lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-10">
          <div className="flex flex-col items-center justify-center space-y-5 text-center lg:text-left">
            <Titles
              title="Contact me <br/> for any information"
              className="text-4xl font-black text-gray-100"
            />
            <img
              className="w-4/5 rounded-full shadow-lg lg:w-full lg:max-w-md"
              src="https://ideogram.ai/assets/image/balanced/response/mH4dJUEYTUCvfUvs234MxA"
              alt="Contact"
            />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg"
          >
            <div className="w-full">
              <label
                htmlFor="from_name"
                className="block mb-2 text-lg font-thin text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-red"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="from_email"
                className="block mb-2 text-lg font-thin text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-red"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-thin text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-red"
              />
            </div>

            <CustomButton
              value="Send"
              type="submit"
              className="px-6 py-3 shadow-md"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
