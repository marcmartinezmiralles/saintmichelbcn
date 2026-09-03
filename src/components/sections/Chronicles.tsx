import { Reveal } from "@/components/Reveal";
import hyatt from "@/assets/chronicle-hyatt.jpg";
import vlog from "@/assets/chronicle-vlog.jpg";

const PlayBadge = () => (
  <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary-foreground/70 flex items-center justify-center backdrop-blur-[2px] bg-foreground/10 transition-transform duration-700 group-hover:scale-110">
      <span className="block w-0 h-0 border-l-[12px] border-l-primary-foreground border-y-[8px] border-y-transparent ml-1" />
    </span>
  </span>
);

export const Chronicles = () => {
  return (
    <section id="chronicles" className="bg-foreground text-primary-foreground py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <Reveal>
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light opacity-60">
              IV — Our World
            </p>
            <h2 className="mt-6 font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light italic">
              Cròniques.
            </h2>
          </Reveal>
          <Reveal delay={180} className="md:max-w-sm">
            <p className="font-sans-luxe text-sm md:text-base font-light leading-relaxed opacity-70">
              Events, films, and quiet observations from the house. The places where Saint Michel meets the world.
            </p>
          </Reveal>
        </div>

        {/* Featured film — Hyatt */}
        <Reveal>
          <article className="group relative">
            <div className="image-frame aspect-[16/9] bg-background/5 relative overflow-hidden">
              <img
                src={hyatt}
                alt="Chronicle — Hyatt Barcelona presentation evening"
                width={1920}
                height={1080}
                loading="lazy"
                className="w-full h-full object-cover image-zoom opacity-85 group-hover:opacity-100 transition-opacity duration-700"
              />
              <PlayBadge />
              <span className="absolute top-5 left-5 font-sans-luxe text-[9px] tracking-eyebrow uppercase opacity-80">
                ● Featured Film
              </span>
              <span className="absolute bottom-5 right-5 font-sans-luxe text-[9px] tracking-eyebrow uppercase opacity-80">
                03:42
              </span>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light opacity-60">
                  Episode 01 — Barcelona, MMXXIV
                </p>
                <h3 className="mt-3 font-serif-display text-3xl md:text-5xl font-light">
                  An Evening at <span className="italic">Hyatt.</span>
                </h3>
              </div>
              <p className="font-sans-luxe text-sm font-light leading-relaxed opacity-70 md:max-w-md">
                The first private presentation of the house — a single room, a hundred guests, and a city that listened.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Two-up reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-20 md:mt-32">
          <Reveal delay={100}>
            <article className="group">
              <div className="image-frame aspect-[4/5] md:aspect-[3/4] bg-background/5 relative overflow-hidden">
                <img
                  src={vlog}
                  alt="Chronicle — Backstage film"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover image-zoom opacity-85 group-hover:opacity-100 transition-opacity duration-700"
                />
                <PlayBadge />
                <span className="absolute top-5 left-5 font-sans-luxe text-[9px] tracking-eyebrow uppercase opacity-80">
                  Vlog · 02
                </span>
              </div>
              <h3 className="mt-6 font-serif-display text-2xl md:text-3xl font-light">
                Behind the Velvet
              </h3>
              <p className="mt-2 font-sans-luxe text-xs md:text-sm font-light opacity-70">
                The hours before the doors opened. — Coming soon.
              </p>
            </article>
          </Reveal>

          <Reveal delay={250}>
            <article className="group h-full flex flex-col">
              <div className="image-frame aspect-[4/5] md:aspect-[3/4] relative overflow-hidden bg-primary-foreground/5 flex items-center justify-center border border-primary-foreground/15">
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-primary-foreground/30" />
                  ))}
                </div>
                <div className="relative text-center px-6">
                  <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase opacity-60">
                    Episode 03
                  </p>
                  <p className="mt-6 font-serif-display text-3xl md:text-4xl italic font-light">
                    In Production
                  </p>
                  <p className="mt-6 font-sans-luxe text-[10px] tracking-eyebrow uppercase opacity-50">
                    — / —
                  </p>
                </div>
              </div>
              <h3 className="mt-6 font-serif-display text-2xl md:text-3xl font-light">
                A Letter from the Atelier
              </h3>
              <p className="mt-2 font-sans-luxe text-xs md:text-sm font-light opacity-70">
                Filmed in Carrer de la Princesa. Releasing this season.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
