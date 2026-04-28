"use client";

import { motion } from "framer-motion";
import { Building2, Check, Sprout, X, Zap } from "lucide-react";
import styles from "./PricingCards.module.css";

type Billing = "monthly" | "yearly";

interface PricingCardsProps {
  billing: Billing;
}

const plans = [
  {
    name: "Básico",
    subtitle: "Ideal para autônomos e freelancers",
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyNote: "Grátis para sempre",
    yearlyNote: "Grátis para sempre",
    icon: <Sprout size={26} />,
    button: "Começar grátis",
    featured: false,
    darkButton: false,
    features: [
      ["1 site", true],
      ["Templates básicos (15+)", true],
      ["Editor visual", true],
      ["Link personalizado da plataforma", true],
      ["SSL gratuito", true],
      ["Domínio próprio", false],
      ["IA para textos", false],
      ["Analytics avançados", false],
    ],
  },
  {
    name: "Profissional",
    subtitle: "Para quem quer crescer online",
    monthlyPrice: 49,
    yearlyPrice: 34,
    monthlyNote: "por mês, cobrado mensalmente",
    yearlyNote: "por mês, cobrado anualmente (R$410/ano)",
    icon: <Zap size={26} />,
    button: "Assinar agora",
    featured: true,
    darkButton: false,
    features: [
      ["3 sites", true],
      ["Templates premium (50+)", true],
      ["Editor visual avançado", true],
      ["Domínio próprio gratuito", true],
      ["IA para gerar textos", true],
      ["Galeria de imagens", true],
      ["Formulário de contato", true],
      ["Analytics básicos", true],
    ],
  },
  {
    name: "Empresa",
    subtitle: "Para negócios que precisam de escala",
    monthlyPrice: 199,
    yearlyPrice: 139,
    monthlyNote: "por mês, cobrado mensalmente",
    yearlyNote: "por mês, cobrado anualmente (R$1.668/ano)",
    icon: <Building2 size={26} />,
    button: "Falar com vendas",
    featured: false,
    darkButton: true,
    features: [
      ["Sites ilimitados", true],
      ["Todos os templates", true],
      ["Equipe com múltiplos usuários", true],
      ["Integrações (CRM, Analytics)", true],
      ["IA ilimitada", true],
      ["Suporte prioritário 24h", true],
      ["Relatórios avançados", true],
      ["API de acesso", true],
    ],
  },
];

export default function PricingCards({ billing }: PricingCardsProps) {
  return (
    <section className={styles.pricing}>
      <div className={styles.cards}>
        {plans.map((plan, index) => {
          const price =
            billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

          const note =
            billing === "yearly" ? plan.yearlyNote : plan.monthlyNote;

          const oldPrice =
            billing === "yearly" && plan.monthlyPrice > 0
              ? `R$${plan.monthlyPrice}/mês`
              : null;

          return (
            <motion.article
              key={plan.name}
              className={`${styles.card} ${
                plan.featured ? styles.featured : ""
              }`}
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {plan.featured && (
                <div className={styles.ribbon}>⭐ Mais escolhido</div>
              )}

              <div className={styles.icon}>{plan.icon}</div>

              <h2>{plan.name}</h2>
              <p className={styles.subtitle}>{plan.subtitle}</p>

              <div className={styles.price}>
                <span>R$</span>
                <motion.strong
                  key={`${plan.name}-${billing}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {price}
                </motion.strong>

                {oldPrice && <small>{oldPrice}</small>}
              </div>

              <p className={styles.note}>{note}</p>

              <ul className={styles.features}>
                {plan.features.map(([text, included]) => (
                  <li key={text as string}>
                    <span
                      className={`${styles.check} ${
                        included ? styles.yes : styles.no
                      }`}
                    >
                      {included ? <Check size={14} /> : <X size={14} />}
                    </span>

                    <p className={!included ? styles.disabled : ""}>{text}</p>
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.button} ${
                  plan.featured ? styles.gradient : ""
                } ${plan.darkButton ? styles.dark : ""}`}
              >
                {plan.button}
              </button>
            </motion.article>
          );
        })}
      </div>

      <div className={styles.safe}>
        🛡️ Pagamento seguro • ↻ 7 dias de garantia • ✖ Cancele a qualquer
        momento
      </div>
    </section>
  );
}