interface Props {
  className?: string;
}

export function SquareIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.38272"
        y="1.38272"
        width="11.2346"
        height="11.2346"
        stroke="#0255E5"
        strokeWidth="2.76543"
      />
    </svg>
  );
}
