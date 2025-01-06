import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function MenuItem({ children }: Props) {
  return (
    <Link
      href="#"
      className="text-lg text-inactive font-medium hover:text-black transition-colors"
    >
      {children}
    </Link>
  );
}
