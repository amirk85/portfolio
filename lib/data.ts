import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import wordanalyticsImg from "@/public/wordanalytics.png";
import jumpcloudImg from "@/public/jumpcloud.png";
import absaImg from "@/public/absa.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Engineer",
    location: "Aurangabad, Maharashtra",
    description:
      "As a Jr. Software Engineer for a year, I gained valuable experience and learned the fundamentals of web development, contributing to my professional growth and skill development.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer",
    location: "Pune, Maharashtra",
    description:
      "I worked as software engineer for 1.6 years and learned how large-scale products are build following best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
		title: "Associate front-end developer",
		location: "Mumbai, Maharashtra",
		description: "In my role as an associate front-end developer in the banking domain, I dedicated 6 months to crafting engaging user interfaces. Additionally, I made meaningful contributions to the backend aspects of the projects.",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - 2024",
	},
] as const;

export const projectsData = [
	{
		title: "JumpCloud",
		description:
			"I dedicated 1.5 years to developing a customizable admin dashboard at JumpCloud, providing admins with a comprehensive bird's-eye view of user activities.",
		tags: ["React.js", "Vue.js", "Node.js", "MongoDB"],
		imageUrl: jumpcloudImg,
	},
	{
		title: "Absa Bank Limited",
		description: "I improved the corporate journey in the Absa project by optimizing front-end code and creating stable, reusable components for a smoother user experience.",
		tags: ["React.js", "Redux", "Node.js", "express", "PostgreSQL"],
		imageUrl: absaImg,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Vue.js",
	"Node.js",
	"Git & Github",
	"Tailwind",
	"Bootstrap",
	"Material-Ui",
	"MongoDB",
	"Redux & Redux Toolkit",
	"Express.js",
	"PostgreSQL",
	"Framer Motion",
	"React Hook Form",
] as const;
