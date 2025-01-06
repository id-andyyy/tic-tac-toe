import { Logo } from "@components/header/Logo";
import { Menu } from "@components/header/Menu";
import { Profile } from "@components/header/Profile";

export function Header() {
  return (
    <header className="h-20 px-7 bg-white shadow-lg">
      <nav className="h-full flex items-center max-w-7xl mx-auto">
        <Logo />
        <Menu />
        <Profile />
      </nav>
    </header>
  );
}
