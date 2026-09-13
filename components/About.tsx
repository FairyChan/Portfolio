export default function About() {
  return (
    <section id="about" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[0.3fr_0.7fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">01 — About</p>
        </div>

        <div>
          <h2 className="font-editorial text-5xl leading-tight md:text-7xl">
            Curious about where product, brand and consumer insight meet.
          </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-sm leading-7 text-[#77736c] md:text-base">
            <p>
              I’m a Master’s student in Fashion Management at NIFT Mumbai, driven by curiosity and a strong inclination to learn.
            </p>
            <p>
              My experience spans product development, merchandising, e-commerce, and marketing. I bring a solution-oriented approach supported by analytical and creative skills, and enjoy moving between research, planning, coordination and execution.
            </p>
            <p>
              From managing sampling processes, vendor coordination, colour approvals and merchandising documentation to working on Shopify, marketplace outreach, influencer collaborations, SEO-driven content and digital marketing, I operate at the intersection of product and brand.
            </p>
            <p>
              My academic background in Economics complements this fashion-management focus with a foundation in analytical thinking, market research and data interpretation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}