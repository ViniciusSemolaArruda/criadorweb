"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 3600,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * to));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const fullText = "Plataforma #1 de criação de sites com IA";

  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;

    const speed = isDeleting ? 45 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextIndex = letterIndex + 1;
        setDisplayText(fullText.slice(0, nextIndex));
        setLetterIndex(nextIndex);

        if (nextIndex === fullText.length) {
          setIsWaiting(true);

          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, 2600);
        }
      } else {
        const nextIndex = letterIndex - 1;
        setDisplayText(fullText.slice(0, nextIndex));
        setLetterIndex(nextIndex);

        if (nextIndex === 0) {
          setIsWaiting(true);

          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(false);
          }, 800);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, isWaiting, fullText]);

  return (
    <section className={styles.hero}>
      <div className={styles.gridGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <span className={styles.statusDot} />

            <span className={styles.typingArea}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.75, ease: "easeOut" }}
          >
            Crie seu site <strong>profissional</strong> em minutos, sem
            programar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: "easeOut" }}
          >
            Escolha um modelo pronto, personalize tudo ao vivo e publique seu
            site com poucos cliques. Sem código. Sem complicação.
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          >
            <motion.button
              className={styles.primaryBtn}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Rocket size={18} />
              <span>Criar meu site</span>
            </motion.button>

            <motion.button
              className={styles.secondaryBtn}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Ver modelos
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <strong>
                <Counter to={12000} prefix="+" duration={4200} />
              </strong>
              <span>Sites criados</span>
            </div>

            <div>
              <strong>
                <Counter to={98} suffix="%" duration={3500} />
              </strong>
              <span>Satisfação</span>
            </div>

            <div>
              <strong>
                <Counter to={5} suffix="min" duration={2800} />
              </strong>
              <span>Para publicar</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 90, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className={styles.publishCard}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <div className={styles.check}>✓</div>
            <div>
              <strong>Site publicado!</strong>
              <span>em 3 minutos</span>
            </div>
          </motion.div>

          <div className={styles.editor}>
            <div className={styles.topbar}>
              <div className={styles.dots}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.url}>🔒 meusite.com/seusite</div>
            </div>

            <div className={styles.editorBody}>
              <aside className={styles.sidebar}>
                <span className={styles.editorTitle}>EDITOR</span>

                <div className={styles.tabs}>
                  <button>Design</button>
                  <button>Conteúdo</button>
                  <button>Pub.</button>
                </div>

                <div className={styles.setting}>
                  <span>Cor principal</span>
                  <i />
                </div>

                <div className={styles.setting}>
                  <span>Fundo</span>
                  <i />
                </div>

                <div className={styles.setting}>
                  <span>Botões</span>
                  <i />
                </div>

                <ul className={styles.menu}>
                  <li className={styles.active}>H Hero Section</li>
                  <li>ⓘ Sobre</li>
                  <li>▦ Serviços</li>
                  <li>▧ Galeria</li>
                  <li>☰ Contato</li>
                </ul>
              </aside>

              <div className={styles.preview}>
                <header className={styles.previewHeader}>
                  <strong>MeuNegócio</strong>

                  <nav>
                    <span>Início</span>
                    <span>Serviços</span>
                    <span>Contato</span>
                  </nav>
                </header>

                <section className={styles.previewHero}>
                  <div className={styles.previewBadge}>✨ Bem-vindo</div>

                  <h3>Soluções para seu negócio crescer</h3>

                  <p>
                    Oferecemos os melhores serviços com qualidade e dedicação.
                  </p>

                  <button>
                    Saiba mais
                    <ArrowRight size={10} />
                  </button>
                </section>

                <div className={styles.cards}>
                  {[1, 2, 3].map((item) => (
                    <div key={item}>
                      <i />
                      <strong>Serviço {item}</strong>
                      <span>Descrição breve do serviço</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className={styles.aiCard}
            animate={{
              y: [0, 13, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
            }}
          >
            <div className={styles.sparkleIcon}>
              <Sparkles size={18} />
            </div>

            <div>
              <strong>IA gerando texto...</strong>
              <span>100% automático</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}