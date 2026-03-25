import Image from "next/image";

export function EmpathLogoFull({ className = "", width = 300 }: { className?: string; width?: number }) {
  return (
    <Image
      src="/images/empath-logo.png"
      alt="Empath"
      width={width}
      height={Math.round(width * 0.3)}
      className={className}
      priority
    />
  );
}

export function EmpathIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/images/empath-icon.png"
      alt="Empath"
      width={size}
      height={size}
      className={className}
    />
  );
}
