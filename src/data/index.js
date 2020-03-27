//icons:
import twitter from "../images/social/ico_twitter.svg"
import instagram from "../images/social/ico_instagram.svg"
import linkedin from "../images/social/ico_linkedin.svg"
import github from "../images/social/ico_github.svg"

const data = {
  navbar: [
    {
      name: "Home",
      anchor: "#home",
    },
    {
      name: "About",
      anchor: "#about",
    },
    {
      name: "Skills",
      anchor: "#skills",
    },
    {
      name: "Work",
      anchor: "#work",
    },
    {
      name: "Contact",
      anchor: "#contact",
    },
  ],
  hero: {
    title1: "Hi, I'm",
    title2: "Pep",
    subtitle: "Web App Development",
  },
  about: {
    id: "about",
    title: "About",
    description: [
      "I am a web developer from Barcelona. I have worked for various companies and clients and as a hobby to keep improving with side projects. Although I have studies and experience as a Full Stack developer nowadays I am more focused in front-end and Interactive Design, using my technical knowledge along with my creativity.",
      "I am a big fan of playing basketball, beach volleyball and other outdoor activities and traveling. I am a family person, therefore my preference is working remotely.",
      "I am looking for ambitious challenging projects",
    ],
    social: [
      {
        alt: "twitterIcon",
        href: "https://twitter.com/pepdbm89",
        src: `${twitter}`,
      },
      {
        alt: "IgIcon",
        href: "https://instagram.com/pdbm77",
        src: `${instagram}`,
      },
      {
        alt: "linkedInIcon",
        href: "`https://www.linkedin.com/in/josepdelbano",
        src: `${linkedin}`,
      },
      {
        alt: "githubIcon",
        href: "https://github.com/pepdbm7",
        src: `${github}`,
      },
    ],
  },
  skills: {
    id: "skills",
    title: "Skills",
    description: [
      "Cross Functional Team oriented",
      "Responsive smooth interactive Design",
      "Cross Browser Testing & Debugging",
      "Content Management (Wordpress)",
      "SEO and performance focused",
      "Ecommerces and payment platforms",
      "Agile Development, Monday, Kanban",
    ],
  },
  work: {
    id: "work",
    title: "Work",
    description: `I have been doing projects mostly with ReactJS, both professional work and side projects. You can see below a couple of my personal projects, but to see the source code and to see the rest of my projects you can visit my <a href="https://github.com/pepdbm7" target="_blank" rel="noopener noreferrer">Github</a>.`,
    projects: [
      {
        name: "planbe",
        title: "PlanBe",
        subtitle: "E-commerce MERN Fullstack",
        description: [
          "Adds/removes products to the Cart",
          "Simulated payment process",
          "Non-relational DB created with Mongo",
          "User's management: Register/login",
          "Editable user's profile",
          "Sends customized confirmation emails",
          "Responsive design",
          "Tested with Mocha&Chai",
        ],
        demoUrl: "http://planbe-freshbites.surge.sh/",
      },
      {
        name: "meetup",
        title: "MeetUp",
        subtitle: "Social Network MEVN Fullstack",
        description: [
          "Used <b>Vue</b> and <b>Vuex</b> for Front-End",
          "Non-relational DB created with Mongo",
          "User's management: Register/login",
          "Editable user's profile",
          "Create/edit/remove Events (CRUD)",
          "Confirm/cancel assistance to events",
          "Create/remove comments on events",
          "Filter events by assistance",
          "Responsive design",
        ],
        demoUrl: "https://meetup-mevn-pep.herokuapp.com",
      },
      {
        name: "spotify",
        title: "MusicLab 3D Cube",
        subtitle: "React/Redux Front-End App",
        description: [
          "3D Cube as the layout",
          "SPA, using react-router",
          "Use of itunes API",
          "React Hooks",
          "Tested with Mocha&Chai",
        ],
        demoUrl: "https://music-3d-cube.netlify.com",
      },
      {
        name: "gnomefinder",
        title: "Gnome Finder",
        subtitle: "React/Redux Front-End App",
        description: [
          "SPA, using react-router",
          "Advanced search with many filters and sorting options",
          "Apply up to 4 filters simultaneously",
          "Fetching local data with axios",
          "Responsive design",
          "Tested with Mocha&Chai",
        ],
        demoUrl: "https://thirsty-neumann-4260ef.netlify.com/",
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Contact Me",
    description:
      "Do you have any ambitious project in mind? Let's build it together! ...or ask me whatever you feel like",
  },
}

export default data
