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
      },
      {
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
      },
      {
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
      },
      {
        title: "PinterHooks",
        subtitle: "React and Redux app",
        description: [
          "High quality images searcher",
          "Used React's Hooks",
          "Responsive smooth design",
          "Used Pixabay API",
          "Includes pagination",
        ],
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Contact Me",
    description: "blablabla",
  },
  footer: "© 2019 PepDev",
}

export default data
