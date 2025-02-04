import ios from "../assets/projects/ios.png";
import todo from "../assets/projects/todo.png";
import flutter1 from "../assets/projects/flutter1.png";
import portfolio from "../assets/projects/portfolio.png";
import election from "../assets/projects/election.png";
import snake from "../assets/projects/snake.png";
import bmi from "../assets/projects/bmi.png";
import ticket from "../assets/projects/ticket.png";
import bus from "../assets/projects/bus.png";
import canteen from "../assets/projects/canteen.png";
import blog from "../assets/projects/blog.png";
import { link } from "framer-motion/client";


export const HERO_CONTENT = `I would like to learn new technologies and programming languages to expand my skill set. Currently, I am diving into emerging technologies like Python, JavaScript, and various mobile development frameworks to stay updated with industry trends and enhance my project development capabilities.`;

export const ABOUT_TEXT = `I’m an undergraduate at the University of Colombo, passionate about software development. I’ve worked with technologies like Flutter, React, Swift, Android Studio, JavaScript, and Python to build innovative web and mobile applications.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];


export const PROJECTS = [
  {
    title: "Weather Mobile Application",
    image: ios,
    description:
      "The Weather app is a user-friendly application that provides real-time weather information for any location. It allows users to search for cities and view current weather conditions, including temperature, humidity, and wind speed. The app is designed to offer accurate and up-to-date weather data, helping users plan their day effectively",
    technologies: ["Swift", "Weather API"],
    link: "https://github.com/malith-kavi/Weather"
  },
  {
    title: "Food Suggestion Mobile Application",
    image: flutter1,
    description:
      "A personalized mobile app built using Flutter with Firebase as the backend. The app features user authentication for login and registration. During registration, users provide details such as weight, height, birthday, gender, symptoms, and allergies. Based on this data, the system suggests customized food options for their meals.",
    technologies: ["Flutter", "Firebase"],
    link: "https://github.com/malith-kavi/foodie-goodie"
  },
  {
    title: "Portfolio Website",
    image: portfolio ,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://github.com/malith-kavi/portfolio"
  },
  {
    title: "Election Vote Calculation System",
    image: election,
    description:
      "A Python-based application built using Object-Oriented Programming (OOP) to simulate an election voting system. The system allows citizens to vote for candidates based on preferences, adhering to eligibility criteria such as age and state/province restrictions. It ensures that votes are valid and counts the number of votes obtained by each candidate. Results are displayed visually using charts for better clarity and analysis.",
    technologies: ["Python"],
    link: "https://github.com/malith-kavi/voting_system"
  },
  {
    title: "Snake Game",
    image: snake,
    description:
      "A classic snake game developed using HTML, CSS, and JavaScript. The game features a responsive design, smooth animations, and increasing difficulty as the snake grows. Players control the snake to collect food while avoiding collisions with the walls or itself.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/malith-kavi/Snake-Game"
  },
  {
    title: "BMI Calculator",
    image: bmi,
    description:
      "A simple and intuitive mobile application built using Flutter to calculate Body Mass Index (BMI). Users input their weight and height to instantly receive their BMI score along with a health category (e.g., underweight, normal, overweight).",
    technologies: ["Flutter"],
    link: "https://github.com/malith-kavi/bmicalculator"
  },
  {
    title: "Ticket Booking Mobile Application",
    image: ticket,
    description:
      "A mobile application designed to simplify the process of booking tickets for various events. Users can browse events, view details, and reserve tickets seamlessly.",
    technologies: ["Flutter"],
    link: "https://github.com/malith-kavi/Ticket-booking-mobile-application"
  },
  {
    title: "Bus Booking Mobile Application",
    image: bus,
    description:
      "A user-friendly mobile app built using Flutter with Firebase as the backend. The app features user authentication for login and registration. Users can book bus seats online, make payments, and view booking details. Drivers can also register through the app and add their buses to the system for booking.",
    technologies: ["Flutter","Firebase"],
    link: "https://github.com/malith-kavi/triptix"
  },
  {
    title: "Smart Canteen Management System",
    image: canteen,
    description:
      "A mobile application developed using Flutter and Firebase to streamline canteen operations. Students can explore the menu, place tokens for desired foods, and collect them later, paying at the time of collection. Canteen staff can log in to manage the menu, and admins can monitor food feedback, messages, and ratings.",
    technologies: ["Flutter","Firebase"],
    link: "https://github.com/malith-kavi/canto"
  },
  {
    title: "Blogging Platform",
    image: blog,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting",
    technologies: ["React","Node", "Express", "MongoDB"],
    link: "https://github.com/malith-kavi/blog-app"
  },
];

export const CONTACT = {
  address: "Thalakolawewa, Polpithigama ",
  phoneNo: "+94 76 6867 146 ",
  email: "malithaludeniya@gmail.com",
};
