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
        After earning my degree in
        <span className="font-medium">Accounting</span>, I made a crucial
        descision to follow my passion for programming. This led me to enroll in
        a comprehensive coding bootcamp, where I delved into the world of
        <span className="font-medium">full-stack web development</span>. What
        captivates me most about programming is the gratifying process of
        solving complex problems.
      </p>
      <p className="mb-3">
        My proficiency centers around a robust stack comprising{" "}
        <span className="font-medium">
          Javascript, React, Node.js, and MongoDB
        </span>
        . I am well-versed in TypeScript, Next.js, and PostgreSQL, always
        staying attuned to emerging technologies. Currently I am looking for a
        <span className="font-medium">full-time position</span> as a software
        developer. I am excited about contributing my skills and expertise to
        innovative projects.{" "}
      </p>
      <p>
        <span className="italic">Beyond coding</span>, I enjoy making free-hand
        drawings, playing football, reading books.
      </p>
    </motion.section>
  );
}
