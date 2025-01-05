import Image from "next/image";
import avatarSrc from "@components/header/avatar.png";

export function Profile() {
  return (
    <button className="ml-auto flex items-center text-start gap-4">
      <Image src={avatarSrc} alt="" width={50} height={50} />
      <div>
        <div className="font-semibold text-xl text-modern hover:text-fresh transition-colors">
          @id_andyyy
        </div>
        <div className="font-regular text-base">124 XP</div>
      </div>
    </button>
  );
}
