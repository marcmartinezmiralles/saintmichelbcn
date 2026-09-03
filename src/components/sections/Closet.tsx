import { Reveal } from "@/components/Reveal";
import closetBg from "@/assets/closet-1.jpg";

export const Closet = () => {
  return (
    <section id="closet" className="relative bg-background text-foreground py-28 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: `url(${closetBg})` }}
        aria-hidden
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
            III — Saint Michel Closet
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 inline-flex items-center gap-3 border border-border px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            <span className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-muted-foreground">
              Coming Soon
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <h2 className="mt-12 font-serif-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-light">
            Saint Michel
            <span className="block italic text-muted-foreground">Closet</span>
          </h2>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-16 md:mt-20 max-w-2xl mx-auto">
            <p className="font-serif-display text-lg md:text-2xl lg:text-3xl leading-[1.6] font-light text-foreground/80">
              This will be our space.
            </p>
            <p className="mt-4 font-serif-display text-lg md:text-2xl lg:text-3xl leading-[1.6] font-light text-foreground/80">
              A place where stories will be told, where real emotions will be transmitted and where people will pass through.
            </p>
            <p className="mt-4 font-serif-display text-lg md:text-2xl lg:text-3xl leading-[1.6] font-light text-muted-foreground italic">
              Welcome to our private archive.
            </p>
            <p className="mt-6 font-serif-display text-xl md:text-3xl lg:text-4xl leading-[1.4] font-light text-foreground/70">
              Elegant, sincere and discreet.
            </p>
            <p className="mt-8 font-serif-display text-2xl md:text-4xl lg:text-5xl font-light">
              Coming soon.
            </p>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-20 md:mt-28 pt-8 border-t border-border flex justify-center">
            <p className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-muted-foreground/50">
              · Locked ·
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
