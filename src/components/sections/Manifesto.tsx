import { Reveal } from "@/components/Reveal";

export const Manifesto = () => {
  return (
    <section id="manifesto" className="bg-background text-foreground py-32 md:py-56">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
            I — The Manifesto
          </p>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="mt-10 md:mt-14 font-serif-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-light">
            The Origin
          </h2>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-16 md:mt-24 mx-auto w-px h-16 md:h-24 bg-border" />
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-16 md:mt-24 space-y-8 font-serif-display text-xl md:text-2xl lg:text-3xl leading-[1.55] font-light max-w-2xl mx-auto">
            <p>
              Saint Michel was not born in a boutique. 
              It was born between ideas, late nights, and the will to build something of our own — from Manresa to wherever it can reach.
            </p>
            <p className="italic text-muted-foreground">
		A house founded on a single conviction: that clothing, space, and community are not separate worlds — they are one expression, shaped in different forms.
            </p>
          </div>
        </Reveal>

        <Reveal delay={900}>
          <p className="mt-20 md:mt-28 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
            — The Founders
          </p>
        </Reveal>
      </div>
    </section>
  );
};
