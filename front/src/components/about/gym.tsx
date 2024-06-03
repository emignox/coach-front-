import training from "/training.png";
import P from "../blocs/paragraph";

function Gym() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-5 font-black text-gray-100 md:flex-row-reverse md:flex md:gap-20 md:justify-center md:items-center">
        <img className="mb-12 w-2/2 md:w-3/12" src={training} alt="" />
        <P
          className="w-4/6 text-2xl font-thin text-start md:w-2/5 md:text-end"
          text=" I've been practicing weight training since I was 19. It not only makes
          you stronger and improves your health but also boosts your
          self-confidence and helps you overcome your limits."
        />
      </div>
    </>
  );
}
export default Gym;
