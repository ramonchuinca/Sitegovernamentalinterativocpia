import { createRoot } from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./app/App.tsx";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
);