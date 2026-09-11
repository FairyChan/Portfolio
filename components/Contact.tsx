import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
          06 — Contact
        </p>

        <div className="mt-16">
          <h2 className="font-editorial text-[17vw] leading-[0.75] tracking-[-0.04em] md:text-[11rem]">
            Let's
            <br />
            connect.
          </h2>

          <div className="mt-16 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <a
              href="mailto:asthasingh1098@gmail.com"
              className="flex items-center gap-3 text-sm uppercase tracking-[0.15em] hover:opacity-50"
            >
              <Mail size={18} />
              asthasingh1098@gmail.com
            </a>

            <a
              href="mailto:asthasingh1098@gmail.com"
              className="inline-flex w-fit items-center gap-3 bg-[#181817] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#f7f5f0]"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}