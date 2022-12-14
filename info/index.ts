const info = {
  name: "Michael Scharf",
  headshot: "https://media-exp1.licdn.com/dms/image/C5603AQFvNIJJeybEOQ/profile-displayphoto-shrink_800_800/0/1622703483261?e=1673481600&v=beta&t=0bNnSTVUE0V6-f9CPCvLpDrA-3guD8WlCIrimZ3KSZ4",
  linkedIn: "https://www.linkedin.com/in/michael-w-scharf/",
  summary: "I'm a full-stack engineer currently working as a teaching assistant at UC Irvine's web development bootcamp. I help students learn the fundamentals as well as the latest technologies in web development. I'm comfortable with both front-end and back-end development.",
  github: "https://github.com/2017mike",
  email: "mwscharf@ucdavis.edu",
  sections: ["About", "Projects", "Contact"],
  featuredProjects: [{
    name: 'Zap',
    summary: "A bug-tracking app that aims to combine project management and bug tracking aspects of app development.",
    image: '/zapMock.png', 
    link: "https://floating-earth-73159.herokuapp.com/",
    github: "https://github.com/2017mike/zapApp",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI"]
  },
  {
    name: 'tabAngel.io',
    summary: "A website where users can submit and view guitar tabs. Includes a guitar tab creator that automatically formats submissions.",
    image: '/TabAngel.png', 
    link: "https://tabangel.io",
    github: "https://github.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Express", "MySQL", "Node"]
  },
  {
    name: 'DumpStar.io',
    summary: "A website where users can store their favorite links in folders. Data is stored in local storage and users can drag and drop folders.",
    image: '/dumpstarMock.png', 
    link: "https://dumpstar.io/",
    github: "https://github.com/2017mike/dumpstar.io",
    technologies: ["React", "Redux", "Sass"]
  },
],
  otherProjects: [
    {
    name: 'This Portfolio',
    summary: "My current personal portfolio! :) Designed and coded by me.",
    link: "https://daisyportfolio.vercel.app/",
    github: "https://github.com/2017mike/daisyportfolio",
    technologies: ["React", "TypeScript", "Tailwind", "DaisyUI"]
    },
     {
    name: 'InkedIn',
    summary: "An online community for those seeking to create or request tattoo designs.",
    link: "https://agile-everglades-33019.herokuapp.com/",
    github: "https://github.com/JEckfeldt/InkedIn",
    technologies: ["Materialize", "MySQL", "Express", "Sequelize"]
    },
  ]
}


export default info