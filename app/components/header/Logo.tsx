"use client";

import Image from "next/image";
import megaSrc from "@components/header/mega.svg";
import shapesLogoSrc from "@components/header/shapes-logo.svg";
import lettersLogoSrc from "@components/header/letters-logo.svg";
import { useState } from "react";

export function Logo() {
  const [logoSrc, setLogoSrc] = useState<string>(lettersLogoSrc);

  function handleLogoHover() {
    setLogoSrc((prevLogoSrc) => {
      if (prevLogoSrc === shapesLogoSrc) return lettersLogoSrc;
      return shapesLogoSrc;
    });
  }

  return (
    <div className="flex items-center mr-10 gap-1">
      <Image src={megaSrc} alt="MEGA" onMouseEnter={handleLogoHover} />
      <Image
        src={logoSrc}
        alt="ХОДЫ"
        className="cursor-pointer"
        onMouseEnter={handleLogoHover}
      />
    </div>
  );
}
