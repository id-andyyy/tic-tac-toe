interface Props {
  className?: string;
}

export function TriangleIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5581 12.9306L8.5 2.63889L14.4419 12.9306H2.5581Z"
        stroke="#02E520"
        strokeWidth="2.63889"
      />
    </svg>
  );
}
