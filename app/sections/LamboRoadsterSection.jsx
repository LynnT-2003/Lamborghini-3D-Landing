import React, { useState, useEffect } from "react";
import LamboRoadster from "../components/lamboRoadster";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";
// import { OrbitControls } from "@react-three/drei";

const LamboRoadsterSection = () => {
  return (
    <>
      <div className="w-full h-screen pb-0 px-10 flex flex-col lg:flex-row">
        {/* Left section - 3D Canvas */}
        <div className="w-full lg:w-2/3 h-1/2 lg:h-full">
          <Canvas className="w-full h-full">
            <Suspense>
              <Leva hidden />
              <PerspectiveCamera makeDefault />
              <HeroCamera>
                <LamboRoadster
                  scale={4}
                  position={[-1, -2.5, 0]}
                  rotation={[0, 0, 0]}
                />
              </HeroCamera>
              <ambientLight intensity={2} />
              {/* <directionalLight position={[10, 10, 10]} intensity={0.5} /> */}

              <directionalLight position={[10, 10, 10]} intensity={2} />
              <directionalLight position={[-10, 10, 10]} intensity={2} />
              <directionalLight position={[10, 10, -10]} intensity={2} />
              <directionalLight position={[-10, 10, -10]} intensity={2} />
            </Suspense>
          </Canvas>
        </div>

        {/* Right section - Description */}
        <div className="ml-6 mt-16 md:mt-0 w-full lg:w-1/3 h-1/2 lg:h-full p-6 flex justify-center items-center">
          <div>
            <h2 className="text-5xl text-white font-extralight mb-8">
              Centenario: Roadster Edition
            </h2>
            <p className="text-lg font-light text-gray-500">
              Inspired by Sukuna&apos;s Malevolent Shrine, Malevolent
              Kitchen&apos;s guaranteed-code ability allows the user to
              relentlessly produce high-quality code until nothing but dust
              remains of all the bugs that have been caught in its effective
              range, via two types of coding attacks: Design and Decode.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LamboRoadsterSection;
