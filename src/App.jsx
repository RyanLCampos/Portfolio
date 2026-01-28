import { ThemeProvider } from "@material-tailwind/react";

/* COMPONENTS */
import { Header } from "./components/Header";

/* PAGES */
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";

import GlobalStyles from "./styles/GlobalStyles";

/* Animations */
import { SectionScroll } from "./components/effects/AutoScroll";
import { useScrollSpy } from "./hooks/useScrollSpy";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  useScrollSpy();

  return (
    <ThemeProvider>
      <AnimatedBackground />
      <SectionScroll />
      <Header />
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <GlobalStyles />
    </ThemeProvider>
  );
}
