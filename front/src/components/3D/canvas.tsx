import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Model } from "./Weight";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import TextContent from "./text-content";
import { CustomButton } from "../blocs/Custom-button";

const CameraController = () => {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.01;
    camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.01;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export const MyCanvas = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-32 text-5xl font-black md:flex md:flex-row md:justify-between lg:text-7xl lg:px-32 gap-y-32">
        <div className="w-full h-[400px] md:w-1/2   ">
          <Suspense fallback={null}>
            <Canvas className="w-full md:w-1/2  rounded-2xl  bg-[#111] ">
              <TextContent />
              <CameraController />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.1}
                enableDamping={true}
                minAzimuthAngle={-Math.PI / 4} // -180 degrees
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
              />
              {/* <ambientLight /> */}
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, -10]} />
              <directionalLight position={[0, 10, 0]} intensity={9} />
              <Stage>
                <Model position={[0, 0, 0]} />
              </Stage>
            </Canvas>
          </Suspense>
        </div>
        <div className="flex flex-col justify-start text-gray-100 md:items-start ">
          <h1 className="leading-relaxed ">
            Excellence. <br /> Energy. <br /> Results.
          </h1>
          <CustomButton
            type="button"
            className=""
            onClick={() => console.log("Button clicked!")}
            value="Book Now"
          />
        </div>
      </div>
    </>
  );
};
