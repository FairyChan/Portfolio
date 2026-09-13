import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">06 — Contact</p>

        <div className="mt-16">
          <h2 className="font-editorial text-[17vw] leading-[0.75] tracking-[-0.04em] md:text-[11rem]">
            Let’s<br />connect.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <a href="mailto:astha.singh1@nift.ac.in" className="flex items-center gap-3 text-sm uppercase tracking-[0.12em] hover:opacity-50">
              <Mail size={18} /> astha.singh1@nift.ac.in
            </a>
            <a href="tel:+918527165152" className="flex items-center gap-3 text-sm uppercase tracking-[0.12em] hover:opacity-50">
              <Phone size={18} /> +91 8527165152
            </a>
            <a href="https://linkedin.com/in/asthasingh1098" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm uppercase tracking-[0.12em] hover:opacity-50">
              <ArrowUpRight size={18} /> LinkedIn
            </a>
          </div>

          <p className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#77736c]">
            <MapPin size={16} /> Mumbai, India
          </p>
        </div>
      </div>
    </section>
  );
}