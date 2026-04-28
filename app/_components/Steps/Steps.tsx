"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import styles from "./Steps.module.css";

const steps = [
  {
    number: "1",
    icon: "🎨",
    title: "Escolha um estilo pronto",
    text: "Selecione entre dezenas de modelos profissionais organizados por categoria: negócios, portfólio, restaurante, loja e muito mais.",
  },
  {
    number: "2",
    icon: "✏️",
    title: "Personalize cores, logo, menus e textos",
    text: "Edite tudo no nosso editor visual em tempo real. Mude cores, suba seu logo, edite os textos e veja as mudanças na hora.",
  },
  {
    number: "3",
    icon: "🚀",
    title: "Publique seu site",
    text: "Com um clique seu site vai ao ar. Escolha um link personalizado ou conecte seu domínio próprio. Pronto para receber visitas!",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className={styles.steps}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.badge}>
          <BookOpen size={16} />
          Passo a passo
        </div>

        <h2>
          Como funciona em <span>3 passos simples</span>
        </h2>

        <p>
          Da escolha do modelo à publicação em poucos minutos. Sem precisar
          saber programar.
        </p>
      </motion.div>

      <div className={styles.cardsWrapper}>
        <div className={styles.line} />

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className={styles.card}
            initial={{ opacity: 0, y: 80, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: index * 0.18,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -14,
              scale: 1.025,
              transition: { duration: 0.25 },
            }}
          >
            <motion.div
              className={styles.number}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                delay: index * 0.35,
                ease: "easeInOut",
              }}
            >
              {step.number}
            </motion.div>

            <motion.div
              className={styles.icon}
              animate={{
                y: [0, -7, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.2,
                delay: index * 0.4,
                ease: "easeInOut",
              }}
            >
              {step.icon}
            </motion.div>

            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}