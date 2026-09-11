const skillGroups = [
  {
    title: "Merchandising & Product",
    skills: [
      "Product Development",
      "Merchandising",
      "Sample Development",
      "SKU Management",
      "Vendor Coordination",
      "BOM & T&A Support",
    ],
  },
  {
    title: "E-commerce & Brand",
    skills: [
      "Shopify",
      "Online Visual Merchandising",
      "Marketplace Management",
      "Experiential Marketing",
      "Brand Activations",
      "Spatial Planning",
    ],
  },
  {
    title: "Tools & Research",
    skills: [
      "Excel",
      "Google Sheets",
      "SEO",
      "Google Ads",
      "Google Merchant Center",
      "Market Research",
      "Trend Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
          05 — Capabilities
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-editorial text-4xl">{group.title}</h3>

              <div className="mt-8 border-t border-[#d9d5cd]">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="border-b border-[#d9d5cd] py-4 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}