import { Logo, Menu } from "@components/header";
import { Profile } from "@components/profile";

export function Header() {
  return (
    <header className="h-20 px-7 bg-white shadow-md">
      <nav className="h-full flex items-center max-w-7xl mx-auto">
        <Logo />
        <Menu />
        <Profile
          rating={124}
          username="id_andyyy"
          className="ml-auto"
        ></Profile>
      </nav>
    </header>
  );
}
