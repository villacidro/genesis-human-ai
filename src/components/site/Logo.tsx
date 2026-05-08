import { Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Gênesis Company">
      <img
        src={logoFull}
        alt="Gênesis Company"
        className="h-9 w-auto md:h-10"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
