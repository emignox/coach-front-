import { card_About } from "./cardData-about";
import P from "../blocs/paragraph";
import Titles from "../blocs/titles";

function Card_About() {
  return (
    <>
      <div className="w-full h-screen">
        <Titles
          title="Why a coach ?"
          className="font-black text-center text-gray-100 "
        />
        <div className="flex flex-col items-center justify-center gap-12 md:gap-10 lg:gap-20 md:flex md:flex-row md:justify-center md:items-center ">
          <div className="grid grid-cols-1 gap-10 text-gray-100 lg:gap-32 md:grid-cols-3">
            {card_About.map((card, index) => (
              <div
                key={index}
                className="w-56 p-2 text-gray-100 duration-200 transform border-2 border-gray-100 rounded-lg cursor-pointer hover:border-custom-red text-gray-10"
              >
                <img src={card.img} alt="card" className="w-52 h-52" />
                <h2 className="w-full py-3 font-black text-center">
                  {card.title}
                </h2>
                <P className="w-full text-center" text={card.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card_About;
