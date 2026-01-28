/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const backgroundAzul = "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(173, 232, 255, 1) 80%, rgb(13, 152, 194) 100%)"
const backgroundBranco = "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(224, 224, 224) 54%, rgb(199, 199, 199) 100%)"

const novoBackgroundAzul = "linear-gradient(90deg,rgba(11, 7, 153, 1) 0%, rgba(22, 130, 184, 1) 53%, rgba(13, 152, 194, 1) 100%)"

const gradients = { 
  "#home": backgroundBranco,

  "#sobre": novoBackgroundAzul,

  "#habilidades": backgroundBranco,

  "#projetos": novoBackgroundAzul,

  "#contato": backgroundBranco,
};

export default function AnimatedBackground() {
  const [background, setBackground] = useState(
    gradients[window.location.hash] || gradients["#home"]
  );

  useEffect(() => {
    const onHashChange = () => {
      setBackground(
        gradients[window.location.hash] || gradients["#home"]
      );
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{ background }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    />
  );
}
