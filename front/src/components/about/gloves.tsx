import Titles from "../blocs/titles";
import P from "../blocs/paragraph";
import { CustomButton } from "../blocs/Custom-button";
import { useNavigate } from "react-router-dom";

function Gloves() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col items-center mt-[800px] mb-[200px] md:mt-0  justify-center text-gray-100 md:h-screen "
        style={{
          backgroundImage: "url('/gloves.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Titles
          title="Boxing"
          className="font-black text-center text-gray-100 "
        />
        <P
          className="w-2/4 text-center text-gray-100"
          text="“Book a session with me and you'll realize it's not a violent sport but useful for self-defense. It enhances your coordination, engages your brain, and leaves no room for negative thoughts."
        />
        <CustomButton
          type="button"
          value="Book a session"
          className="mt-5"
          onClick={() => navigate("/booking")}
        />
      </div>
    </>
  );
}
export default Gloves;
