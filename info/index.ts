const info = {
  name: "Michael Scharf",
  headshot: "/linkedin.jpeg",
  linkedIn: "https://www.linkedin.com/in/michael-w-scharf/",
  summary: "I'm a full-stack engineer at Public Impact, driving positive change for students and educators through the Opportunity Culture initiative and continuous innovation. With a combination of technical expertise and creative problem-solving, I deliver high-quality and user-friendly solutions to enhance websites, software, and applications.",
  github: "https://github.com/2017mike",
  email: "mwscharf@ucdavis.edu",
  sections: ["About", "Projects", "Contact"],
  featuredProjects: [{
    name: 'Zap',
    summary: "A bug-tracking app that aims to combine project management and bug tracking aspects of app development.",
    image: '/zapMock.png', 
    link: "https://zap-app-646e95e3d663.herokuapp.com/",
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
],
  otherProjects: [
    {
    name: 'This Portfolio',
    summary: "My current personal portfolio! :) Designed and coded by me.",
    link: "https://daisyportfolio.vercel.app/",
    github: "https://github.com/2017mike/daisyportfolio",
    technologies: ["React", "TypeScript", "Tailwind", "DaisyUI"]
    },
   
  ]
}


export default info