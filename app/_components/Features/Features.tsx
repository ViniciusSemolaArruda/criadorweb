"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Layers,
  Code,
  Smartphone,
  Zap,
  Wand2,
} from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: <Eye />,
    title: "Editor visual em tempo real",
    text: "Veja cada mudança acontecer instantaneamente no preview do seu site. O que você edita, você vê.",
  },
  {
    icon: <Layers />,
    title: "Templates profissionais",
    text: "Dezenas de modelos criados por designers profissionais para cada tipo de negócio.",
  },
  {
    icon: <Code />,
    title: "Sem precisar programar",
    text: "Interface intuitiva e fácil de usar. Qualquer pessoa consegue criar um site incrível sem saber código.",
  },
  {
    icon: <Smartphone />,
    title: "Responsivo para celular",
    text: "Todos os sites são automaticamente otimizados para funcionar perfeitamente em qualquer dispositivo.",
  },
  {
    icon: <Zap />,
    title: "Publicação rápida",
    text: "Seu site vai ao ar em segundos. Hospedagem incluída, SSL gratuito e domínio personalizado.",
  },
  {
    icon: <Wand2 />,
    title: "IA para gerar textos",
    text: "Nossa IA cria textos profissionais para seu site automaticamente. Só escolher o tom e o assunto.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.badge}>⭐ Recursos</div>

        <h2>
          Tudo que você precisa <span>em um só lugar</span>
        </h2>

        <p>
          Uma plataforma completa para criar, publicar e gerenciar seu site
          profissional.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {features.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}