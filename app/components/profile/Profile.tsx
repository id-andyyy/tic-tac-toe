"use client";

import Image from "next/image";
import avatarSrc from "@components/profile/avatar.png";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

interface Props {
  children: string;
  className?: string;
  userColor?: string;
}

export function Profile({ children, className, userColor }: Props) {
  const displayedUsername = getShortUsername(14),
    shortDisplayedUsername = getShortUsername(9);
  const [username, setUsername] = useState(displayedUsername);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function getShortUsername(maxUsernameLength: number) {
    return children.length > maxUsernameLength
      ? children.slice(0, maxUsernameLength) + "..."
      : children;
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setUsername(shortDisplayedUsername);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setUsername(displayedUsername);
      timeoutRef.current = null;
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      className={clsx(
        className,
        "flex items-center text-start gap-4 w-64 group",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={avatarSrc} alt="" width={50} height={50} />
      <div>
        <div
          className={clsx(
            userColor,
            "font-semibold text-xl transition-all group-hover:text-3xl group-hover:translate-y-3  top-0 left-0",
          )}
        >
          @{username}
        </div>
        <div className="font-regular text-base text-inactive group-hover:opacity-0 transition-all">
          124 XP
        </div>
      </div>
    </button>
  );
}
