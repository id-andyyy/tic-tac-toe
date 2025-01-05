"use client";

import Image from "next/image";
import megaSrc from "@components/header/mega.svg";
import shapesLogoSrc from "@components/header/shapes-logo.svg";
import lettersLogoSrc from "@components/header/letters-logo.svg";
import { useEffect, useState } from "react";

export function Logo() {
  const [logoSrc, setLogoSrc] = useState<string>(shapesLogoSrc);

  useEffect(() => {
    setLogoSrc(Math.random() < 0.5 ? shapesLogoSrc : lettersLogoSrc);
  }, []);

  function handleLogoClick() {
    setLogoSrc((prevLogoSrc) => {
      if (prevLogoSrc === shapesLogoSrc) return lettersLogoSrc;
      return shapesLogoSrc;
    });
  }

  return (
    <div className="flex items-center mr-10">
      <Image src={megaSrc} alt="MEGA" />
      <Image
        src={logoSrc}
        alt="ХОДЫ"
        className="ml-1 cursor-pointer"
        onClick={handleLogoClick}
      />
    </div>
  );
}
