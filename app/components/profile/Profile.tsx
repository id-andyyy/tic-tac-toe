"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import tempAvatarSrc from "@components/profile/avatar.png";

interface Props {
  avatarSrc?: StaticImageData;
  className?: string;
  rating: number;
  userColor?: string;
  username: string;
}

export function Profile({
  avatarSrc = tempAvatarSrc,
  className,
  rating,
  userColor,
  username,
}: Props) {
  return (
    <button
      className={clsx(
        className,
        "flex items-center text-start gap-4 w-64 group",
      )}
    >
      <Image src={avatarSrc} alt="" width={50} height={50} />
      <div className="overflow-hidden">
        <div
          className={clsx(
            `text-${userColor}`,
            "font-semibold text-xl transition-all group-hover:text-3xl group-hover:translate-y-3  top-0 left-0 truncate",
          )}
        >
          @{username}
        </div>
        <div className="font-regular text-base text-inactive group-hover:opacity-0 transition-all">
          {rating} XP
        </div>
      </div>
    </button>
  );
}
