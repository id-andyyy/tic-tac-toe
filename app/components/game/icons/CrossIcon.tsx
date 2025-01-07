interface Props {
  className?: string;
}

export function CrossIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6.22559"
        y="18.9529"
        width="18"
        height="2.71372"
        transform="rotate(-45 6.22559 18.9529)"
        fill="#E502C7"
      />
      <rect
        width="18"
        height="2.71372"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.873 18.9529)"
        fill="#E502C7"
      />
    </svg>
  );
}
