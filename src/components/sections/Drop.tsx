import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const TARGET = new Date("2026-09-17T00:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, TARGET.getTime() - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, TARGET.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const days    = Math.floor(timeLeft / 86_400_000);
  const hours   = Math.floor((timeLeft % 86_400_000) / 3_600_000);
  const minutes = Math.floor((timeLeft % 3_600_000)  / 60_000);
  const seconds = Math.floor((timeLeft % 60_000)     / 1_000);

  return { days, hours, minutes, seconds };
}

export const Drop = () => {
  const { days, hours, minutes, seconds } = useCountdown();

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

        {/* Live countdown */}
        <Reveal delay={300}>
          <div className="mt-16 md:mt-24 flex justify-center items-center gap-2 md:gap-6">
            {[
              { value: days,    label: "Days" },
              { value: hours,   label: "Hours" },
              { value: minutes, label: "Mins" },
              { value: seconds, label: "Secs" },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex items-start gap-2 md:gap-6">
                <div className="text-center">
                  <div className="font-serif-display text-5xl md:text-8xl lg:text-9xl font-light text-primary-foreground leading-none tabular-nums">
                    {String(value).padStart(2, "0")}
                  </div>
                  <p className="mt-3 font-sans-luxe text-[8px] md:text-[10px] tracking-eyebrow uppercase font-light text-primary-foreground/40">
                    {label}
                  </p>
                </div>
                {i < 3 && (
                  <span className="font-serif-display text-3xl md:text-6xl lg:text-7xl font-light text-primary-foreground/20 leading-none mt-1 md:mt-2">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-20 md:mt-28 text-center max-w-3xl mx-auto">
            <p className="font-serif-display text-2xl md:text-4xl lg:text-5xl font-light leading-[1.3] italic text-primary-foreground/70">
              "One hundred pieces. One opportunity.
              <span className="block not-italic text-primary-foreground/40 mt-2">
                By the time it drops, it will be too late."
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-14 flex flex-col items-center gap-4">
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
