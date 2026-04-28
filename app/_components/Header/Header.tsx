"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Wand2 } from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logoArea} onClick={closeMenu}>
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
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={isActive("/") ? styles.active : ""}>
              Início
            </Link>

            <Link
              href="/modelos"
              className={isActive("/modelos") ? styles.active : ""}
            >
              Modelos
            </Link>

            <Link
              href="/planos"
              className={isActive("/planos") ? styles.active : ""}
            >
              Planos
            </Link>

            <Link
              href="/#como-funciona"
              className={pathname === "/" ? styles.activeSection : ""}
            >
              Como Funciona
            </Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/login" className={styles.login}>
              Entrar
            </Link>

            <motion.div
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link href="/registrar" className={styles.cta}>
                Começar agora
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          <button
            className={`${styles.mobileButton} ${
              menuOpen ? styles.mobileButtonActive : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
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
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <nav className={styles.mobileNav}>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={isActive("/") ? styles.mobileActive : ""}
                >
                  Início
                </Link>

                <Link
                  href="/modelos"
                  onClick={closeMenu}
                  className={isActive("/modelos") ? styles.mobileActive : ""}
                >
                  Modelos
                </Link>

                <Link
                  href="/planos"
                  onClick={closeMenu}
                  className={isActive("/planos") ? styles.mobileActive : ""}
                >
                  Planos
                </Link>

                <Link href="/#como-funciona" onClick={closeMenu}>
                  Como Funciona
                </Link>
              </nav>

              <div className={styles.mobileActions}>
                <Link href="/login" onClick={closeMenu} className={styles.mobileLogin}>
                  Entrar
                </Link>

                <Link href="/registrar" onClick={closeMenu} className={styles.mobileCta}>
                  Começar agora
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}