import React, { useEffect, useState } from "react";
import Lamborghini from "../components/lamborghini";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
// import HeroCamera from "../components/HeroCamera";

const LamborghiniSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setRotationY(window.scrollY * 0.005); // Adjust rotation speed as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh]">
      {/* 3D Model Canvas */}
      <div
        className="absolute left-0 w-full h-full flex justify-center pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }} // Parallax effect
      >
        <div className="ml-3 text-center text-white">
          <h2
            className="text-[15vw] mt-4 font-sans font-extralight mb-12"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Slightly different parallax speed for more depth
          >
            CENTENARIO
          </h2>
        </div>
      </div>

      <Canvas className="flex w-full h-full items-center justify-center">
        <Suspense>
          <Leva hidden />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          {/* <HeroCamera> */}
          <Lamborghini
            scale={rotationY * 0.45}
            position={[0, -1.5, 0]}
            // rotation={[0, rotationY, rotationY * 1.3]} // Rotation changes based on scroll
            rotation={[0, rotationY * -0.8, 0]} // Rotation changes based on scroll
          />
          {/* </HeroCamera> */}

          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <directionalLight position={[-10, 10, 10]} intensity={2} />
          <directionalLight position={[10, 10, -10]} intensity={2} />
          <directionalLight position={[-10, 10, -10]} intensity={2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LamborghiniSection;
