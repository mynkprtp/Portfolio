"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          I'm a Software Engineer with <span className="italic">2 years</span> of technical experience.
          I have completed my Bachelor's degree in Information Technology from Kamla Nehru Institute of Technology, Sultanpur (2018-2022).
      </p>
      <p className="mb-3">
      As a Software Engineer, I am passionate about creating innovative solutions and pushing the boundaries of
technology. I am constantiy seeking opportunities to expand my knowledge and stay up-to-date with the latest
advancements in the field. With my strong technical skills, collaborative mindset, and dedication to excellence, I
am confident in my ability to contribute to the success of any software development team.
      </p>
    </motion.section>
  );
}