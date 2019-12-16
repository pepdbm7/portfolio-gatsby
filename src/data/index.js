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
    title: "About me",
    description: "I am bla bla bla",
    button: "Download CV",
  },
  skills: {
    id: "skills",
    title: "My skills",
    description: "bla bla bla",
  },
  work: {
    id: "work",
    title: "Work",
    projects: [
      {
        image: PlanbeImg,
        title: "PlanBe",
        subtitle: "E-commerce with MERN Stack",
        description: [
          "Register and login of username and password",
          "Receive customized emails after registration, finishing an order and updating user profile",
          "Add products and remove them from the Cart",
          "Simulated payment form",
          "View of the orders history",
          "Editable all user's profile fields",
        ],
        demoUrl: "",
      },
      {
        image: MeetupImg,
        title: "MeetUp",
        subtitle: "Social Network with MEVN Stack",
        description: [
          "Register and login of username and password",
          " Create new Events",
          "Confirm or cancel assistance",
          "Create comments on events",
          "Filter events by assistance",
          "See user profile",
        ],
        demoUrl: "",
      },
      {
        image: GnomeFinderImg,
        title: "Gnome Finder",
        subtitle: "Front End React project",
        description: [
          "Restringed access with a username",
          "Login simulation by using Session storage",
          "Shows the first 20 gnomes for long lists",
          "Fetching data with axios",
          "Apply up to 4 filters simultaneously",
          "Responsive and smooth style",
        ],
        demoUrl: "",
      },
      {
        image: PinterHooksImg,
        title: "PinterHooks",
        subtitle: "React and Redux app",
        description: [
          "High quality images searcher",
          "Used React's Hooks",
          "Responsive smooth design",
          "Used Pixabay API",
          "Includes pagination",
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
