"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center px-6 pb-16 pt-32 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1400px] gap-16 md:grid-cols-[1.4fr_0.6fr] md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-xs uppercase tracking-[0.3em] text-[#77736c]"
          >
            Fashion Management · Brand Experience · E-commerce
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-[18vw] leading-[0.72] tracking-[-0.04em] md:text-[11rem]"
          >
            Astha
            <br />
            Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-xl text-sm leading-7 text-[#77736c] md:text-base"
          >
            Fashion Management professional working across merchandising,
            product development, e-commerce and experiential marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-[#181817] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#f7f5f0] transition-transform hover:-translate-y-1"
            >
              Explore work
              <ArrowDownRight size={16} />
            </a>

            <a
              href="/Astha-Singh-Resume.pdf"
              download
              className="inline-flex items-center gap-3 border border-[#181817] px-6 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[#181817] hover:text-[#f7f5f0]"
            >
              Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col justify-end border-l border-[#d9d5cd] pl-6 md:pl-10">
          <p className="font-editorial text-4xl leading-tight md:text-5xl">
            Building meaningful experiences across product, commerce and
            brand.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#77736c]">
            Delhi · India
          </p>
        </div>
      </div>
    </section>
  );
}