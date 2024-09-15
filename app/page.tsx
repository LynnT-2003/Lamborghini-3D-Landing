"use client";

import LamborghiniSection from "./sections/LamborghiniSection";
import LamboRoadsterSection from "./sections/LamboRoadsterSection";
import Landing from "./sections/Landing";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen">
        <Landing />
      </div>
      <div className="pb-24">
        <LamborghiniSection />
      </div>

      {/* Footer */}
      <LamboRoadsterSection />
    </div>
  );
}
