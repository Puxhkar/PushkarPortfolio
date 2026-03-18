import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const MuseumCounsel = () => {
  const [mcModel, mcLeft, mcRight] = useGLTF(
    ["/models/mc.glb", "/models/mc1.glb", "/models/mc3.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={MCScreen}
      position={[-60, 0, -140]}
      title="StudentCodeBox"
      rotation={[0, -Math.PI / 2, 0]}
      model={mcModel}
      modelLeft={mcLeft}
      modelRight={mcRight}
      scale={1}
    />
  );
};

export default MuseumCounsel;

const MCScreen: React.FC = () => (
  <PlateScreen
    title="StudentCodeBox"
    description="A SaaS-based coding education platform built with React, Next.js, Node.js, Express, and PostgreSQL. Students log in, pick problems, write code in a live editor, and get real-time evaluation feedback. Role-based access for instructors vs. students via Clerk."
    visitLink="#"
    codeLink="#"
  />
);
