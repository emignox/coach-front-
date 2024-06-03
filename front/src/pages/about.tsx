import Me from "../components/about/me";
import Article from "../components/about/article";
import Gym from "../components/about/gym";
import Card_About from "../components/about/card-about";
import Gloves from "../components/about/gloves";
function About() {
  return (
    <>
      <div className="my-10">
        <Me />
        <Article />
        <Gym />
        <Card_About />
        <Gloves />
      </div>
    </>
  );
}
export default About;
