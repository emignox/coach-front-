import Titles from "../blocs/titles";
import Section from "../blocs/sections";
import { useState } from "react";
import { CustomButton } from "../blocs/Custom-button";

function Products() {
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen my-96 md:my-52 gap-y-12">
        <img
          className="w-1/4 mx-auto md:w-1/12"
          src="/products-logo.svg"
          alt=""
        />
        <Titles
          title="You can buy a T-Shirt on my shop"
          className="font-black text-center text-gray-100 "
        />
        <Section type="row" className="w-full gap-32 ">
          <img
            onMouseEnter={() => setHoveredImg("product1")}
            onMouseLeave={() => setHoveredImg(null)}
            className={`  cursor-pointer w-4/5 md:w-3/12 rounded-lg transition-all duration-200 transform hover:scale-110 ${hoveredImg === "product2" ? "opacity-0" : ""}`}
            src="/product1.svg"
            alt=""
            onClick={() =>
              window.open(
                "https://poli.teemill.com/product/emanuele-polizzotto-collection-basic-cotton-minimal/",
                "_blank"
              )
            }
          />
          <img
            onMouseEnter={() => setHoveredImg("product2")}
            onMouseLeave={() => setHoveredImg(null)}
            className={` cursor-pointer  w-4/5 md:w-3/12 rounded-lg transition-all duration-300 transform hover:scale-110 ${hoveredImg === "product1" ? "opacity-0" : ""}`}
            src="/product2.svg"
            alt=""
            onClick={() =>
              window.open(
                "https://poli.teemill.com/product/emanuele-polizzotto-collection-basic-cotton-minimal/",
                "_blank"
              )
            }
          />
        </Section>
        <p className="w-5/6 text-center text-gray-100 md:w-2/5">
          Thanks to Teemill, an online platform, you can purchase T-shirts with
          my logo printed in a minimal style. The shirts are made from 100%
          natural and sustainable cotton.
        </p>
        <CustomButton
          value="Buy now"
          className="text-center"
          onClick={() =>
            window.open(
              "https://poli.teemill.com/product/emanuele-polizzotto-collection-basic-cotton-minimal/",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}

export default Products;
