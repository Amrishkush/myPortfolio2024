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
        designation: "Teacher",
        organization: "Brainwave Study Point",
        year: "2021 - 2024",
      },
      {
        id: 2,
        designation: "Teacher",
        organization: "Education Site Coaching",
        year: "2019 - 2021",
      },
      {
        id: 3,
        designation: "Teacher & Co-ordinator",
        organization: "D.D.N. Public Academy",
        year: "2016 - 2019",
      },
    ],
  }
];

export const techSkills = [
    {
        id: 1,
        stack: "Front-End Development",
        performance: "80%",  //percentage in taiwind don't support 82 or 85 it supports 80 90 or tens value 
        tech: [
            {
                id: 1,
                techName: "ReactJs",
                performance: 80
            },
            {
                id: 2,
                techName: "JavaScript",
                performance: 70
            },
            {
                id: 3,
                techName: "Tailwind",
                performance: 81
            }
        ]
    },
    {
        id: 2,
        stack: "Back-End Development",
        performance: "70%",
        tech: [
            {
                id: 1,
                techName: "NodeJs",
                performance: 70
            },
            {
                id: 2,
                techName: "MongoDB",
                performance: 70
            },
            {
                id: 3,
                techName: "SQL",
                performance: 70
            }
        ]
    },

]

export const projectData = [
  {
    id: 1,
    title: "Flash Card Generator",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: ["src/Images/background.jpg"],
    videoUrl: " ",
    codeUrl: "https://google.com ",
    siteUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "This project is a responsive portfolio website built using React.js and styled with Tailwind CSS. It features a clean and modern design, providing an elegant showcase for your personal and professional information. The website includes multiple sections, such as Home, About, Projects, and Contact, accessible through a sleek sidebar navigation menu. Responsive Design: The layout is designed to be responsive, ensuring an optimal viewing experience on various devices, including desktops, tablets, and mobile phones.",
    imageUrl: ["/src/Images/background.jpg"],
    videoUrl: " ",
    codeUrl: " ",
  },
  {
    id: 3,
    title: "Ecommerce App",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "I developed a fully functional eCommerce application as a sample project. Building this project was challenging. Hands-on experiences enabled me to grasp essential concepts of ReactJS in building complex robust applications. This project signifies a huge milestone in my journey as a developer. It showcases my ability to overcome challenges. Used React Hooks, like useEffect, API call, and managing route parameter.",
    imageUrl: ["/src/Images/quick-mart-ecommerce-cover.png"],
    videoUrl: " ",
    codeUrl: " ",
  },
  {
    id: 4,
    title: "Todo App",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "As it's my first project on ReactJS, a simple yet impactful Todo App. This project served as my gateway to the world of React development and helped with core concepts such as component lifecycle and state management. I learned Class-based components, Interactivity with buttons, showing each ToDo card dynamically with a random color, and utilizing local storage.",
    imageUrl: ["/src/Images/todos-app-cover.png"],
    videoUrl: " ",
    codeUrl: " ",
  },
  {
    id: 5,
    title: "Weather App",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "This is my first project utilizing API calls - a Weather Project. This project taught me the fundamentals of accessing and fetching data from an API. Despite the challenges posed by API integration, I successfully overcame them, improving my knowledge and skills. This project provided practical exposure to working with APIs, enhancing my understanding of data retrieval and usage.",
    imageUrl: ["/src/Images/weather-app-cover.png"],
    videoUrl: " ",
    codeUrl: " ",
  },
  {
    id: 6,
    title: "Dice Game App",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "This project is HTML, CSS, and JavaScript-based Dice Game utilizing the Math.random function. Each roll is powered by the Math.random function, generating unpredictable outcomes and have essential logic to simulate dice rolls and determine winners. This Dice Game project showcases my ability to combine HTML, CSS, and JavaScript to create a fun and interactive web-based game by DOM Manipulation.",
    imageUrl: ["/src/Images/dice-game-cover.png"],
    videoUrl: " ",
    codeUrl: " ",
  },
  {
    id: 7,
    title: "Drum Kit App",
    techStack: ["React", "Tailwind CSS"],
    date: "20 Jan, 2024",
    duration: "20 Days",
    description: "This project is interactive Drum Kit App. Using DOM event listeners, click buttons or press keyboard letters to trigger drum sounds from audio files. This project combines user interaction, audio integration, and JavaScript's DOM manipulation. Feel the beat and explore the Drum Kit App below.",
    imageUrl: ["/src/Images/drum-kit-cover.png"],
    videoUrl: " ",
    codeUrl: " ",
  },
];

//export in default from in curly bracket doesnt work correctly so write before const
