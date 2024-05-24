import Logo from "/logo.svg";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setIsOpen(!isOpen);
  }
  const imgStyle = "w-1/6 lg:w-1/12 2xl:w-1/12 cursor-pointer";
  const listSyle = "list-item";
  return (
    <>
      <section className=" p-1 flex lg:p-5 ">
        <img
          onClick={() => navigate("/")}
          className={`${imgStyle} hidden md:block `}
          src={Logo}
          alt=""
        />

        <div className="flex  justify-between w-full  items-center">
          <img
            onClick={() => navigate("/")}
            className={`${imgStyle} md:hidden `}
            src={Logo}
            alt=""
          />
          <button className="md:hidden" onClick={handleClick}>
            {isOpen ? (
              <IoClose className=" text-5xl" />
            ) : (
              <IoMenu className=" text-5xl" />
            )}
          </button>
          {isOpen && (
            <div className="absolute z-10 top-16 left-0    rounded-2xl w-full  bg-[#e9e8df] transition-transform transform translate-Y-0 overflow-auto">
              <ul className="flex  flex-col items-center justify-center gap-y-5 p-10">
                <li
                  className={`${listSyle} focus:text-red-500`}
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className={`${listSyle}`}
                  onClick={() => navigate("/about")}
                >
                  About{" "}
                </li>
                <li
                  className={`${listSyle}`}
                  onClick={() => navigate("/session")}
                >
                  Book a Session
                </li>
                <li
                  className={`${listSyle}`}
                  onClick={() => navigate("/advice")}
                >
                  Advice
                </li>
                <li
                  className={`${listSyle}`}
                  onClick={() => navigate("/contacts")}
                >
                  Contacts
                </li>
              </ul>
            </div>
          )}
          <ul className="hidden md:flex  w-full justify-center  items-center md:gap-x-24">
            <li
              className={`${listSyle} focus:text-red-500`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li className={`${listSyle}`} onClick={() => navigate("/about")}>
              About{" "}
            </li>
            <li className={`${listSyle}`} onClick={() => navigate("/session")}>
              Book a Session
            </li>
            <li className={`${listSyle}`} onClick={() => navigate("/advice")}>
              Advice
            </li>
            <li className={`${listSyle}`} onClick={() => navigate("/contacts")}>
              Contacts
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Nav;
