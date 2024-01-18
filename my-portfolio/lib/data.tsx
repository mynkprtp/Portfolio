import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import connectus from "@/public/connectus.png";
import travelsnaps from "@/public/travelsnaps.png";
import ftribe from "@/public/3ftribe.png";

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
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const achievements = ["Secured Global Rank 2537 in Google HashCode 2021.", "Secured Global Rank 91 in Codechef October Long Challenge among 20k Participants.","Secured Global Rank 1071 in LeetcodeWeekly.","Codechef maxrated 2053 - 5 Star.","Leetcode maxrated 1763 - Top 9 %","Contributed to 4 repositories during Hacktoberfest 2022","Solved over 600 coding problems on various coding platforms."
] as const;

export const experiencesData = [
  {
    title: "SDE Intern",
    location: "Wisteli Informatics, Noida",
    description:
      "I implemented several components in Angular 8 for their dashboard. I integrated Angular Material design principles, helping them enhance the overall user experience.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Angular", "Javascript", "NodeJS"],
    date: "Dec 2021 - Feb 2022",
  },
  {
    title: "Sytems Engineer",
    location: "Tata Consultancy Services, Noida",
    description:
      "I work in an Agile environment across the client including India and China. I am responsible for designing and developing cost effective solutions for Portal and Utility application.",
    icon: React.createElement(FaReact),
    tags: ["Java", "SQL", "Oracle", "JDBC", "Javascript", "Mendix","HTML/CSS" ],
    date: "Aug 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ConnectUs",
    link: "https://github.com/AMAN1210/COLLEGE_SOCIAL_NETWORK",
    description:
      "I worked on the backend of this application. It was our final year project. Here College peers can connect and use features like search, post and chat.",
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Javascript"],
    imageUrl: connectus,
  },
  {
    title: "TravelSnaps",
    link: "https://github.com/mynkprtp/TravelSnaps",
    description:
      "Developed fullstack application to allow user to post image, comment and search. It integrates Google Maps API to display location on Map.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Javascript","API"],
    imageUrl: travelsnaps,
  },
  {
    title: "3FTribe",
    link: "https://github.com/mynkprtp/3FTribe",
    description:
      "A client app for peronal training. It allows users to connect using Calendly. It utilises localDB for CART related features",
    tags: ["Javascript", "Angular.js", "HTML/CSS", "Email.js", "Stripe"],
    imageUrl: ftribe,
  },
] as const;

export const skillsData = [
  "C++",
  "Data Structures",
  "Algorithm",
  "Java",
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Git",
  "MongoDB",
  "Express",
  "PostgreSQL",
] as const;