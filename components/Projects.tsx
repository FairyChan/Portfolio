"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Menswear Brand Development",
    category: "Brand Development",
    description: "Built a menswear brand concept using consumer insights, storytelling, and visual positioning, bringing together research-led thinking and a clear brand narrative.",
    tags: ["Consumer Insights", "Storytelling", "Visual Positioning"],
  },
  {
    number: "02",
    title: "Retail & Assortment Planning",
    category: "Retail Planning",
    description: "Designed a store layout and a six-month SKU-based assortment plan aligned with demand, connecting retail presentation with assortment decisions.",
    tags: ["Store Layout", "6-Month Plan", "SKU Planning"],
  },
  {
    number: "03",
    title: "Costing & Production Planning",
    category: "Product Development",
    description: "Developed cost sheets, Bills of Materials (BOMs), and T&A calendars for a production simulation, building practical exposure to production planning and costing.",
    tags: ["Cost Sheets", "BOM", "T&A Calendars"],
  },
  {
    number: "04",
    title: "Market Research",
    category: "Consumer Insights",
    description: "Conducted primary research with 200+ respondents and analysed the resulting data using Excel to identify useful consumer insights.",
    tags: ["200+ Respondents", "Excel", "Primary Research"],
  },
  {
    number: "05",
    title: "Trend Analysis & Brand Mapping",
    category: "Strategy & Research",
    description: "Evaluated emerging brands to identify whitespace and positioning opportunities, translating market observations into strategic direction.",
    tags: ["Trend Forecasting", "Brand Mapping", "Positioning"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-[#d9d5cd] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#77736c]">04 — Selected Work</p>
            <h2 className="mt-6 font-editorial text-6xl md:text-8xl">Selected<br />work.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#77736c]">
            Academic and applied projects across brand development, retail planning, production, consumer research, trend analysis and positioning.
          </p>
        </div>

        <div className="grid gap-px bg-[#d9d5cd] md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.05 }} className="group bg-[#f7f5f0] p-8 md:min-h-[440px] md:p-12">
              <div className="flex items-start justify-between">
                <span className="text-xs text-[#77736c]">{project.number}</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="mt-24">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#77736c]">{project.category}</p>
                <h3 className="mt-3 font-editorial text-5xl">{project.title}</h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#77736c]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.12em]">#{tag.replaceAll(" ", "")}</span>
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