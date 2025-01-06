import Image from "next/image";
import avatarSrc from "@components/header/avatar.png";
import clsx from "clsx";

interface Props {
  className?: string;
}

export function Profile({ className }: Props) {
  return (
    <button className="ml-auto flex items-center text-start gap-4 min-w-60">
      <Image src={avatarSrc} alt="" width={50} height={50} />
      <div>
        <div
          className={clsx("font-semibold text-xl transition-colors", className)}
        >
          @id_andyyy
        </div>
        <div className="font-regular text-base text-inactive">124 XP</div>
      </div>
    </button>
  );
}
