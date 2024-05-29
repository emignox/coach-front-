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

  const imgStyle = "w-1/6 md:w-20 lg:w-20 2xl:w-20 cursor-pointer";
  const listSyle = "list-item";
  return (
    <>
      <section className="flex p-1 lg:p-5">
        <img
          onClick={() => navigate("/")}
          className={`${imgStyle} hidden md:block `}
          src={Logo}
          alt=""
        />

        <div className="flex items-center justify-between w-full">
          <img
            onClick={() => navigate("/")}
            className={`${imgStyle} md:hidden `}
            src={Logo}
            alt=""
          />
          <button className="md:hidden" onClick={handleClick}>
            {isOpen ? (
              <IoClose className="text-5xl text-gray-100 " />
            ) : (
              <IoMenu className="text-5xl text-gray-100 " />
            )}
          </button>
          {isOpen && (
            <div className="absolute z-10 top-16 left-0 text-gray-100    rounded-2xl w-full  bg-[#111] transition-transform transform translate-Y-0 overflow-auto ">
              <ul className="flex flex-col items-center justify-center p-10 gap-y-5">
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
                  onClick={() => navigate("/booking")}
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
          <ul className="items-center justify-center hidden w-full font-thin text-gray-100 md:flex md:gap-x-16">
            <li
              className={`${listSyle} focus:text-red-500`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li className={`${listSyle}`} onClick={() => navigate("/about")}>
              About{" "}
            </li>
            <li className={`${listSyle}`} onClick={() => navigate("/booking")}>
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
