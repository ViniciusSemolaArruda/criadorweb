"use client";

import { motion } from "framer-motion";
import styles from "./PricingFAQ.module.css";

const faqs = [
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento e continuará tendo acesso até o fim do período já pago.",
  },
  {
    question: "Há taxa de configuração?",
    answer:
      "Não! Nenhuma taxa extra. O que você vê na tabela é exatamente o que você paga, sem surpresas.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento direto no dashboard.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do valor, sem perguntas.",
  },
];

export default function PricingFAQ() {
  return (
    <section className={styles.faq}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        <div className={styles.badge}>❔ Dúvidas frequentes</div>

        <h2>
          Perguntas <span>frequentes</span>
        </h2>
      </motion.div>

      <div className={styles.grid}>
        {faqs.map((item, index) => (
          <motion.div
            key={item.question}
            className={styles.card}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.65 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}