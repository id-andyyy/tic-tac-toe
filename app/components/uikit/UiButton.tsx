import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  size: "md" | "lg";
  type: "primary" | "inactive";
}

export function UiButton({ children, className, size, type }: Props) {
  const buttonClassName = clsx(
    "transition-colors font-medium rounded-lg",
    className,
    {
      primary: "",
      inactive:
        "border border-inactive border-2 text-inactive hover:text-white hover:bg-inactive",
    }[type],
    {
      md: "px-8 py-1.5 text-base",
      lg: "",
    }[size],
  );
  return <button className={buttonClassName}>{children}</button>;
}
