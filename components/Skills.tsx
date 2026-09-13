const skillGroups = [
  {
    title: "E-commerce & Digital",
    skills: [
      "Shopify Management",
      "Online Visual Merchandising",
      "Marketplace Outreach",
      "Influencer Collaborations",
      "Digital Marketing",
      "SEO",
      "Google Ads",
      "Google Merchant Center",
    ],
  },
  {
    title: "Product & Merchandising",
    skills: [
      "Product Development & Merchandising",
      "Sampling Lifecycle Management",
      "Vendor & Buyer Coordination",
      "Costing",
      "BOM",
      "T&A Calendars",
      "Line Sheets",
      "Assortment Planning",
    ],
  },
  {
    title: "Research & Tools",
    skills: [
      "Market Research",
      "Trend Forecasting",
      "Data Analysis",
      "Excel",
      "Google Sheets",
      "Canva",
      "Jamovi",
      "Orange",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">05 — Capabilities</p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-[#77736c]">
          A practical skill set spanning fashion product development, merchandising, e-commerce, digital marketing, research and analytical tools.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-editorial text-4xl">{group.title}</h3>
              <div className="mt-8 border-t border-[#d9d5cd]">
                {group.skills.map((skill) => (
                  <div key={skill} className="border-b border-[#d9d5cd] py-4 text-sm">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}