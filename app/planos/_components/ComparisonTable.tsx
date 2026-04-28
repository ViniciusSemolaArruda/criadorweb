"use client";

import { motion } from "framer-motion";
import styles from "./ComparisonTable.module.css";

const rows = [
  ["section", "SITES E PÁGINAS", "", "", ""],
  ["normal", "Número de sites", "1", "3", "Ilimitados"],
  ["normal", "Páginas por site", "5", "Ilimitadas", "Ilimitadas"],
  ["normal", "Armazenamento", "500 MB", "5 GB", "50 GB"],

  ["section", "DOMÍNIO E PUBLICAÇÃO", "", "", ""],
  ["check", "Link da plataforma", "✓", "✓", "✓"],
  ["check", "Domínio próprio", "×", "✓", "✓"],
  ["check", "SSL (HTTPS)", "✓", "✓", "✓"],

  ["section", "EDITOR E DESIGN", "", "", ""],
  ["normal", "Templates disponíveis", "15+", "50+", "Todos"],
  ["check", "Editor visual", "✓", "✓", "✓"],
  ["normal", "Animações e efeitos", "Básico", "Completo", "Completo"],
  ["check", "Galeria de imagens", "×", "✓", "✓"],

  ["section", "INTELIGÊNCIA ARTIFICIAL", "", "", ""],
  ["normal", "IA para gerar textos", "×", "50 gerações/mês", "Ilimitado"],
  ["check", "Sugestões de SEO por IA", "×", "✓", "✓"],

  ["section", "EQUIPE E COLABORAÇÃO", "", "", ""],
  ["normal", "Usuários na conta", "1", "1", "Ilimitados"],
  ["check", "Permissões por usuário", "×", "×", "✓"],

  ["section", "SUPORTE", "", "", ""],
  ["check", "Suporte por e-mail", "✓", "✓", "✓"],
  ["check", "Suporte prioritário", "×", "×", "✓"],
  ["check", "Chat ao vivo 24h", "×", "×", "✓"],
];

export default function ComparisonTable() {
  return (
    <section className={styles.comparison}>
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        Comparação completa de <span>recursos</span>
      </motion.h2>

      <motion.div
        className={styles.tableWrap}
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Recurso</th>
              <th>Básico</th>
              <th className={styles.professional}>Profissional</th>
              <th>Empresa</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) =>
              row[0] === "section" ? (
                <tr key={index} className={styles.sectionRow}>
                  <td colSpan={4}>{row[1]}</td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{row[1]}</td>
                  <td className={row[2] === "×" ? styles.no : styles.yes}>
                    {row[2]}
                  </td>
                  <td
                    className={`${styles.professionalCell} ${
                      row[3] === "×" ? styles.no : row[3] === "✓" ? styles.yes : ""
                    }`}
                  >
                    {row[3]}
                  </td>
                  <td className={row[4] === "×" ? styles.no : row[4] === "✓" ? styles.yes : ""}>
                    {row[4]}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}