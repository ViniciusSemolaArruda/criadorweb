"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import styles from "./PricingCTA.module.css";

export default function PricingCTA() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, y: 65, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Comece gratuitamente hoje</h2>

        <p>Sem cartão de crédito. Cancele quando quiser.</p>

        <button>
          <Rocket size={18} />
          Criar conta grátis
        </button>
      </motion.div>
    </section>
  );
}