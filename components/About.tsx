export default function About() {
  return (
    <section id="about" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[0.3fr_0.7fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
            01 — About
          </p>
        </div>

        <div>
          <h2 className="font-editorial text-5xl leading-tight md:text-7xl">
            A fashion management professional with a curiosity for how
            products, people and brands come together.
          </h2>

          <div className="mt-10 max-w-3xl space-y-5 text-sm leading-7 text-[#77736c] md:text-base">
            <p>
              My experience spans product development, merchandising,
              e-commerce and experiential marketing, giving me exposure to
              both the commercial and creative sides of the fashion business.
            </p>

            <p>
              From supporting the development of 500+ styles for American
              Eagle to managing 250–300 products on Shopify and contributing
              to 15+ experiential marketing briefs, I enjoy working where
              strategy meets execution.
            </p>

            <p>
              I am particularly interested in fashion brands, retail,
              merchandising, e-commerce and brand experiences that combine
              thoughtful strategy with strong visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}