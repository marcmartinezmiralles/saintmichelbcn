import { Reveal } from "@/components/Reveal";
import a1 from "@/assets/archive-1.jpg";
import a2 from "@/assets/archive-2.jpg";
import a3 from "@/assets/archive-3.jpg";
import a4 from "@/assets/archive-4.jpg";

export const Archive = () => {
  return (
    <section id="archive" className="bg-background text-foreground py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <Reveal>
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
              III — Our Assets
            </p>
            <h2 className="mt-6 font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light">
              The Gallery
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:max-w-sm">
            <p className="font-sans-luxe text-sm md:text-base font-light leading-relaxed text-muted-foreground">
              The pieces that already exist. Photographed, catalogued, and held in our atelier — available for editorial, styling, and private appointment.
            </p>
          </Reveal>
        </div>

        {/* Look 01 — Full bleed immersive */}
        <Reveal>
          <figure className="group image-frame aspect-[4/5] md:aspect-[16/9] mb-6 md:mb-10">
            <img
              src={a3}
              alt="Saint Michel Archive — Look 01, tailored duo"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover image-zoom"
            />
          </figure>
          <div className="flex items-baseline justify-between mb-20 md:mb-32 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
            <span>Look 01 — The Suite</span>
            <span>Wool, silk lining</span>
          </div>
        </Reveal>

        {/* Look 02 — split */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-32 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="group image-frame aspect-[3/4]">
              <img src={a1} alt="Archive Look 02 — draped silhouette" width={1000} height={1400} loading="lazy" className="w-full h-full object-cover image-zoom" />
            </figure>
          </Reveal>
          <Reveal delay={200} className="col-span-12 md:col-span-5 md:pl-6">
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
              Look 02
            </p>
            <h3 className="mt-4 font-serif-display text-3xl md:text-5xl font-light leading-tight">
              The Drape
              <span className="block italic text-muted-foreground">— a single fold.</span>
            </h3>
            <p className="mt-6 font-sans-luxe text-sm font-light leading-relaxed text-muted-foreground max-w-sm">
              A floor-length asymmetric piece, cut from one continuous panel. Existing in three units only.
            </p>
            <p className="mt-8 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light">
              03 / 03 — Available
            </p>
          </Reveal>
        </div>

        {/* Look 03 — full bleed close up */}
        <Reveal>
          <figure className="group image-frame aspect-[16/10] mb-6 md:mb-10">
            <img
              src={a2}
              alt="Archive Look 03 — fabric and stitch detail"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover image-zoom"
            />
          </figure>
          <div className="flex items-baseline justify-between mb-20 md:mb-32 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
            <span>Look 03 — Material Study</span>
            <span>Hand-finished selvedge</span>
          </div>
        </Reveal>

        {/* Look 04 */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal delay={120} className="col-span-12 md:col-span-5 md:order-1 order-2">
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
              Look 04
            </p>
            <h3 className="mt-4 font-serif-display text-3xl md:text-5xl font-light leading-tight">
              The Silhouette
              <span className="block italic text-muted-foreground">— in profile.</span>
            </h3>
            <p className="mt-6 font-sans-luxe text-sm font-light leading-relaxed text-muted-foreground max-w-sm">
              A study of negative space. Photographed once. Worn rarely. Available on appointment.
            </p>
            <p className="mt-8 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light">
              01 / 01 — On Hold
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 order-1 md:order-2">
            <figure className="group image-frame aspect-[4/5]">
              <img src={a4} alt="Archive Look 04 — silhouette study" width={1000} height={1300} loading="lazy" className="w-full h-full object-cover image-zoom" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
