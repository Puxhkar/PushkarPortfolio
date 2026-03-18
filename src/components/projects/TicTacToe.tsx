import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const TicTacToe = () => {
  const [tttModel, tttLeft] = useGLTF(
    ["/models/ttt.glb", "/models/ttt1.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={TTTScreen}
      position={[-120, 0, -140]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Tic Tac Toe"
      model={tttModel}
      modelLeft={tttLeft}
      scale={[1.2, 1.2, 1]}
      subScale={0.8}
    />
  );
};

export default TicTacToe;

const TTTScreen: React.FC = () => (
  <PlateScreen
    title="MessMatee — Smart Dining"
    description="Highlights: QR-based student entry, real-time order tracking, role-based dashboards for admins and students, and automated daily/weekly reports. Backend powered by Prisma ORM with PostgreSQL for reliable, scalable data management."
    visitLink="#"
    codeLink="#"
  />
);
