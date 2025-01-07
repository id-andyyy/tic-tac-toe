import { Header } from "@components/header";
import { Game } from "@components/game";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="mx-auto max-w-[780px] pt-4">
        <Game />
      </main>
    </div>
  );
}
