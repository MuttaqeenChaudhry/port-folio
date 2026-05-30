import React from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";
import ProjectShowcase from "./ProjectShowcase";
import EC1 from '../assets/images/1.png'
import EC2 from '../assets/images/2.png'
import EC3 from '../assets/images/3.png'
import EC4 from '../assets/images/4.png'
import EC5 from '../assets/images/5.png'
import EC6 from '../assets/images/6.png'
import EC7 from '../assets/images/7.png'
import EC8 from '../assets/images/8.png'
import EC9 from '../assets/images/1.png'
import W1 from '../assets/images/W1.jpg'
import W2 from '../assets/images/W2.jpg'
import W3 from '../assets/images/W3.jpg'
import W4 from '../assets/images/W4.jpg'
import W5 from '../assets/images/W5.jpg'
import W6 from '../assets/images/W6.jpg'
import W7 from '../assets/images/W7.jpg'
import W8 from '../assets/images/W8.jpg'
import W9 from '../assets/images/W9.jpg'
import NA1 from '../assets/images/NA1.jpg'
import NA2 from '../assets/images/NA2.jpg'
import NA3 from '../assets/images/NA3.jpg'
import NA4 from '../assets/images/NA4.jpg'
import NA5 from '../assets/images/NA5.jpg'
import NA6 from '../assets/images/NA6.jpg'
import NA7 from '../assets/images/NA7.jpg'
import NA8 from '../assets/images/NA8.jpg'
import NA9 from '../assets/images/NA9.jpg'
import EE1 from '../assets/images/EE1.jpg'
import EE2 from '../assets/images/EE2.jpg'
import EE3 from '../assets/images/EE3.jpg'
import EE4 from '../assets/images/EE4.jpg'
import EE5 from '../assets/images/EE5.jpg'
import EE6 from '../assets/images/EE6.jpg'
import EE7 from '../assets/images/EE7.jpg'
import EE8 from '../assets/images/EE8.jpg'
import EE9 from '../assets/images/EE9.jpg'
import AT1 from '../assets/images/AT1.jpg'
import AT2 from '../assets/images/AT2.jpg'
import AT3 from '../assets/images/AT3.jpg'
import AT4 from '../assets/images/AT4.jpg'
import AT5 from '../assets/images/AT5.jpg'
import AT6 from '../assets/images/AT6.jpg'
import AT7 from '../assets/images/AT7.jpg'
import AT8 from '../assets/images/AT8.jpg'
import AT9 from '../assets/images/AT9.jpg'
import GG1 from '../assets/images/Gratis/1.png'
import GG2 from '../assets/images/Gratis/2.png'
import GG3 from '../assets/images/Gratis/3.png'
import GG4 from '../assets/images/Gratis/4.png'
import GG5 from '../assets/images/Gratis/5.png'
import GG6 from '../assets/images/Gratis/6.png'
import GG7 from '../assets/images/Gratis/7.png'
import GG8 from '../assets/images/Gratis/8.png'
import AF0 from '../assets/images/af0.png'
import AF1 from '../assets/images/af1.png'
import AF2 from '../assets/images/af2.png'
import AF3 from '../assets/images/af3.png'
import AF4 from '../assets/images/af4.png'
import AF5 from '../assets/images/af5.png'
import AF6 from '../assets/images/af6.png'
import PY1 from '../assets/images/py1.png'
import PY2 from '../assets/images/py2.png'
import PY3 from '../assets/images/py3.png'
import TP1 from '../assets/images/tp1.png'
import TP2 from '../assets/images/tp2.png'
import TP3 from '../assets/images/tp3.png'
import TP4 from '../assets/images/tp4.png'
import TP5 from '../assets/images/tp5.png'
import TP6 from '../assets/images/tp6.png'
import TP7 from '../assets/images/tp7.png'
import TP8 from '../assets/images/tp8.png'
import TP9 from '../assets/images/tp9.png'
import TP10 from '../assets/images/tp10.png'

const projects = [
  {
    title: "TogetherPrime",
    points: [
      "Vue.js Event Platform",
      "Firebase Authentication",
      "Google SSO",
      "Search, Sort, Pagination",
      "Google Maps and Places",
      "AI Prompt Responses",
    ],
    images: [TP1, TP2, TP3, TP4, TP5, TP6, TP7, TP8, TP9, TP10],
    interval: 4500,
  },
  {
    title: "Python Adventure Game",
    points: [
      "OOP Concepts",
      "CSV Data Loading",
      "Container Inventory System",
      "Input Validation",
      "Menu Driven Gameplay",
    ],
    images: [PY1, PY2, PY3],
    interval: 4100,
  },
  {
    title: "AFL Simulation Game Java",
    points: [
      "Java Classes",
      "OOP",
      "File IO",
      "Game State Management",
      "Score Simulation Logic",
      "Console Interaction",
    ],
    images: [AF0, AF1, AF2, AF3, AF4, AF5, AF6],
    interval: 4300,
  },
  {
    title: "GratisOglasi",
    points: [
      "C2C E-comm site",
      "JWT/Local Storage Auth",
      "Post, Edit, Filter Ads",
      "Realtime Firebase Chat",
      "Next.js, Express, Mongo",
    ],
    images: [GG1, GG2, GG3, GG4, GG5, GG6, GG7, GG8, GG4],
    interval: 4800,
  },
  {
    title: "Eidcarosse",
    points: [
      "E-comm website",
      "JWT's Authentication",
      "Post, Edit, Filter Ads",
      "Live Chat (Firebase)",
      "Next.js, Mongo, TypeScript",
    ],
    images: [EC1, EC2, EC3, EC4, EC5, EC6, EC7, EC8, EC9],
    interval: 4800,
  },
  {
    title: "Traveler",
    points: [
      "App Info Site",
      "MultiLingual",
      "Email.js",
      "JSON Animations",
      "React UI Libraries",
    ],
    images: [W1, W2, W3, W4, W5, W6, W7, W8, W9],
    interval: 4200,
  },
  {
    title: "NewsAven",
    points: [
      "News Information site",
      "Dynamic Navigation",
      "Pagination",
      "Bootstrap",
      "Js Libraries",
    ],
    images: [NA1, NA2, NA3, NA4, NA5, NA6, NA7, NA8, NA9],
    interval: 4400,
  },
  {
    title: "EditEase",
    points: [
      "Text Editor",
      "Light/Dark Modes",
      "Fully Responsive",
      "Text -> Speech",
      "Vanilla Css, BStrap",
    ],
    images: [EE1, EE2, EE3, EE4, EE5, EE6, EE7, EE8, EE9],
    interval: 4600,
  },
  {
    title: "ATTabler",
    points: [
      "Autonomous",
      "Faculty Portals",
      "Live Timetables",
      "PHP, SQL",
      "Vanilla Css, BStrap",
    ],
    images: [AT1, AT2, AT3, AT4, AT5, AT6, AT7, AT8, AT9],
    interval: 4800,
  },
];



export default function ProjectsMn() {
  return (
   
    <>
      <div className="Project_Wrpr">
        <SpaceStrz numberofstars={5} Prim="Work" Sec='Folio'/>
        {projects.map((project) => (
          <ProjectShowcase key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
