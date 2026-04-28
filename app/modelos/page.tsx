"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Church,
  GraduationCap,
  Grid2X2,
  Hotel,
  Landmark,
  Plane,
  Search,
  Store,
  Utensils,
} from "lucide-react";
import Header2 from "../_components/Header2/Header2";
import styles from "./modelos.module.css";

const categories = [
  { name: "Todos", count: 27, icon: <Grid2X2 size={15} /> },
  { name: "Institucional", count: 5, icon: <Building2 size={15} /> },
  { name: "Loja", count: 4, icon: <Store size={15} /> },
  { name: "Restaurante", count: 3, icon: <Utensils size={15} /> },
  { name: "Portfólio", count: 3, icon: <Hotel size={15} /> },
  { name: "Turismo", count: 2, icon: <Plane size={15} /> },
  { name: "Eventos", count: 2, icon: <Building2 size={15} /> },
  { name: "Igreja", count: 2, icon: <Church size={15} /> },
  { name: "Escola", count: 2, icon: <GraduationCap size={15} /> },
  { name: "Prefeitura", count: 2, icon: <Landmark size={15} /> },
];

const templates = [
  {
    name: "Tech Dark",
    category: "Institucional",
    tags: ["moderno", "dark mode", "animado"],
    variant: "dark",
  },
  {
    name: "Bella Pizzeria",
    category: "Restaurante",
    tags: ["elegante", "colorido", "responsivo"],
    variant: "orange",
  },
  {
    name: "Portfolio Pro",
    category: "Portfólio",
    tags: ["criativo", "gradiente", "moderno"],
    variant: "purple",
  },
  {
    name: "Minimal Business",
    category: "Institucional",
    tags: ["limpo", "minimalista", "profissional"],
    variant: "minimal",
  },
  {
    name: "Gourmet Food",
    category: "Restaurante",
    tags: ["premium", "elegante", "responsivo"],
    variant: "brown",
    premium: true,
  },
  {
    name: "Loja Moderna",
    category: "Loja",
    tags: ["e-commerce", "moderno", "clean"],
    variant: "pink",
  },
  {
    name: "Travel & Tours",
    category: "Turismo",
    tags: ["aventura", "colorido", "inspirador"],
    variant: "cyan",
  },
  {
    name: "Festival de Eventos",
    category: "Eventos",
    tags: ["vibrante", "bold", "animado"],
    variant: "magenta",
  },
  {
    name: "Comunidade Viva",
    category: "Igreja",
    tags: ["acolhedor", "claro", "espiritual"],
    variant: "yellow",
  },
  {
    name: "EduPlatform",
    category: "Escola",
    tags: ["educacional", "clean", "profissional"],
    variant: "blue",
    premium: true,
  },
  {
    name: "Prefeitura Digital",
    category: "Prefeitura",
    tags: ["institucional", "confiável", "acessível"],
    variant: "green",
  },
  {
    name: "Fashion Store",
    category: "Loja",
    tags: ["moda", "elegante", "premium"],
    variant: "black",
    premium: true,
  },
];

export default function ModelosPage() {
  return (
    <>
      <Header2 />

      <main className={styles.main}>
        <section className={styles.hero}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Modelos prontos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Escolha um estilo para <span>começar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            Selecione um modelo pronto. Depois você poderá editar cores, logo,
            textos, menus e seções.
          </motion.p>
        </section>

        <motion.section
          className={styles.filters}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <div className={styles.searchBox}>
            <Search size={20} />
            <input placeholder="Buscar modelos..." />
          </div>

          <select className={styles.select}>
            <option>Mais populares</option>
            <option>Mais recentes</option>
            <option>Premium</option>
          </select>

          <div className={styles.categories}>
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={index === 0 ? styles.activeCategory : ""}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {category.icon}
                {category.name}
                <span>{category.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        <section className={styles.results}>
          <p>
            <strong>12</strong> modelos encontrados
          </p>

          <div className={styles.grid}>
            {templates.map((template, index) => (
              <motion.article
                key={template.name}
                className={styles.card}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: (index % 3) * 0.12,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.015 }}
              >
                <div
                  className={`${styles.preview} ${
                    styles[template.variant]
                  }`}
                >
                  <div className={styles.previewTop}>
                    <strong>{template.name}</strong>
                    <nav>
                      <span>Início</span>
                      <span>Sobre</span>
                      <span>Contato</span>
                    </nav>
                  </div>

                  <div className={styles.previewContent}>
                    <h3>{template.name}</h3>
                    <p>Template profissional para seu negócio</p>
                    <button>Saiba mais →</button>
                  </div>

                  <div className={styles.previewBars}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.overlay}>
  <button>👁 Ver demonstração</button>
  <button>🚀 Usar este modelo</button>
</div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>
                    <h2>{template.name}</h2>
                    <span>{template.category}</span>
                  </div>

                  <div className={styles.tags}>
                    {template.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}

                    {template.premium && <small className={styles.premium}>👑 Premium</small>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}