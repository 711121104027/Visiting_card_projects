"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import DetailCard from "@/components/DetailCard";

export default function Home() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showCard && <SplashScreen />}

      {showCard && <DetailCard />}
    </>
  );
}