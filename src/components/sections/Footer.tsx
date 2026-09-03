import { Reveal } from "@/components/Reveal";
import logoImg from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background text-foreground border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-40">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <img
              src={logoImg}
              alt="Saint Michel Barcelona"
              className="w-40 md:w-56 mx-auto mb-14 opacity-30"
            />
          </Reveal>
          <Reveal>
            <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
              V — Contact
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-8 font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-light">
              For appointments, styling,
              <span className="block italic text-muted-foreground">or creative collaborations.</span>
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="mailto:info@saintmichelbcn.com"
              className="mt-12 md:mt-16 inline-block font-serif-display text-2xl md:text-4xl lg:text-5xl font-light hairline-link"
            >
              info@saintmichelbcn.com
            </a>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-14 flex justify-center gap-8 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
              <a href="https://instagram.com/saintmichelbcn" target="_blank" rel="noreferrer" className="hairline-link">
                Instagram
              </a>
              <span aria-hidden>·</span>
              <span>Barcelona — Spain</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
          <span>© MMXXIV Saint Michel Barcelona</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
