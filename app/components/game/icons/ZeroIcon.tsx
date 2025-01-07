interface Props {
  className?: string;
}

export function ZeroIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="6.51852"
        stroke="#E59102"
        strokeWidth="2.96296"
      />
    </svg>
  );
}
