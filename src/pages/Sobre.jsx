// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import perfil from "../assets/Perfil.JPG"

const textBold = "bg-gradient-to-r from-[#0b0799] to-[#0d98c2] bg-clip-text text-transparent"

export function CardSobre() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      }}
      className="
        relative
        order-2
        md:order-3
        lg:order-1
        w-full md:max-w-[80%] lg:max-w-[40%]
      "
    >
      <div
        className="
          hidden
          lg:block
          absolute -inset-4
          rounded-3xl
          bg-white
          opacity-25
          blur-[15px]
        "
      />

      {/* Card */}
      <div
        className="
          relative z-10
          p-6 rounded-2xl
          bg-[linear-gradient(145deg,_#ffffff_25%,_#e0e0e0_78%,_#c7c7c7_100%)]
          text-primaryDark
          shadow-xl
        "
      >
        <p
          className="
    text-[15px] md:text-[17px] lg:text-[20px]
    leading-[1.55] md:leading-relaxed
    opacity-90
    space-y-2 md:space-y-4
  "
        >
          <span className="block">
            Sou formado em <b className={textBold}>Ciência da Computação</b>, com <b className={textBold}>background em Java</b> e foco em desenvolvimento back-end.
            Atualmente, curso <b className={textBold}>pós-graduação em Java</b>.
          </span>

          <span className="block">
            Venho direcionando meu foco para <b className={textBold}>Front-end e Fullstack</b>, desenvolvendo projetos com
            <b className={textBold}> JavaScript, React e Tailwind CSS</b>.
          </span>

          <span className="block">
            Sou apaixonado por tecnologia e busco oportunidades para evoluir como desenvolvedor e contribuir em projetos reais.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="
        min-h-screen
        flex flex-col
        items-center
        justify-start
        px-6
        pt-20
        scroll-mt-24
      "
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
        className="
          text-[38px] lg:text-[45px]
          font-bold
          mb-[50px]
          bg-[linear-gradient(145deg,_#ffffff_25%,_#e0e0e0_65%,_#c7c7c7_100%)]
          text-transparent
          bg-clip-text
        "
      >
        Sobre Mim
      </motion.h2>

      <div className="
            flex
            flex-col
            md:flex-col
            lg:flex-row
            items-center
            justify-center
            gap-10
            lg:gap-20
        ">
        <CardSobre />

        <motion.img
          src={perfil}
          alt="Foto de perfil"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="
            order-1
            md:order-2
            lg:order-2
            w-52 h-52 lg:w-96 lg:h-96
            rounded-full
            object-cover
            scale-[0.50]
            object-[80%_60%]
            shadow-xl
            lg:translate-x-12
        "
        />
      </div>
    </section>
  );
}
