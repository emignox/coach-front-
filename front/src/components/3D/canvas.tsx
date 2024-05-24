import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Model } from "./Weight";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import TextContent from "./text-content";

const CameraController = () => {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 5 - camera.position.x) * 0.01;
    camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.01;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export const MyCanvas = () => {
  return (
    <>
      <div className="md:flex md:flex-row  md:justify-between text-5xl  flex flex-col justify-center items-center lg:text-7xl my-32 lg:px-32 font-black">
        <div className="w-full h-[400px] md:w-1/2   ">
          <Suspense fallback={null}>
            <Canvas className="w-full md:w-1/2 ">
              <TextContent />
              {/* <PerspectiveCamera makeDefault position={[0, 0, 8]} /> */}
              <CameraController />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.1}
                enableDamping={true}
              />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Stage>
                <Model position={[0, 0, 0]} />
              </Stage>
            </Canvas>
          </Suspense>
        </div>
        <div className="flex flex-col">
          <h1 className="  leading-relaxed">
            Excellence. <br /> Energy. <br /> Results.
          </h1>
          <button className="text-sm font-light border border-black w-32 bg-white hover:bg-custom-red transform transition duration-300  rounded-full py-2 ">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};
