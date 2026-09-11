import { Award } from "lucide-react";

export default function Recognition() {
  return (
    <section className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
          04 — Recognition
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-[0.15fr_0.85fr]">
          <Award size={34} strokeWidth={1} />

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#77736c]">
              Triburg · 2026
            </p>

            <h2 className="mt-4 font-editorial text-6xl md:text-8xl">
              Best
              <br />
              Graduation
              <br />
              Project
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#77736c]">
              Recognised with the Best Graduation Project award for the
              graduation project completed during the Triburg internship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}