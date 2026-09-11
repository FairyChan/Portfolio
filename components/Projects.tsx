"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "American Eagle",
    category: "Product Development & Merchandising",
    description:
      "Product development exposure across 500+ styles, including sampling coordination, vendor communication, approvals and merchandising processes.",
    tags: ["Product Development", "Merchandising", "Vendor Coordination"],
  },
  {
    number: "02",
    title: "House of Kosha",
    category: "E-commerce & Visual Merchandising",
    description:
      "Managed the digital presentation and backend organisation of 250–300 products while supporting marketplace growth, customer engagement and digital visibility.",
    tags: ["Shopify", "Online VM", "Marketplace"],
  },
  {
    number: "03",
    title: "Brand Experience",
    category: "Experiential Marketing",
    description:
      "Developed research, concept and ideation decks and supported execution planning for automotive, corporate and partner events.",
    tags: ["Brand Activation", "Ideation", "Spatial Planning"],
  },
  {
    number: "04",
    title: "Retail & Assortment",
    category: "Retail Planning",
    description:
      "Developed a retail layout and six-month SKU-based assortment plan with consideration for product mix and retail presentation.",
    tags: ["Retail", "Assortment", "SKU Planning"],
  },
  {
    number: "05",
    title: "Menswear Brand",
    category: "Brand Development",
    description:
      "Developed a menswear brand concept using consumer research, storytelling and visual positioning.",
    tags: ["Consumer Research", "Branding", "Storytelling"],
  },
  {
    number: "06",
    title: "Market Research",
    category: "Consumer Insights",
    description:
      "Conducted and analysed primary research with 200+ respondents to understand consumer preferences and market behaviour.",
    tags: ["Research", "Consumer Insights", "Analysis"],
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">
              03 — Selected Work
            </p>

            <h2 className="mt-6 font-editorial text-6xl md:text-8xl">
              Selected
              <br />
              work.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#77736c]">
            A selection of work across product, retail, e-commerce, research
            and brand experience.
          </p>
        </div>

        <div className="grid gap-px bg-[#d9d5cd] md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-[#f7f5f0] p-8 md:min-h-[420px] md:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-[#77736c]">
                  {project.number}
                </span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <div className="mt-24">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#77736c]">
                  {project.category}
                </p>

                <h3 className="mt-3 font-editorial text-5xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#77736c]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.12em]"
                    >
                      #{tag.replaceAll(" ", "")}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}