// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const contacts = [
    {
        label: "Email",
        value: "ryanlcampos19@gmail.com",
        icon: FaEnvelope,
        link: "mailto:ryanlcampos19@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/ryanlucaspc",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ryanlucaspc/",
    },
    {
        label: "GitHub",
        value: "github.com/RyanLCampos",
        icon: FaGithub,
        link: "https://github.com/RyanLCampos",
    },
    {
        label: "Localização",
        value: "São Sebastião da Amoreira, PR – Brasil",
        icon: FaMapMarkerAlt,
        link: null,
    },
];

export default function Contato() {
    return (
        <section
            id="contato"
            className="h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
        >
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[38px] lg:text-[45px] font-bold mb-[50px]
          bg-gradient-to-r from-[#0b0799] to-[#0d98c2]
          text-transparent bg-clip-text"
            >
                Contato
            </motion.h2>

            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                {contacts.map((item, index) => (
                    <motion.a
                        key={item.label}
                        href={item.link || undefined}
                        target={item.link ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4 group"
                    >
                        <item.icon className="text-[26px] text-[#0b0799] transition-transform duration-300 group-hover:scale-110" />

                        <div className="flex flex-col">
                            <span className="font-semibold text-primaryDark">{item.label}</span>
                            <span className="text-sm opacity-80 group-hover:text-[#0d98c2] transition-colors">
                                {item.value}
                            </span>
                        </div>
                    </motion.a>
                ))}

                <motion.a
                    href="tel:+5543996499386"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="
                    flex items-center gap-4 group
                    md:col-span-2 md:justify-start
                    "
                >
                    <FaPhoneAlt className="text-[26px] text-[#0b0799] transition-transform duration-300 group-hover:scale-110" />

                    <div className="flex flex-col">
                        <span className="font-semibold text-primaryDark">Telefone</span>
                        <span className="text-sm opacity-80 group-hover:text-[#0d98c2] transition-colors">
                            +55 (43) 99649-9386
                        </span>
                    </div>
                </motion.a>
            </div>


            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center max-w-xl text-primaryDark opacity-80"
            >
                Aberto a oportunidades, freelas e colaborações. Fique à vontade para entrar em contato{" "}
            </motion.p>
        </section>
    );
}
