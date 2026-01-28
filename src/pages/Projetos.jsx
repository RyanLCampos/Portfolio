/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { useState } from "react";

import logo from '../assets/LogoNova.png'

const projects = [
    {
        title: "Vault Finance",
        description:
            "Sistema web para controle financeiro pessoal, com dashboard, categorias e relatórios.",
        techs: ["React", "Node.js", "Tailwind", "API REST", "MySQL"],
        image: null,
        site: null,
        github: "https://github.com/RyanLCampos/Vaulta-Finance",
    },
    {
        title: "Fertilex",
        description:
            "Sistema para classificação do nível de fertilidade do solo utilizando Machine Learning.",
        techs: ["Python", "Django", "MySQL", "Machine Learning"],
        image: null,
        site: null,
        github: "https://github.com/RyanLCampos/Fertilex",
    }
];

export default function Projetos() {
    const [activeTab, setActiveTab] = useState("tech");
    return (
        <section id="projetos" className="min-h-screen flex flex-col items-center justify-start px-6 pt-20 scroll-mt-24">
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                }}
                className="text-[38px] lg:text-[45px] font-bold mb-[50px] bg-[linear-gradient(145deg,_#ffffff_25%,_#e0e0e0_65%,_#c7c7c7_100%)] text-transparent bg-clip-text"
            >
                Projetos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl ">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={project.image || logo}
                                alt={project.title}
                                className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techs.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full
                                            bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                                            text-white font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {project.site && (
                                    <a
                                        href={project.site}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 rounded-lg font-medium
                                            bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
                                            text-white hover:opacity-90 transition"
                                    >
                                        Ver Site
                                    </a>
                                )}

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 text-center py-2 rounded-lg font-medium
                                        border border-gray-300 text-gray-700
                                        hover:bg-gray-100 transition"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}