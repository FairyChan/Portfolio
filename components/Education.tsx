const education = [
  {
    period: "2024 — 2026",
    institution: "National Institute of Fashion Technology, Mumbai",
    degree: "Master of Fashion Management",
  },
  {
    period: "2018 — 2021",
    institution: "Kamla Nehru College, Delhi University",
    degree: "B.A. Economics (Hons)",
  },
  {
    period: "2016 — 2018",
    institution: "St. Joseph’s Academy, CBSE, Delhi",
    degree: "PCM with C++",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
          02 — Education
        </p>
        <div className="mt-16">
          {education.map((item, index) => (
            <article key={item.institution} className="grid gap-6 border-t border-[#d9d5cd] py-10 md:grid-cols-[0.15fr_0.35fr_0.5fr]">
              <span className="text-xs text-[#77736c]">0{index + 1}</span>
              <p className="text-xs uppercase tracking-[0.16em] text-[#77736c]">{item.period}</p>
              <div>
                <h3 className="font-editorial text-3xl md:text-4xl">{item.institution}</h3>
                <p className="mt-3 text-sm leading-6 text-[#77736c]">{item.degree}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}