import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const Chat = () => {
  const chatModel = useGLTF("/models/chat.glb", true);

  return (
    <Project
      ScreenComponent={ChatScreen}
      position={[-120, 0, -70]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Chat App"
      model={chatModel}
      scale={[2, 1.8, 2]}
    />
  );
};

export default Chat;

const ChatScreen: React.FC = () => (
  <PlateScreen
    title="Splitr.AI — AI Features"
    description="AI-powered expense interpretation using Google Gemini API lets users type expenses in natural language. OAuth-based auth via Clerk, automated email receipts via Resend, and a clean Next.js App Router architecture make it production-ready."
    visitLink="#"
    codeLink="#"
  />
);
