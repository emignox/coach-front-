import { MyCanvas } from "../components/3D/canvas";
import Card from "../components/cardAnimation/cardAnimation";
import Service from "../components/services/services";
import Products from "../components/shop/products";
import { Scroll } from "../components/scroll-animation";
function Home() {
  return (
    <>
      <MyCanvas />
      <Scroll>
        <Card />
      </Scroll>
      <Service />
      <Scroll>
        <Products />
      </Scroll>
    </>
  );
}
export default Home;
