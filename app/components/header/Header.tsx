import { Logo } from "./Logo";
import { Play } from "./Play";
import { Profile } from "./Profile";

export function Header() {
  return (
    <header className="flex h-20 px-7 bg-white items-center shadow-lg">
      <Logo />
      <Play />
      <Profile />
    </header>
  );
}
