import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section id="about" className="bg-background text-foreground py-28 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

          <div className="md:col-span-4">
            <Reveal>
              <p className="font-sans-luxe text-[10px] tracking-eyebrow uppercase font-light text-muted-foreground">
                I — Who We Are
              </p>
              <h2 className="mt-8 font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light">
                Saint
                <span className="block italic text-muted-foreground">Michel</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:pt-2">
            <Reveal delay={150}>
              <p className="font-serif-display text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] text-foreground">
                We are not just clothing. We are the stories written in the streets, the conversations in dim light and the need to create something authentic in a world that moves too fast.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-8 md:mt-10 font-serif-display text-lg md:text-xl lg:text-2xl font-light leading-[1.7] text-foreground/70 italic">
                We see each collection as an unfinished screenplay — and every piece as the costume of a scene that is about to happen.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-10 md:mt-14 pt-10 border-t border-border">
                <p className="font-sans-luxe text-sm md:text-base font-light leading-[1.9] text-muted-foreground">
                  Saint Michel was born from the collision and perfect union of fashion and cinema. We blend visual narrative, rhythm and the emotion of the film set with the rigour, texture and design of urban tailoring. We do not seek to create passing trends, but to freeze moments in time — to design frames that can be worn.
                </p>
                <p className="mt-6 font-sans-luxe text-sm md:text-base font-light leading-[1.9] text-muted-foreground">
                  From Manresa to wherever curiosity takes us, our creative process feeds on cinematic references, neon lights and the reality of everyday life, always crafting from closeness and respect for detail.
                </p>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-10 md:mt-14">
                <p className="font-serif-display text-xl md:text-2xl lg:text-3xl font-light leading-[1.5] text-foreground">
                  We do not seek to please everyone.
                </p>
                <p className="mt-3 font-serif-display text-xl md:text-2xl lg:text-3xl font-light leading-[1.5] text-muted-foreground italic">
                  We seek to connect with those who look at the world through a different lens — those who understand that luxury does not reside in an abstract logo, but in the story, the atmosphere and the meaning hidden behind every stitch.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
