import { Reveal } from "@/components/Reveal";

export const Drop = () => {
  return (
    <section id="drop" className="relative bg-foreground text-primary-foreground py-28 md:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-primary-foreground/40">
              IV — The Collection
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 inline-flex items-center gap-4 border border-primary-foreground/25 px-8 py-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 animate-pulse" />
              <span className="font-sans-luxe text-xs tracking-eyebrow uppercase font-light text-primary-foreground/60">
                Coming Soon
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 animate-pulse" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <h2
            className="font-serif-display font-light leading-[0.85] tracking-tight text-center select-none"
            style={{ fontSize: "clamp(4rem, 20vw, 22rem)" }}
          >
            DROP
            <span className="block italic text-primary-foreground/30">I</span>
          </h2>
        </Reveal>

        {/* Coming soon (replaces countdown) */}
        <Reveal delay={300}>
          <div className="mt-16 md:mt-24 text-center">
            <div className="font-serif-display text-5xl md:text-8xl lg:text-9xl font-light italic text-primary-foreground leading-none">
              Coming Soon
            </div>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-20 md:mt-28 flex flex-col items-center gap-4">
            <p className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-primary-foreground/30 animate-pulse">
              · Coming Soon ·
            </p>
            <p className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-primary-foreground/20">
              100 units — launch approaching
            </p>
          </div>
        </Reveal>

      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, white 80px, white 81px)",
        }}
      />
    </section>
  );
};
