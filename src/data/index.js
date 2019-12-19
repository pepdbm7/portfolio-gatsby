import PlanbeImg from "../images/planbe_screenshot.png"
import MeetupImg from "../images/meetup_screenshot.png"
import GnomeFinderImg from "../images/gnomefinder_screenshot.png"
import PinterHooksImg from "../images/pinterhooks.png"

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
    title1: "gatsby",
    title2: "project",
    subtitle: "This is a personal project",
    link: "#about",
  },
  about: {
    id: "about",
    title: "About",
    description:
      "loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum ",
    button: "Download CV",
  },
  skills: {
    id: "skills",
    title: "Skills",
    description:
      "loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum ",
  },
  work: {
    id: "work",
    title: "Work",
    projects: [
      {
        image: PlanbeImg,
        title: "PlanBe",
        subtitle: "E-commerce",
        description: [
          "Created non-relational Database",
          "User's management: Register/login",
          "Editable user's profile",
          "Sends customized confirmation emails",
          "Adds/removes products to the Cart",
          "Simulated payment process",
          "Responsive design",
        ],
        demoUrl: "",
      },
      {
        image: MeetupImg,
        title: "MeetUp",
        subtitle: "Social Network with MEVN Stack",
        description: [
          "Created non-relational Database",
          "Used Vue and Vuex for Front-End",
          "User's management: Register/login",
          "Editable user's profile",
          "Create/edit/remove Events (CRUD)",
          "Confirm/cancel assistance to events",
          "Create/remove comments on events",
          "Filter events by assistance",
          "Responsive design",
        ],
        demoUrl: "",
      },
      {
        image: GnomeFinderImg,
        title: "Gnome Finder",
        subtitle: "React/Redux job application",
        description: [
          "Login simulation (Session storage)",
          "Advanced search with many filters and sorting options",
          "Apply up to 4 filters simultaneously",
          "Fetching local data with axios",
          "Responsive design",
        ],
        demoUrl: "",
      },
      {
        image: PinterHooksImg,
        title: "PinterHooks",
        subtitle: "React and Redux app",
        description: [
          "HQ images searcher",
          "React Hooks",
          "Fetching data from external API",
          "Pagination",
          "Responsive design",
        ],
        demoUrl: "",
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Contact Me",
    description:
      "Do you have any ambitious project in mind? Let's build it together! ...or ask me whatever you feel like",
  },
  footer: "2019 PepDev",
}

export default data
