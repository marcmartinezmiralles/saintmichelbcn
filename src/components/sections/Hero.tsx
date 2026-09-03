export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-black text-primary-foreground">

      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-24 pb-32">
          <p className="font-sans-luxe text-[10px] md:text-[11px] tracking-eyebrow uppercase font-light opacity-80 mb-10">
            EST · 2024
          </p>
          <h1 className="font-serif-display leading-[0.92] tracking-[0.18em] md:tracking-[0.22em] font-light">
            <span className="block text-[14vw] md:text-[10vw] lg:text-[9rem]">SAINT MICHEL</span>
            <span className="block text-[8vw] md:text-[5.5vw] lg:text-[6rem] italic font-extralight mt-2 md:mt-4 opacity-90">
              BARCELONA
            </span>
          </h1>
          <p className="font-sans-luxe text-xs md:text-sm tracking-[0.25em] uppercase font-light opacity-90 mt-12 max-w-2xl leading-loose">
            More than clothing — we create stories you wear.
          </p>
        </div>

        <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-3 animate-scroll-pulse">
          <span className="font-sans-luxe text-[9px] tracking-eyebrow uppercase font-light opacity-80">Scroll</span>
          <div className="w-px h-10 bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};
