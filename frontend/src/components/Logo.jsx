export const LogoMark = ({ size = 40, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    role="img"
    aria-label="JR Agro Chemicals logo"
  >
    <rect width="64" height="64" rx="14" fill="#0A2F24" />
    <circle cx="32" cy="44" r="3.2" fill="#C59B27" />
    <path d="M32 44 C32 32 26 24 14 20 C20 32 25 40 32 44 Z" fill="#3FA34D" />
    <path d="M32 44 C32 30 38 22 50 18 C44 31 39 40 32 44 Z" fill="#2E7D43" />
    <path d="M32 44 C32 34 32 24 32 14 C36 24 36 34 32 44 Z" fill="#67C587" />
    <path d="M12 50 Q32 42 52 50 L52 54 L12 54 Z" fill="#C59B27" opacity="0.9" />
  </svg>
);

export const LogoFull = ({ light = false, size = 42 }) => (
  <div className="flex items-center gap-3" data-testid="nav-logo">
    <LogoMark size={size} />
    <div className="leading-tight">
      <div
        className={`font-display font-bold text-xl tracking-tight whitespace-nowrap ${
          light ? "text-[#FAF8F3]" : "text-[#0A2F24]"
        }`}
      >
        JR Agro <span className="text-[#C59B27]">Chemicals</span>
      </div>
      <div
        className={`text-[10px] uppercase tracking-[0.22em] ${
          light ? "text-emerald-100/70" : "text-emerald-900/60"
        }`}
      >
        Nourishing Nature
      </div>
    </div>
  </div>
);
