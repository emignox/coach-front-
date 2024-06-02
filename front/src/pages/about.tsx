import Me from "../components/about/me";
import Article from "../components/about/article";
import Gym from "../components/about/gym";
function About() {
  return (
    <>
      <div className="my-10">
        <Me />
        <Article />
        <Gym />
      </div>
    </>
  );
}
export default About;
