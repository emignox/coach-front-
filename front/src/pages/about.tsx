import Me from "../components/about/me";
import Article from "../components/about/article";
import Gym from "../components/about/gym";
import Card_About from "../components/about/card-about";
import Gloves from "../components/about/gloves";
import { Scroll } from "../components/scroll-animation";
function About() {
  return (
    <>
      <div className="my-10">
        <Scroll>
          <Me />
        </Scroll>
        <Scroll>
          <Article />
        </Scroll>
        <Scroll>
          <Gym />
        </Scroll>
        <Scroll>
          <Card_About />
        </Scroll>
        <Scroll>
          <Gloves />
        </Scroll>
      </div>
    </>
  );
}
export default About;
