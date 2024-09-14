import React from "react";
import Lamborghini from "../components/lamborghini";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";
import { OrbitControls } from "@react-three/drei";

const LamborghiniSection = () => {
  return (
    <div className="w-full h-screen pb-0 px-10 flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 h-1/2 lg:h-full">
        <Canvas className="w-full h-full">
          <Suspense>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <HeroCamera>
              <Lamborghini
                scale={4}
                position={[1, -3, 0]}
                rotation={[0, -1, 0]}
              />
            </HeroCamera>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <directionalLight position={[-10, 10, 10]} intensity={2} />
            <directionalLight position={[10, 10, -10]} intensity={2} />
            <directionalLight position={[-10, 10, -10]} intensity={2} />
          </Suspense>
        </Canvas>
      </div>

      <div className="mt-16 md:mt-0 w-full lg:w-1/3 h-1/2 lg:h-full p-6 flex justify-center items-center">
        <div className="ml-3">
          <h2 className="text-7xl text-white font-thin mb-12">CENTARIO</h2>
          <p className="ml-1 text-lg font-sans font-extralight leading-loose text-gray-300">
            The Lamborghini Centenario exemplifies the innovative design and
            engineering skills of the House of the Raging Bull. The finest
            possible tribute to our founder Ferruccio Lamborghini on the
            centenary of his birth, it is an homage to his vision and the future
            he believed in—a vision that we at Lamborghini still embrace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LamborghiniSection;
