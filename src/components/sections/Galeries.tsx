import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import sielu1 from "@/assets/shows/sielu-1.jpg";
import sielu2 from "@/assets/shows/sielu-2.jpg";
import sielu3 from "@/assets/shows/sielu-3.jpg";
import estacio1 from "@/assets/shows/estacio-1.jpg";
import estacio2 from "@/assets/shows/estacio-2.jpg";
import estacio3 from "@/assets/shows/estacio-3.jpg";
import estacio4 from "@/assets/shows/estacio-4.jpg";
import hyatt1 from "@/assets/shows/hyatt-1.jpg";
import hyatt2 from "@/assets/shows/hyatt-2.jpg";
import hyatt3 from "@/assets/shows/hyatt-3.jpg";
import hyatt4 from "@/assets/shows/hyatt-4.jpg";
import platjadaro1 from "@/assets/shows/platjadaro-1.jpg";
import platjadaro2 from "@/assets/shows/platjadaro-2.jpg";

const shows = [
  {
    id: "sielu",
    title: "El Sielu",
    date: "MMXXV — Official Presentation",
    cover: sielu1,
    images: [sielu1, sielu2, sielu3],
  },
  {
    id: "estacio",
    title: "Estació de França",
    date: "MMXXV",
    cover: estacio1,
    images: [estacio1, estacio2, estacio3, estacio4],
  },
  {
    id: "hyatt",
    title: "Hyatt Regency BCN",
    date: "MMXXV",
    cover: hyatt1,
    images: [hyatt1, hyatt2, hyatt3, hyatt4],
  },
  {
    id: "platjadaro",
    title: "Platja d'Aro",
    date: "MMXXV",
    cover: platjadaro1,
    images: [platjadaro1, platjadaro2],
  },
];

export const Galeries = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeShow = shows.find((s) => s.id === openId) ?? null;

  return (
    <section id="galeries" className="bg-background text-foreground py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <Reveal>
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
              II — The Shows
            </p>
            <h2 className="mt-6 font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light">
              Galleries
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:max-w-sm">
            <p className="font-sans-luxe text-sm md:text-base font-light leading-relaxed text-muted-foreground">
              Each show is a unique moment. A collection of captured instants, available to relive.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {shows.map((show, i) => (
            <Reveal key={show.id} delay={i * 100}>
              <button
                className="group relative w-full aspect-[3/4] overflow-hidden image-frame text-left focus:outline-none"
                onClick={() => setOpenId(show.id)}
                aria-label={`Open gallery — ${show.title}`}
              >
                <img
                  src={show.cover}
                  alt={`Saint Michel — ${show.title}`}
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                  <p className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-primary-foreground/70 mb-2">
                    Saint Michel — {show.date}
                  </p>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-light text-primary-foreground leading-tight">
                    {show.title}
                  </h3>
                  <p className="mt-3 font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-primary-foreground/60 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-4 h-px bg-primary-foreground/60 inline-block" />
                    View gallery
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Gallery overlay */}
      {activeShow && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpenId(null)}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light text-primary-foreground/50">
                  Saint Michel — {activeShow.date}
                </p>
                <h2 className="mt-2 font-serif-display text-4xl md:text-6xl font-light text-primary-foreground">
                  {activeShow.title}
                </h2>
              </div>
              <button
                onClick={() => setOpenId(null)}
                aria-label="Close gallery"
                className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-3"
              >
                <span>Close</span>
                <span className="text-lg leading-none">×</span>
              </button>
            </div>

            <div className="columns-1 md:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {activeShow.images.map((img, i) => (
                <figure key={i} className="break-inside-avoid image-frame">
                  <img
                    src={img}
                    alt={`${activeShow.title} — photo ${i + 1}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
