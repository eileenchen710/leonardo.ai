export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <circle cx="20" cy="22" r="11" fill="none" stroke="#f26a1b" strokeWidth="3.2" />
        <path d="M20 11c0-3.3 2.7-6 6-6" fill="none" stroke="#f26a1b" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="20" cy="22" r="3.2" fill="#f26a1b" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-[0.18em]">AIKO</span>
    </span>
  );
}
