import Titles from "../blocs/titles";
function About_Me() {
  return (
    <>
      <div className="flex flex-col items-center h-[50vh] justify-center gap-5 font-black text-gray-100  md:flex md:flex-row md:gap-44">
        <img className="md:ml-5" src="/ema.svg" alt="" />
        <Titles
          title=" I’Am your <br/>  Personal Trainer"
          className="text-4xl text-start md:text-6xl"
        />
      </div>
    </>
  );
}

export default About_Me;
