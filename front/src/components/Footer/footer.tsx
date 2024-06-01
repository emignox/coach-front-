import { FaGithub, FaFacebookF, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div
        className={`flex flex-col h-screen  opacity-75 bg-footer_background gap-12 items-center justify-between lg:h-screen bg-contain lg:bg-cover bg-bottom bg-no-repeat md:bg-bottom md:pt-52 mt-[900px] md:mt-0`}
      >
        <div className="flex flex-col items-center justify-center gap-32 space-x-10 md:flex-row md:space-y-0">
          <FaGithub
            onClick={() => window.open("https://github.com/emignox")}
            className="text-gray-100 transition duration-300 transform cursor-pointer text-9xl hover:scale-110 "
          />
          <FaFacebookF
            onClick={() =>
              window.open("https://www.facebook.com/emanuele.polizzotto ")
            }
            className="text-gray-100 transition duration-300 transform cursor-pointer text-9xl hover:scale-110"
          />
          <FaInstagramSquare
            onClick={() => window.open("https://www.instagram.com/ema97_/")}
            className="text-gray-100 transition duration-300 transform cursor-pointer text-9xl hover:scale-110"
          />
        </div>
        <p className="py-4 text-center text-gray-100">
          © {date} Poli. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
