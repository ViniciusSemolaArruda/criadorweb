"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Info, Lock, Mail, User, UserPlus, Wand2 } from "lucide-react";
import styles from "./registrar.module.css";

export default function RegistrarPage() {
  return (
    <main className={styles.page}>
      <section className={styles.left}>
        <motion.div
          className={styles.formBox}
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Crie sua conta <span>grátis</span>
          </h1>

          <p className={styles.linkText}>
            Já tem conta? <Link href="/login">Entrar</Link>
          </p>

          <button className={styles.googleBtn}>
            <img src="/google.svg" alt="Google" />
            Cadastrar com Google
          </button>

          <div className={styles.divider}>
            <span />
            <p>ou crie com e-mail</p>
            <span />
          </div>

          <div className={styles.twoCols}>
            <div>
              <label>Nome</label>
              <div className={styles.inputBox}>
                <User size={18} />
                <input placeholder="Seu nome" />
              </div>
            </div>

            <div>
              <label>Sobrenome</label>
              <div className={styles.inputBox}>
                <User size={18} />
                <input placeholder="Sobrenome" />
              </div>
            </div>
          </div>

          <label>E-mail</label>
          <div className={styles.inputBox}>
            <Mail size={18} />
            <input type="email" placeholder="seu@email.com" />
          </div>

          <label>Senha</label>
          <div className={styles.inputBox}>
            <Lock size={18} />
            <input type="password" placeholder="Mínimo 8 caracteres" />
            <Eye size={18} />
          </div>

          <div className={styles.passwordBar} />
          <span className={styles.hint}>Insira uma senha</span>

          <label>Confirmar senha</label>
          <div className={styles.inputBox}>
            <Lock size={18} />
            <input type="password" placeholder="Repita a senha" />
            <Eye size={18} />
          </div>

          <div className={styles.infoBox}>
            <Info size={16} />
            <p>
              Ao criar sua conta, você poderá escolher um modelo e começar seu
              site agora. Ao continuar, você aceita os{" "}
              <Link href="#">Termos de Uso</Link> e a{" "}
              <Link href="#">Política de Privacidade</Link>.
            </p>
          </div>

          <button className={styles.submitBtn}>
            <UserPlus size={19} />
            Criar conta grátis
          </button>

          <p className={styles.bottomText}>
            Já tem conta? <Link href="/login">Entrar</Link>
          </p>
        </motion.div>
      </section>

      <section className={styles.right}>
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
          className={styles.steps}
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
          <div className={styles.step}>
            <div className={styles.done}>✓</div>
            <div>
              <strong>Criar conta grátis</strong>
              <span>Sem cartão de crédito necessário</span>
            </div>
          </div>

          <div className={styles.step}>
            <div>2</div>
            <div>
              <strong>Escolher um modelo</strong>
              <span>Dezenas de templates prontos</span>
            </div>
          </div>

          <div className={styles.step}>
            <div>3</div>
            <div>
              <strong>Personalizar e publicar</strong>
              <span>Seu site online em minutos</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h2>Comece em 3 passos simples ✨</h2>
          <p>
            Mais de 12.000 pessoas já criaram seus sites com o CriadorWeb AI.
            Sua vez é agora!
          </p>

          <div className={styles.dots}>
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </section>
    </main>
  );
}