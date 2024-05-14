"use client";

import Title from "./Title";
import styles from "./Hero.module.css";
import React, { useEffect, useRef, useState } from "react";

export default function Hero({
  name,
  numberOfTejass,
}: {
  name: string;
  numberOfTejass: number;
}) {
  const containerElement = useRef<HTMLDivElement>(null);
  const [currentTejas, setCurrentTejas] = useState(1);
  const [shouldWaitToUpdateTejas, setShouldWaitToUpdateTejas] = useState(false);

  const handleNumber = () => {
    if (currentTejas === numberOfTejass) {
      setCurrentTejas(1);
      return;
    }

    setCurrentTejas(currentTejas + 1);
  };

  const handleMouseMove = () => {
    if (shouldWaitToUpdateTejas) {
      return currentTejas;
    }
    handleNumber();
    setShouldWaitToUpdateTejas(true);
    const timeout = setTimeout(() => setShouldWaitToUpdateTejas(false), 100);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (!containerElement) {
      return;
    }
    if (!containerElement.current) {
      return;
    }
    containerElement.current.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("shake", handleMouseMove);
    return () => {
      if (!containerElement.current) {
        return;
      }
      containerElement.current.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      window.removeEventListener("shake", handleMouseMove);
    };
  });
  return (
    <div className={styles.container} ref={containerElement}>
      <section className={styles.intro}>
        <Title
          style={{ position: "absolute", transform: "translateY(-50%)" }}
          length={name.length}
        >
          <b>TEJ</b>
          {name}
        </Title>
        <img
          width={408}
          height={612}
          style={{ zIndex: 1, background: "transparent" }}
          alt={`Tejas ${currentTejas}`}
          src={`/tejass/${currentTejas}.png`}
        />
      </section>
    </div>
  );
}
