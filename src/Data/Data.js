export const portfolioData = [
  {
    id: 1,
    dataName: "Education",
    data: [
      {
        id: 1,
        course: "Full Stack Web Development (MERN Stack)",
        institute: "Almabetter Edu Pvt. Ltd.",
        year: "2022 - 2023",
      },
      {
        id: 2,
        course: "B.Ed.",
        institute: "D.D.U. University",
        year: "2019 - 2021",
      },
      {
        id: 3,
        course: "B.Sc.(Maths)",
        institute: "D.D.U. University",
        year: "2015 - 2018",
      },
    ],
  },
  {
    id: 2,
    dataName: "Experience",
    data: [
      {
        id: 1, 
        designation: "Frontend Developer",
        organization: "SkillSphere Solutions",
        year: "June, 2023 -  March, 2024",
        work :[ "Transformed a static HTML, CSS, and Bootstrap website into a dynamic, interactive platform using ReactJS, enhanced user experience.", "Developed over 10 reusable React components, optimizing frontend modularity and reducing development overhead by 25%.", "Implemented responsive design principles resulting in a 20% increase in website accessibility across various devices and screen sizes.","Implemented over 20 RESTful API calls within the React application ensuring efficient communication with backend services.","Implemented ReduxJS Toolkit in a project, reducing overall codebase complexity by 20% through optimized state management and utilizing Thunk middleware "],
      }
    ],
  }
];

export const projectData = [
  {
    id: 8,
    title: "Linkup Social Site",
    group: "MERN Stack Full",
    techStack: ["NodeJs","ExpressJs","ReactJS", "Tailwind CSS"],
    date: "Dec, 2023",
    duration: "40 Days",
    description: "Frontend: The frontend of this MERN (MongoDB, Express.js, React, Node.js) stack application is developed using Vite, a fast front-end development build tool. It utilizes React as the main JavaScript library for building user interfaces. The project structure includes essential directories such as src for source code, assets for static assets, and components for reusable React components. Key dependencies like Axios for HTTP requests, React Router for navigation, and Tailwind CSS for styling are included. The scripts in package.json enable various tasks like development, building, linting. Backend: The backend of this MERN stack application is built with Node.js and Express.js. It incorporates MongoDB as the database, using Mongoose as an ODM (Object Document Mapper). Key features and dependencies include bcrypt for password hashing, JWT (JSON Web Tokens) for authentication, Cloudinary for cloud-based image storage, and Multer for handling file uploads. The project structure includes directories like src for source code, controllers for handling business logic, middlewares for custom middleware functions, models for defining MongoDB schemas, and routes for API routes. The backend is configured to use nodemon for development, and the dotenv package for managing environment variables. In summary, this MERN stack application combines a robust and scalable backend with an efficient and modern frontend, providing a full-fledged web application experience. The technologies used ensure a seamless integration between the client-side and server-side components, allowing for the development of dynamic and responsive web applications.",
    imageUrl: ["Images/linkUp/linkUp.png","Images/linkUp/linkUp1.png","Images/linkUp/linkUp2.png","Images/linkUp/linkUp3.png"],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/linkup-social-site-server",
    siteUrl: "https://linkup.amrishpratapsingh.com"
  },
  {
    id: 7,
    title: "Flash Card Generator",
    group: "ReactJS Frontend",
    techStack: ["ReactJS", "Tailwind CSS", "Redux"],
    date: "Oct, 2023",
    duration: "15 Days",
    description: "The Flashcard Generator is a modern web application developed using React, Redux, Vite, and Jest technologies. This project is designed with a modular structure, featuring well-organized components and efficient state management through Redux. Users can create and customize flashcards and groups to categorize and manage their flashcards more systematically. The application's responsive styling is achieved through Tailwind CSS.",
    imageUrl: ["Images/flashCardGenerator/flashCardGenerator.png","Images/flashCardGenerator/flashCardGenerator1.png","Images/flashCardGenerator/flashCardGenerator2.png","Images/flashCardGenerator/flashCardGenerator3.png"],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/flashcardgenerator",
    siteUrl: "https://flashcardgenerator.amrishpratapsingh.com"
  },
  {
    id: 6,
    title: "Portfolio Website",
    group: "ReactJS Frontend",
    techStack: ["ReactJS", "Tailwind CSS"],
    date: "Dec, 2023",
    duration: "10 Days",
    description: "This project is a responsive portfolio website built using React.js and styled with Tailwind CSS. It features a clean and modern design, providing an elegant showcase for your personal and professional information. The website includes multiple sections, such as Home, About, Projects, Contact and Blog accessible through a sleek sidebar navigation menu. Responsive Design: The layout is designed to be responsive, ensuring an optimal viewing experience on various devices, including desktops, tablets, and mobile phones.",
    imageUrl: ["Images/portfolio/portfolio.png","Images/portfolio/portfolio1.png","Images/portfolio/portfolio2.png","Images/portfolio/portfolio3.png",],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/myPortfolio2024",
    siteUrl: "https://amrishpratapsingh.com"
  },
  {
    id: 5,
    title: "Ecommerce App",
    group: "ReactJS Frontend",
    techStack: ["ReactJS"],
    date: "April, 2023",
    duration: "20 Days",
    description: "I developed a fully functional eCommerce application as a sample project. Building this project was challenging. Hands-on experiences enabled me to grasp essential concepts of ReactJS in building complex robust applications. This project signifies a huge milestone in my journey as a developer. It showcases my ability to overcome challenges. Used React Hooks, like useEffect, API call, and managing route parameter.",
    imageUrl: ["Images/quickMart/quickMartEcommerce.png","Images/quickMart/quickMartEcommerce1.png","Images/quickMart/quickMartEcommerce2.png","Images/quickMart/quickMartEcommerce3.png",],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/quick-mart-ecommerce",
    siteUrl: "https://quickmart.amrishpratapsingh.com"
  },
  {
    id: 4,
    title: "Todo App",
    group: "ReactJS Frontend",
    techStack: ["ReactJS", "Bootstrap"],
    date: "April, 2023",
    duration: "10 Days",
    description: "As it's my first project on ReactJS, a simple yet impactful Todo App. This project served as my gateway to the world of React development and helped with core concepts such as component lifecycle and state management. I learned Class-based components, Interactivity with buttons, showing each ToDo card dynamically with a random color, and utilizing local storage.",
    imageUrl: ["Images/todo/toDo.png","Images/todo/toDo1.png","Images/todo/toDo2.png","Images/todo/toDo3.png",],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/todo-app",
    siteUrl: "https://todoapp.amrishpratapsingh.com"
  },
  {
    id: 3,
    title: "Weather App",
    group: "ReactJS Frontend",
    techStack: ["ReactJS", "Bootstrap"],
    date: "March, 2023",
    duration: "10 Days",
    description: "This is my first project utilizing API calls - a Weather Project. This project taught me the fundamentals of accessing and fetching data from an API. Despite the challenges posed by API integration, I successfully overcame them, improving my knowledge and skills. This project provided practical exposure to working with APIs, enhancing my understanding of data retrieval and usage.",
    imageUrl: ["Images/weatherApp/weatherApp.png","Images/weatherApp/weatherApp1.png","Images/weatherApp/weatherApp2.png","Images/weatherApp/weatherApp3.png",],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/weather-project-new",
    siteUrl: "https://weatherapp.amrishpratapsingh.com"
  },
  {
    id: 2,
    title: "Dice Game App",
    group: "DOM Manipulation",
    techStack: ["Javascript"],
    date: "Jan, 2023",
    duration: "5 Days",
    description: "This project is HTML, CSS, and JavaScript-based Dice Game utilizing the Math.random function. Each roll is powered by the Math.random function, generating unpredictable outcomes and have essential logic to simulate dice rolls and determine winners. This Dice Game project showcases my ability to combine HTML, CSS, and JavaScript to create a fun and interactive web-based game by DOM Manipulation.",
    imageUrl: ["Images/diceGame/diceGame.png", "Images/diceGame/diceGame1.png","Images/diceGame/diceGame2.png","Images/diceGame/diceGame3.png"],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/Dicegame-html-css-js",
    siteUrl: "https://amrishkush.github.io/Dicegame-html-css-js"
  },
  {
    id: 1,
    title: "Drum Kit App",
    group: "DOM Manipulation",
    techStack: ["JavaScript"],
    date: "Jan, 2023",
    duration: "2 Days",
    description: "This project is interactive Drum Kit App. Using DOM event listeners, click buttons or press keyboard letters to trigger drum sounds from audio files. This project combines user interaction, audio integration, and JavaScript's DOM manipulation. Feel the beat and explore the Drum Kit App below.",
    imageUrl: ["Images/drumKit/drumKit.png","Images/drumKit/drumKit.png","Images/drumKit/drumKit.png","Images/drumKit/drumKit.png",],
    videoUrl: " ",
    codeUrl: "https://github.com/Amrishkush/Drum-kit-html-css-js",
    siteUrl: "https://amrishkush.github.io/Drum-kit-html-css-js"
  },
];

import { FaReact, FaBootstrap,FaNode, FaGithub } from "react-icons/fa";
import { SiTailwindcss,SiRedux,SiHtml5, SiCss3,SiJavascript,SiExpress,SiMongodb,SiVisualstudio } from "react-icons/si";
export const skillsData = [
  {
    type: "Frontend",
    lists: [
      {name:"ReactJS" , icon: FaReact , color: "#61DAFB"},
      {name:"Redux" , icon: SiRedux , color: "#764ABC"},
      {name:"Tailwind CSS" , icon: SiTailwindcss , color: "#38B2AC"},
      {name:"Bootstrap" , icon: FaBootstrap , color: "#7952B3"},
      {name:"HTML5" , icon: SiHtml5 , color: "#E34F26"},
      {name:"CSS3" , icon: SiCss3 , color: "#264DE4"},
      {name:"JavaScript" , icon: SiJavascript , color: "#F7DF1E"},
    ]
  },
  {
    type: "Backend",
    lists: [
      {name:"Node.js" , icon: FaNode , color: "#339933"},
      {name:"Express.js" , icon: SiExpress , color: "#FFFFFF"},
      {name:"MongoDB" , icon: SiMongodb , color: "#47A248"},
    ]
  },
  {
    type: "Dev Tools",
    lists: [
      {name:"Github" , icon: FaGithub , color: "#FFFFFF"},
      {name:"VS Code" , icon: SiVisualstudio , color: "#007ACC"},
      
    ]
  }
]

//export in default from in curly bracket doesnt work correctly so write before const
