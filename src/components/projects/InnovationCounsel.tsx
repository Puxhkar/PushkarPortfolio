import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const InnovationCounsel = () => {
  const [iicModel, eventsModel, loginModel] = useGLTF(
    ["/models/iic.glb", "/models/iicEvents.glb", "/models/iicLogin.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={ICScreen}
      position={[-60, 0, -40]}
      title="Splitr.AI"
      rotation={[0, -Math.PI / 2, 0]}
      model={iicModel}
      modelRight={eventsModel}
      modelLeft={loginModel}
    />
  );
};

export default InnovationCounsel;

const ICScreen: React.FC = () => (
  <PlateScreen
    title="Splitr.AI"
    description="An AI-powered SaaS expense manager built with Next.js (App Router), React 19, and Tailwind CSS. Users log expenses in plain English and have them auto-categorized by Google Gemini API. Integrated Clerk for OAuth auth and Resend for transactional emails."
    visitLink="#"
    codeLink="#"
  />
);
