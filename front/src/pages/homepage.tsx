import { MyCanvas } from "../components/3D/canvas";
import Card from "../components/cardAnimation/cardAnimation";
import Service from "../components/services/services";
import Products from "../components/shop/products";
function Home() {
  return (
    <>
      <MyCanvas />
      <Card />
      <Service />
      <Products />
    </>
  );
}
export default Home;
