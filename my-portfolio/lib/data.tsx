import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import connectus from "@/public/connectus.png";
import kanban from "@/public/Kanban.jpg";
import travelsnaps from "@/public/travelsnaps.png";
import ftribe from "@/public/3ftribe.png";
import moviesclub from "@/public/moviesclub.jpg";
import { title } from "process";

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

export const achievements = ["Secured Global Rank 2537 in Google HashCode 2021.", "Secured Global Rank 91 in Codechef October Long Challenge among 20k Participants.", "Secured Global Rank 1071 in LeetcodeWeekly.", "Codechef maxrated 2053 - 5 Star.", "Leetcode maxrated 1770 - Top 9 %", "Contributed to 4 repositories during Hacktoberfest 2022", "Solved over 1000 coding problems on various coding platforms."
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Tata Consultancy Services, Noida",
    description: ["Architected and deployed RESTful API endpoints forthe Notification Service with Java, enabling seamless integration with existing applications and improving system responsiveness for over 1,500 daily active users."
      , "Restructured the Microservices API forincoming requests,resulting in 25 % improvement in throughput and customer satisfaction by 20%."
      , "Orchestrated the migration of legacy data to PostgreSQL, enabling the synchronization of 100,000 records daily. This implementation was adopted by over 6 cross-functional teams forimproved data synchronization."
      , "Improved query response time by 40 % through Database Indexing , Caching and Query optimization techniques."
      , "Implemented solution for Attachment Service using Base_64 Encoding and Decoding for files."
      , "Led a team of 13 developers, delivered new requirements from scratch to Production within time, exceeding client expectations.",
      "Worked using Agile Methodology in project, across the client including India and China"],
    icon: React.createElement(FaReact),
    tags: ["Java", "OQL", "Javascript","PostgreSQL", "HTML/CSS", "Grafana", "Git", "Agile"],
    date: "Aug 2022 - present",
  },
  {
    title: "SDE Intern",
    location: "Wisteli Informatics, Noida",
    description: ["Responsible for handling incoming data stream back-end services.",
      "Implemented Rest API and worked on Agile Software Development."],
    icon: React.createElement(CgWorkAlt),
    tags: ["Java", "Javascript", "Git", "Postman", "Agile"],
    date: "Dec 2021 - Feb 2022",
  },
] as const;

export const projectsData = [
  {
    title: "MoviesClub",
    link: "https://github.com/mynkprtp/MOVIESCLUB",
    description:
      "Developed backend in Java 17 using Spring Boot. It includes features like File Handling, Pagination & Sorting, JWT Auth, Exception Handling, etc. It utilizes MySQL local server for storing the entities’ data.",
    tags: ["Java", "SpringBoot", "JPA", "Hibernate", "JWT"],
    imageUrl: moviesclub,
  },
  {
    title: "ConnectUs",
    link: "https://github.com/AMAN1210/COLLEGE_SOCIAL_NETWORK",
    description:
      "I led the backend of this application. It was our final year project. Here College peers can connect and use features like search, post and chat.",
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Javascript"],
    imageUrl: connectus,
  },
  {
    title: "Kanban App",
    link: "https://github.com/mynkprtp/kanban-app",
    description:
      "Developed a full stack Kanban application to make beautiful notes with features to edit and use emojis.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Javascript", "Redux"],
    imageUrl: kanban
  },
  {
    title: "3FTribe",
    link: "https://github.com/mynkprtp/3FTribe",
    description:
      "Delivered a FrontEnd app for promoting peronal training. It allows users to connect using Calendly. It utilises localDB for CART related features",
    tags: ["Javascript", "Angular.js", "HTML/CSS", "Email.js", "Stripe"],
    imageUrl: ftribe,
  },
  {
    title: "TravelSnaps",
    link: "https://github.com/mynkprtp/TravelSnaps",
    description:
      "Developed fullstack application to allow user to post image, comment and search. It integrates Google Maps API to display location on Map.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Javascript", "API"],
    imageUrl: travelsnaps,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "Data Structures",
  "Algorithm",
  "SpringBoot",
  "PostgreSQL",
  "JPA",
  "Hibernate",
  "HTML/CSS",
  "JavaScript",
  "React",
  "Express",
  "Node.js",
  "Git",
  "Postman",
  "Grafana"
] as const;