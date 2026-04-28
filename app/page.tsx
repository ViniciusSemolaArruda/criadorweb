"use client";


import styles from "./page.module.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

import Hero from "./_components/Hero/hero";
import Steps from "./_components/Steps/Steps";
import Features from "./_components/Features/Features";
import Templates from "./_components/Templates/Templates";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        {/* HERO */}
        <Hero />

        {/* PASSOS */}
        <Steps />

        {/* RECURSOS */}
        <Features />

        {/* TEMPLATES */}
        <Templates />
      </main>

      <Footer />
    </>
  );
}