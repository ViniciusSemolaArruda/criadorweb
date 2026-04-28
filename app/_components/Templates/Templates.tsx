"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import styles from "./Templates.module.css";

const templates = [
  {
    title: "Tech Dark",
    tag: "Institucional",
    labels: ["moderno", "dark mode", "animado"],
    variant: "dark",
  },
  {
    title: "Restaurante",
    tag: "Restaurante",
    labels: ["elegante", "colorido", "responsivo"],
    variant: "orange",
  },
  {
    title: "Portfolio Pro",
    tag: "Portfólio",
    labels: ["criativo", "moderno", "animado"],
    variant: "purple",
  },
];

export default function Templates() {
  return (
    <section className={styles.templates}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.badge}>Exemplos</div>

        <h2>
          Sites criados com <span>CriadorWeb AI</span>
        </h2>

        <p>
          Veja alguns dos sites incríveis que já foram criados na nossa
          plataforma.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {templates.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.card}
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.16,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className={`${styles.preview} ${styles[item.variant]}`}>
              {item.variant === "dark" && (
                <>
                  <div className={styles.mockTop}>
                    <strong>TechAgency</strong>
                    <nav>
                      <span>Serviços</span>
                      <span>Portfólio</span>
                      <span>Contato</span>
                    </nav>
                  </div>

                  <div className={styles.darkHero}>
                    <h4>Transformamos ideias em soluções digitais</h4>
                    <p>Agência de tecnologia especializada em crescimento</p>
                    <button>Ver projetos →</button>
                  </div>

                  <div className={styles.darkBars}>
                    <span />
                    <span />
                    <span />
                  </div>
                </>
              )}

              {item.variant === "orange" && (
                <>
                  <div className={styles.mockTop}>
                    <strong>🍕 Bella Pizza</strong>
                    <nav>
                      <span>Cardápio</span>
                      <span>Pedidos</span>
                    </nav>
                  </div>

                  <div className={styles.centerHero}>
                    <h4>A melhor pizza da cidade</h4>
                    <p>Ingredientes frescos, sabor incomparável</p>
                    <button>Pedir agora →</button>
                  </div>
                </>
              )}

              {item.variant === "purple" && (
                <>
                  <div className={styles.mockTop}>
                    <strong>Ana Lima</strong>
                    <nav>
                      <span>Trabalhos</span>
                      <span>Bio</span>
                      <span>Contato</span>
                    </nav>
                  </div>

                  <div className={styles.purpleHero}>
                    <h4>Designer & Ilustradora</h4>
                    <p>Criando visuais que contam histórias</p>
                    <button>Ver portfólio →</button>
                  </div>
                </>
              )}
            </div>

            <div className={styles.cardContent}>
              <div className={styles.row}>
                <h3>{item.title}</h3>
                <span className={styles.tag}>{item.tag}</span>
              </div>

              <div className={styles.labels}>
                {item.labels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.center}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button className={styles.outlineBtn}>Ver todos os modelos</button>
      </motion.div>

      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, y: 70, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.circleOne} />
        <div className={styles.circleTwo} />

        <div className={styles.ctaContent}>
          <h3>Pronto para criar seu site?</h3>

          <p>Comece gratuitamente. Sem cartão de crédito. Sem compromisso.</p>

          <div className={styles.ctaButtons}>
            <button className={styles.primary}>
              <Rocket size={18} />
              Começar gratuitamente
            </button>

            <button className={styles.secondary}>Ver planos e preços</button>
          </div>

          <div className={styles.ctaFooter}>
            <span>✓ Plano grátis disponível</span>
            <span>✓ Publicação em minutos</span>
            <span>✓ Suporte em português</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}