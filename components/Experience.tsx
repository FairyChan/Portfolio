const experiences = [
  {
    number: "01",
    company: "NeoNiche",
    role: "Management Trainee — Client Servicing",
    period: "Jun 2026 — Sept 2026",
    category: "Experiential Marketing & Brand Experience",
    description:
      "Supported experiential marketing and brand activation briefs across automotive and corporate brands, contributing to research, ideation, pitching, spatial planning and execution.",
    highlights: [
      "15+ experiential marketing briefs",
      "4–5 project execution plans",
      "Concept & ideation decks",
      "Spatial planning & guest journeys",
      "Bentley Continental GTS private preview",
      "250-attendee Sharp Partner Meet",
    ],
  },
  {
    number: "02",
    company: "Triburg",
    role: "Product Development & Merchandising Intern",
    period: "Dec 2025 — Apr 2026",
    category: "American Eagle",
    description:
      "Supported product development and merchandising for American Eagle, with primary exposure to dresses and men's shirts across the sampling and product development lifecycle.",
    highlights: [
      "500+ styles supported",
      "6 India-based vendors",
      "30–40 samples per sampling stage",
      "Sample approvals",
      "Lab dips & strike-offs",
      "BOM & T&A support",
    ],
  },
  {
    number: "03",
    company: "House of Kosha",
    role: "E-commerce Intern",
    period: "Jun 2025 — Nov 2025",
    category: "E-commerce & Online Visual Merchandising",
    description:
      "Worked across e-commerce operations, product presentation, marketplace outreach, customer engagement and digital visibility for the luxury accessories brand.",
    highlights: [
      "250–300 products / SKUs",
      "50+ marketplace & retail outreach",
      "10 distribution partnerships",
      "Shopify & online VM",
      "150+ influencer outreach",
      "400+ customer database",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
            02 — Experience
          </p>
        </div>

        <div>
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="grid gap-8 border-t border-[#d9d5cd] py-12 md:grid-cols-[0.1fr_0.25fr_0.65fr]"
            >
              <span className="text-xs text-[#77736c]">
                {experience.number}
              </span>

              <div>
                <h3 className="font-editorial text-4xl">
                  {experience.company}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#77736c]">
                  {experience.period}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#77736c]">
                  {experience.category}
                </p>

                <h4 className="mt-3 text-lg font-medium">
                  {experience.role}
                </h4>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#77736c]">
                  {experience.description}
                </p>

                <div className="mt-7 flex max-w-3xl flex-wrap gap-2">
                  {experience.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="border border-[#d9d5cd] px-3 py-2 text-[10px] uppercase tracking-[0.12em]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}