export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="logo-cut">
          <rect width="100" height="100" fill="white" />
          <rect x="-20" y="44" width="140" height="12" transform="rotate(35 50 50)" fill="black" />
        </mask>
        <clipPath id="logo-top-right">
          <rect x="-50" y="-100" width="200" height="150" transform="rotate(35 50 50)" />
        </clipPath>
        <clipPath id="logo-bottom-left">
          <rect x="-50" y="50" width="200" height="150" transform="rotate(35 50 50)" />
        </clipPath>
      </defs>
      <g mask="url(#logo-cut)">
        <circle cx="50" cy="50" r="46" fill="#dbdbdb" />
        <circle cx="50" cy="50" r="28" fill="#005fc8" clipPath="url(#logo-top-right)" />
        <circle cx="50" cy="50" r="28" fill="#00adef" clipPath="url(#logo-bottom-left)" />
      </g>
    </svg>
  );
}
