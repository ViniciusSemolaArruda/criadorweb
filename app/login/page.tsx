"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Lock, LogIn, Mail, Wand2 } from "lucide-react";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.left}>
        <div className={styles.circleTop} />
        <div className={styles.circleBottom} />

        <motion.div
          className={styles.brand}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.logoIcon}>
            <Wand2 size={24} />
          </div>

          <strong>CriadorWeb AI</strong>
        </motion.div>

        <motion.div
          className={styles.previewCard}
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: {
              delay: 0.2,
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
        >
          <div className={styles.stats}>
            <div>
              <strong>12k</strong>
              <span>Sites criados</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>Satisfação</span>
            </div>

            <div>
              <strong>3min</strong>
              <span>Para publicar</span>
            </div>
          </div>

          <div className={styles.siteItem}>
            <div className={styles.smallIcon}>▣</div>
            <div>
              <strong>Minha Loja Online</strong>
              <span>meusite.criadorweb.com</span>
            </div>
            <i />
          </div>

          <div className={styles.siteItem}>
            <div className={styles.smallIcon}>▣</div>
            <div>
              <strong>Portfólio Profissional</strong>
              <span>portfolio.com.br</span>
            </div>
            <i />
          </div>
        </motion.div>

        <motion.div
          className={styles.welcome}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h2>Bem-vindo de volta! 👋</h2>
          <p>
            Seu site está esperando por você. Entre na sua conta e continue
            criando algo incrível.
          </p>

          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </section>

      <section className={styles.right}>
        <motion.div
          className={styles.formBox}
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Entrar na sua conta</h1>

          <p className={styles.linkText}>
            Não tem conta? <Link href="/registrar">Criar grátis</Link>
          </p>

          <button className={styles.googleBtn}>
            <img src="/google.svg" alt="Google" />
            Continuar com Google
          </button>

          <div className={styles.divider}>
            <span />
            <p>ou entre com e-mail</p>
            <span />
          </div>

          <label>E-mail</label>
          <div className={styles.inputBox}>
            <Mail size={18} />
            <input type="email" placeholder="seu@email.com" />
          </div>

          <label>Senha</label>
          <div className={styles.inputBox}>
            <Lock size={18} />
            <input type="password" placeholder="Sua senha" />
            <Eye size={18} />
          </div>

          <div className={styles.options}>
            <label className={styles.check}>
              <input type="checkbox" defaultChecked />
              Manter conectado
            </label>

            <Link href="#">Esqueci minha senha</Link>
          </div>

          <button className={styles.submitBtn}>
            <LogIn size={19} />
            Entrar
          </button>

          <p className={styles.bottomText}>
            Ainda não tem conta?{" "}
            <Link href="/registrar">Criar conta grátis</Link>
          </p>
        </motion.div>
      </section>
    </main>
  );
}