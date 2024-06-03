import { FaGithub, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  let margin;

  if (location.pathname === "/booking") {
    margin = "mt-[900px]";
  } else if (location.pathname === "/contacts") {
    margin = "mt-[300px]";
  }
  const date = new Date().getFullYear();
  return (
    <>
      <div
        className={`flex flex-col h-[300Px] md:h-screen  opacity-75 bg-footer_background gap-12 items-center ${margin} justify-center lg:h-screen bg-cover h-[300px] lg:bg-cover bg-bottom bg-no-repeat md:bg-contain md:bg-bottom md:pt-52  md:mt-0`}
      >
        <div className="flex items-center justify-center gap-3 md:flex-row md:space-y-0 md:gap-20">
          <FaGithub
            onClick={() => window.open("https://github.com/emignox")}
            className="text-5xl text-gray-100 transition duration-300 transform cursor-pointer md:text-9xl hover:scale-110 "
          />
          <FaFacebookF
            onClick={() =>
              window.open("https://www.facebook.com/emanuele.polizzotto ")
            }
            className="text-5xl text-gray-100 transition duration-300 transform cursor-pointer md:text-9xl hover:scale-110"
          />
          <FaInstagramSquare
            onClick={() => window.open("https://www.instagram.com/ema97_/")}
            className="text-5xl text-gray-100 transition duration-300 transform cursor-pointer md:text-9xl hover:scale-110"
          />
        </div>
        <p className="relative w-full py-4 text-center text-gray-100 top-52">
          © {date} Poli. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
