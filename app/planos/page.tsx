"use client";

import { useState } from "react";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import PricingHero from "./_components/PricingHero";
import PricingCards from "./_components/PricingCards";
import ComparisonTable from "./_components/ComparisonTable";
import PricingFAQ from "./_components/PricingFAQ";
import PricingCTA from "./_components/PricingCTA";
import styles from "./planos.module.css";

export default function PlanosPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <Header />

      <main className={styles.main}>
        <PricingHero billing={billing} setBilling={setBilling} />
        <PricingCards billing={billing} />
        <ComparisonTable />
        <PricingFAQ />
        <PricingCTA />
      </main>

      <Footer />
    </>
  );
}