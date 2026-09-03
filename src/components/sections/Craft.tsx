import { Reveal } from "@/components/Reveal";
import sketch from "@/assets/craft-sketch.jpg";
import fabric from "@/assets/craft-fabric.jpg";
import finished from "@/assets/craft-finished.jpg";

const steps = [
  { n: "01", img: sketch, title: "The Drawing", caption: "A single line, considered for weeks.", tag: "Sketch" },
  { n: "02", img: fabric, title: "The Matter", caption: "Fabrics chosen by hand. By touch. By weight.", tag: "Fabric" },
  { n: "03", img: finished, title: "The Object", caption: "Stories you can wear. Limited, numbered, signed.", tag: "Finished" },
];

export const Craft = () => {
  return (
    <section id="craft" className="bg-foreground text-primary-foreground py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <Reveal>
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light opacity-60">
              II — The Craft
            </p>
            <h2 className="mt-6 font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light">
              The art of
              <span className="block italic">creation.</span>
            </h2>
          </Reveal>
          <Reveal delay={200} className="md:max-w-sm">
            <p className="font-sans-luxe text-sm md:text-base font-light leading-relaxed opacity-70">
              Every piece begins as a problem of architecture. Every piece brings a story with it —
              <span className="italic"> never reproduced, never repeated.</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 180}>
              <article className="group">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="font-serif-display text-2xl md:text-3xl italic">{s.n}</span>
                  <span className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light opacity-50">
                    — {s.tag}
                  </span>
                </div>
                <div className="image-frame aspect-[4/5] bg-primary-foreground/5">
                  <img
                    src={s.img}
                    alt={`${s.title} — ${s.caption}`}
                    width={1100}
                    height={1400}
                    loading="lazy"
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <h3 className="mt-6 font-serif-display text-2xl md:text-3xl font-light">{s.title}</h3>
                <p className="mt-2 font-sans-luxe text-xs md:text-sm font-light tracking-body opacity-70 leading-relaxed">
                  {s.caption}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-24 md:mt-32 font-serif-display italic text-2xl md:text-4xl text-center max-w-2xl mx-auto leading-snug opacity-90">
            "We do not make collections. We make objects of a single moment."
          </p>
        </Reveal>
      </div>
    </section>
  );
};
