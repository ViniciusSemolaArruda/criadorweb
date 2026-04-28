"use client";

import { motion } from "framer-motion";
import { Tags } from "lucide-react";
import styles from "./PricingHero.module.css";

type Billing = "monthly" | "yearly";

interface PricingHeroProps {
  billing: Billing;
  setBilling: (billing: Billing) => void;
}

export default function PricingHero({ billing, setBilling }: PricingHeroProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className={styles.badge}>
          <Tags size={16} />
          Preços simples e transparentes
        </div>

        <h1>
          Escolha o plano <span>ideal para você</span>
        </h1>

        <p>
          Comece de graça e cresça conforme precisar. Sem cobranças escondidas.
        </p>

        <div className={styles.toggle}>
          <button
            type="button"
            className={billing === "monthly" ? styles.active : ""}
            onClick={() => setBilling("monthly")}
          >
            Mensal
          </button>

          <button
            type="button"
            className={billing === "yearly" ? styles.active : ""}
            onClick={() => setBilling("yearly")}
          >
            Anual
            <span>-30%</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}