import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size?: "md";
  type: "modern" | "inactiveBorder";
}

export function UiButton({ children, className, size = "md", type }: Props) {
  const buttonClassName = clsx(
    "transition-colors font-medium rounded-lg",
    className,
    {
      modern:
        "bg-modern text-white hover:text-modern border hover:border-modern border-2 border-transparent hover:bg-white",
      inactiveBorder:
        "border border-inactive border-2 text-inactive hover:text-white hover:bg-inactive",
    }[type],
    {
      md: "px-8 py-1.5 text-base",
    }[size],
  );
  return <button className={buttonClassName}>{children}</button>;
}
