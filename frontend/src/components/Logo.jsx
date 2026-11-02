export const LogoMark = ({ size = 40, className = "" }) => (
  <img
    src="/logo-mark.png"
    width={size}
    height={size}
    alt="JR Agro Chemicals logo mark"
    className={className}
    style={{ objectFit: "contain" }}
  />
);

export const LogoFull = ({ light = false }) => (
  <div className="flex items-center" data-testid="nav-logo">
    <img
      src="/logo.png"
      alt="JR Agro Chemicals — Success Your Dream With Us"
      className={`h-11 w-auto ${light ? "rounded-2xl bg-white px-4 py-2" : ""}`}
    />
  </div>
);
