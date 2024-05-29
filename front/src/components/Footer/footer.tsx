import { FaGithub, FaFacebookF, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div
        className={`flex flex-col h-screen  opacity-75 bg-footer_background gap-12 items-center justify-between lg:h-screen bg-contain lg:bg-cover bg-bottom bg-no-repeat md:bg-bottom md:pt-52 pt-96`}
      >
        <div className="flex flex-col space-x-10 justify-center items-center md:flex-row gap-32 md:space-y-0">
          <FaGithub
            onClick={() => window.open("https://github.com/emignox")}
            className="text-gray-100 text-9xl cursor-pointer hover:scale-110 transform transition duration-300  "
          />
          <FaFacebookF
            onClick={() =>
              window.open("https://www.facebook.com/emanuele.polizzotto ")
            }
            className="text-gray-100 text-9xl cursor-pointer hover:scale-110 transform transition duration-300"
          />
          <FaInstagramSquare
            onClick={() => window.open("https://www.instagram.com/ema97_/")}
            className="text-gray-100 text-9xl cursor-pointer hover:scale-110 transform transition duration-300"
          />
        </div>
        <p className="text-center text-gray-100 py-4">
          © {date} Poli. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
