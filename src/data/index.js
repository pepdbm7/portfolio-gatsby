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
    title1: "Hi, I'm Pep",
    title2: "Pep",
    subtitle: "Web App Development",
    link: "#about",
    linkText: "More",
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
        name: "planbe",
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
        name: "meetup",
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
        name: "gnomefinder",
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
        name: "pinterhooks",
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
