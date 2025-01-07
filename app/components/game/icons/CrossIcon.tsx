interface Props {
  className?: string;
}

export function CrossIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.0185547"
        y="13.4639"
        width="18.4116"
        height="2.77578"
        transform="rotate(-45 0.0185547 13.4639)"
        fill="#E502C7"
      />
      <rect
        width="18.4116"
        height="2.77578"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14.9814 13.4639)"
        fill="#E502C7"
      />
    </svg>
  );
}
