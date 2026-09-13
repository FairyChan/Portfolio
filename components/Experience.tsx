const experiences = [
  {
    number: "01",
    company: "Triburg",
    role: "Product Development & Merchandising Intern",
    period: "Dec 2025 — Apr 2026",
    description: "Supported product development and merchandising operations across seasons, with hands-on exposure to the end-to-end sampling and approval lifecycle.",
    highlights: [
      "End-to-end sample lifecycle: proto, fit & pre-production",
      "Lab dips, strike-offs & approvals",
      "Vendor & internal team coordination",
      "Timely colour approvals & production readiness",
      "Merchandising trackers: sample status, airway bills & approvals",
      "Buyer communication support",
      "BOMs & T&A calendar exposure",
      "Style-wise PD documentation & approval files",
    ],
  },
  {
    number: "02",
    company: "House of Kosha",
    role: "E-commerce Intern",
    period: "Jun 2025 — Nov 2025",
    description: "Worked across website optimization, online visual merchandising, marketplace outreach, influencer collaborations and digital marketing.",
    highlights: [
      "Shopify website optimization",
      "Online visual merchandising",
      "Marketplace outreach with premium retailers: Agashe & Carma",
      "Influencer collaborations",
      "Brand partnership coordination",
      "SEO-driven content",
      "Google Ads & Merchant Center support",
      "Exhibition planning & vendor logistics",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">03 — Experience</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#77736c]">
            Hands-on experience spanning product development, merchandising, e-commerce, digital marketing and the operational details that move fashion products from idea to market.
          </p>
        </div>

        <div>
          {experiences.map((experience) => (
            <article key={experience.company} className="grid gap-8 border-t border-[#d9d5cd] py-14 md:grid-cols-[0.1fr_0.25fr_0.65fr]">
              <span className="text-xs text-[#77736c]">{experience.number}</span>
              <div>
                <h3 className="font-editorial text-4xl">{experience.company}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#77736c]">{experience.period}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">{experience.role}</h4>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#77736c]">{experience.description}</p>
                <div className="mt-7 flex max-w-4xl flex-wrap gap-2">
                  {experience.highlights.map((highlight) => (
                    <span key={highlight} className="border border-[#d9d5cd] px-3 py-2 text-[10px] uppercase tracking-[0.12em]">
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