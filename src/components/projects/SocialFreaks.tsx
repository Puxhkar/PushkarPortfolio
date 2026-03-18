import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const SocialFreaks = () => {
  const [sfModel, mfModel, fsModel] = useGLTF(
    ["/models/sf.glb", "/models/mf.glb", "/models/fs.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={SFScreen}
      position={[-120, 0, -10]}
      rotation={[0, -Math.PI / 2, 0]}
      title="MessMatee"
      model={sfModel}
      modelLeft={mfModel}
      modelRight={fsModel}
      scale={3}
    />
  );
};

export default SocialFreaks;

const SFScreen: React.FC = () => (
  <PlateScreen
    title="MessMatee"
    description="A full-stack role-based mess management system built with Next.js, Node.js, Express, PostgreSQL, and Prisma. Digitizes dining operations including food ordering, mess subscriptions, and QR-based entry. Features real-time order tracking, analytics dashboards, and automated reports."
    visitLink="#"
    codeLink="#"
  />
);
