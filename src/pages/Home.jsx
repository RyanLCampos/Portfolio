import { useEffect, useState } from "react";
import TypingText from "../components/effects/Typing";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Home() {

    const [hide, setHide] = useState(false);

    useEffect(() => {
        const onScroll = () => setHide(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="home" className="min-h-screen w-full max-w-[100vw] overflow-hidden flex flex-col items-center justify-center relative">
          <div className="text-center z-10 px-4">
                <TypingText 
                  texts={["Olá, meu nome é Ryan Lucas", "Sejam Bem-vindos!"]}
                  typingSpeed={90}
                  deletingSpeed={50}
                  delayBetween={1200}
                  className="block text-4xl lg:text-7xl mb-[50px] font-bold mb-6 bg-gradient-to-r from-black to-gray-700 leading-right text-transparent bg-clip-text"
                />
              <p className=" text-[16px] lg:text-[20px] mb-8 bg-gradient-to-r from-[#0802bf] via-[#0f3bd9] to-[#00d4ff] bg-clip-text text-transparent">
                  Fullstack Developer | Background em Java
              </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="grid grid-cols-3 text-[38px] gap-10 text-gray-600 mt-[50px] items-center">
            <div className="flex flex-col items-center group relative">
              <a
                href="https://www.linkedin.com/in/ryanlucaspc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[38px] hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={39} />
              </a>

              {/* Texto mobile */}
              <span className="block lg:hidden text-[12px] mt-1 text-gray-600">
                LinkedIn
              </span>
            </div>
            <div className="flex flex-col items-center group relative">
              <a
                href="https://github.com/RyanLCampos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[38px] hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              {/* Texto mobile */}
              <span className="block lg:hidden text-[12px] mt-1 text-gray-600">
                GitHub
              </span>
            </div>
            <div className="flex flex-col items-center group relative">
              <a
                href="public/Curriculo.pdf"
                download
                aria-label="Baixar currículo em PDF"
                className="text-[36px] hover:text-red-600 transition-all duration-300"
              >
                <FaFileDownload />
              </a>

              {/* Texto mobile */}
              <span className="block lg:hidden text-[12px] mt-1 text-gray-600">
                Currículo
              </span>

              {/* Tooltip desktop */}
              <span
                className="
                  absolute -bottom-12 left-1/2 -translate-x-1/2
                  z-50 pointer-events-none
                  bg-red-600
                  text-white text-sm px-3 py-2 rounded-md
                  whitespace-nowrap
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  hidden lg:block
                "
              >
                Baixar CV
              </span>
            </div>
          </div>

          <div
            className={`
              absolute bottom-10 left-1/2 -translate-x-1/2
              flex flex-col items-center gap-2
              transition-opacity duration-300
              ${hide ? "opacity-0" : "opacity-100"}
            `}
          >
            <span className="text-sm tracking-widest uppercase text-gray-700">
              Scroll down
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 animate-bounce text-gray-700"
            >
              <path
                d="M12 5v14M19 12l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>
    )
}