import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Sytems Engineer",
    location: "Tata Consultancy Services, Noida",
    description: ["Restructured the micro-services API for incoming requests, resulting in 25 % improvement in throughput."
    ,"Integrated Oracle Database with PostgreSQL, seamlessly sync 10000 records daily."
    ,"Improved query response time by 40 % through database indexing , caching and query optimization techniques."
    ,"Developed schedulers for notifications service using Java for Portal Dashboard and Utility application."
    ,"Led a team of 13 developers, delivered new requirements from scratch to Production within time, exceeding client expectations.",
  "Worked using Agile Methodology in project, across the client including India and China"],
    icon: React.createElement(FaReact),
    tags: ["Java", "SQL", "Oracle", "JDBC", "Javascript","HTML/CSS","Agile","Git"],
    date: "Aug 2022 - present",
  },
  {
    title: "SDE Intern",
    location: "Wisteli Informatics, Noida",
    description: ["Leveraged D3.js to build a real-time graph rendering engine, enabling seamless updates and responsiveness within the user dashboard."
    ,"Restructured reusable Angular 8 components for the landing page, resulting in 10 % improvement in user engagement."],
    icon: React.createElement(CgWorkAlt),
    tags: ["Angular", "Javascript", "ExressJs","NodeJS","Typescript"],
    date: "Dec 2021 - Feb 2022",
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
      "Delivered a fullstack app for promoting peronal training. It allows users to connect using Calendly. It utilises localDB for CART related features",
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