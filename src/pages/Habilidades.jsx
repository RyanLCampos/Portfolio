// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { useState } from "react";

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiJavascript, SiMysql, SiPostgresql, SiSpringboot, SiCss3, SiHtml5 } from "react-icons/si";

const tabsVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const listVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const tabItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const technologies = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "Css", icon: SiCss3 },
  { name: "Html", icon: SiHtml5 },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Java", icon: FaJava },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Spring Boot", icon: SiSpringboot },
];

const softSkills = [
  "Comunicação Interpessoal",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Proatividade",
  "Criatividade",
  "Proatividade",
];

export default function Habilidades() {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <section
      id="habilidades"
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-20 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="text-[38px] lg:text-[45px] font-bold mb-[50px] bg-gradient-to-r from-[#0b0799] to-[#0d98c2] text-transparent bg-clip-text"
      >
        Habilidades
      </motion.h2>
      <motion.div
        className="flex gap-4 mb-10"
        variants={tabsVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.button
          variants={tabItemVariants}
          onClick={() => setActiveTab("tech")}
          className={`px-5 py-2 rounded-lg font-medium transition
                        ${activeTab === "tech"
              ? "bg-gradient-to-r from-[#0b0799] to-[#0d98c2] text-white"
              : "bg-transparent text-primaryDark font-bold hover:bg-gradient-to-r from-[#0b0799] to-[#0d98c2] hover:bg-clip-text hover:text-transparent"
            }`}
        >
          Tecnologias
        </motion.button>

        <motion.button
          variants={tabItemVariants}
          onClick={() => setActiveTab("soft")}
          className={`px-5 py-2 rounded-lg font-medium transition
            ${activeTab === "soft"
              ? "bg-gradient-to-r from-[#0b0799] to-[#0d98c2] text-white"
              : "bg-transparent text-primaryDark font-bold hover:bg-gradient-to-r from-[#0b0799] to-[#0d98c2] hover:bg-clip-text hover:text-transparent"
            }`}
        >
          Soft Skills
        </motion.button>
      </motion.div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        {activeTab === "tech" && (
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 justify-items-center"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative size-24 lg:mt-[35px] lg:size-24 rounded-xl
                flex items-center justify-center cursor-pointer
                transition-transform hover:scale-110 hover:z-20 overflow-visible"
              >
                <div
                  className="hidden lg:block absolute -inset-3 rounded-2xl
                    bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                    blur-[15px] opacity-45
                    transition-all duration-300
                    group-hover:opacity-0"
                />

                <div
                  className="hidden lg:block absolute -inset-3 rounded-2xl
                  bg-black
                  blur-[15px] opacity-0
                  transition-all duration-300
                  group-hover:opacity-45"
                />

                <div
                  className="
                    relative z-10 w-full h-full rounded-xl
                    flex flex-col items-center justify-center gap-1
                    lg:bg-[linear-gradient(145deg,_#686868_25%,_#444444_65%,_#222121_100%)]
                    bg-gradient-to-r from-[#0b0799] to-[#0d98c2]

                    lg:bg-gray-800
                    lg:hover:bg-gradient-to-r from-[#0b0799] to-[#0d98c2]

                    transition-colors duration-300
                  "
                >
                  <tech.icon className="text-[40px] lg:text-[45px] text-white" />

                  <span className="block lg:hidden text-[11px] text-white text-center px-1">
                    {tech.name}
                  </span>
                </div>

                <span
                  className="absolute -top-12 left-1/2 -translate-x-1/2
                    z-50 pointer-events-none
                    max-w-[160px]
                    bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                    text-white text-sm px-3 py-2 rounded-md
                    text-center leading-tight whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300
                    hidden lg:block"
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "soft" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="group relative w-[180px] h-20 rounded-xl
                   flex items-center justify-center cursor-pointer
                   transition-transform hover:scale-105 hover:z-20"
              >
                <div
                  className="hidden lg:block absolute -inset-1 rounded-xl
                    bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                    blur-[10px] opacity-40
                    transition-all duration-300
                    group-hover:opacity-0"
                />

                <div
                  className="hidden lg:block absolute -inset-1 rounded-xl
                    bg-black
                    blur-[10px] opacity-0
                    transition-all duration-300
                    group-hover:opacity-40"
                />

                <div
                  className="relative z-10
                     w-full h-full
                     lg:bg-[linear-gradient(145deg,_#686868_25%,_#444444_65%,_#222121_100%)]
                     lg:hover:bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                     bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                     text-white rounded-lg
                     flex items-center justify-center
                     text-center
                     transition-colors duration-300"
                >
                  {skill}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
