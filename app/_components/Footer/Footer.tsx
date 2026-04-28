"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoArea}>
              <motion.div
                className={styles.logoIcon}
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Wand2 size={23} />
              </motion.div>

              <div className={styles.logoText}>
                <span>CriadorWeb</span>
                <strong>AI</strong>
              </div>
            </div>

            <p>
              A plataforma mais fácil para criar sites profissionais sem precisar
              programar. Modelos prontos, editor visual e IA para textos.
            </p>

            <div className={styles.socials}>
              <motion.a href="#" aria-label="Instagram" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
                <FaInstagram size={18} />
              </motion.a>

              <motion.a href="#" aria-label="LinkedIn" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
                <FaLinkedinIn size={18} />
              </motion.a>

              <motion.a href="#" aria-label="YouTube" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
                <FaYoutube size={18} />
              </motion.a>

              <motion.a href="#" aria-label="Twitter / X" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
                <FaXTwitter size={18} />
              </motion.a>
            </div>
          </div>

          <div className={styles.columns}>
            <div>
              <h4>PRODUTO</h4>
              <Link href="/modelos">Modelos</Link>
              <Link href="/planos">Planos e preços</Link>
              <Link href="/">Recursos</Link>
              <Link href="/">Novidades</Link>
            </div>

            <div>
              <h4>EMPRESA</h4>
              <Link href="/">Sobre nós</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Carreiras</Link>
              <Link href="/">Parceiros</Link>
            </div>

            <div>
              <h4>SUPORTE</h4>
              <Link href="/">Central de ajuda</Link>
              <Link href="/">Contato</Link>
              <Link href="/">Termos de uso</Link>
              <Link href="/">Privacidade</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 CriadorWeb AI. Todos os direitos reservados.</span>

          <span className={styles.made}>
  Feito com ❤️ no
  <img src="/brazil.png" alt="Brasil" className={styles.flag} />
</span>
        </div>
      </motion.div>
    </footer>
  );
}