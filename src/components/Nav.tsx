import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Galleries", href: "#galeries" },
  { label: "Closet", href: "#closet" },
  { label: "Drop I", href: "#drop" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,color] duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-md text-foreground" : "bg-transparent text-primary-foreground"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top">
          <img
            src={logoImg}
            alt="Saint Michel Barcelona"
            className={`h-7 md:h-8 w-auto object-contain transition-[filter] duration-700 ${
              scrolled ? "" : "invert"
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light hairline-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`block w-5 h-px bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-background text-foreground transition-[max-height] duration-700 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6 border-t border-border">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans-luxe text-xs tracking-eyebrow uppercase font-light"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
