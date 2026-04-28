"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Wand2 } from "lucide-react";
import { useState } from "react";
import styles from "./Header2.module.css";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className={styles.left}>
          <Link href="/" className={styles.back}>
            ← Voltar
          </Link>

          <Link href="/" className={styles.logoArea}>
            <motion.div
              className={styles.logoIcon}
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Wand2 size={22} />
            </motion.div>

            <div className={styles.logoText}>
              <span>CriadorWeb</span>
              <strong>AI</strong>
            </div>
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          <Link href="/modelos">Modelos</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/entrar">Entrar</Link>
        </nav>

        <motion.button
          className={styles.user}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>VN</span>
          Vinicius
          <ChevronDown size={16} />
        </motion.button>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className={styles.mobileMenu}
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className={styles.mobileTop}>
                <div className={styles.mobileProfile}>
                  <span>VN</span>
                  <div>
                    <strong>Vinicius</strong>
                    <small>Minha conta</small>
                  </div>
                </div>
              </div>

              <nav className={styles.mobileLinks}>
                <Link href="/" onClick={closeMenu}>
                  Início
                </Link>
                <Link href="/modelos" onClick={closeMenu}>
                  Modelos
                </Link>
                <Link href="/planos" onClick={closeMenu}>
                  Planos e preços
                </Link>
                <Link href="/entrar" onClick={closeMenu}>
                  Entrar
                </Link>
                <Link href="/registrar" onClick={closeMenu}>
                  Criar conta
                </Link>
              </nav>

              <Link href="/modelos" className={styles.mobileCta} onClick={closeMenu}>
                Criar meu site
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}