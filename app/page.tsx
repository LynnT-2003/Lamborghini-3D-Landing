"use client";

import LamborghiniSection from "./sections/LamborghiniSection";
import Landing from "./sections/Landing";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen">
        <Landing />
      </div>
      <div className="">
        <LamborghiniSection />
      </div>
    </div>
  );
}
