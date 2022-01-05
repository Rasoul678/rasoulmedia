export enum Links {
  linkedin = "https://www.linkedin.com/in/rasoul-hesami-rostami/",
  github = "https://github.com/Rasoul678",
  stackOverflow = "https://stackoverflow.com/users/13294844/rasoul-hesami-rostami",
  facebook = 'https://www.facebook.com/profile.php?id=100076905066398',
  twitter = 'https://twitter.com/HesamiRasoul',
  instagram = 'https://www.instagram.com/rasoulhesamirostami/',
  email = "h.rostami.r@gmail.com",
  home_inventory = "http://home-inventory-laravel.herokuapp.com/",
  store = "http://storefortest.herokuapp.com/",
  cliqmind = "https://cliqmind.ir/",
  karabama = "https://karabama.com/",
}

export const projects = {
  store: {
    name: "Store",
    link: Links.store,
    description: "",
    image: "",
    technologies: ["HTML", "CSS", "JS", "Laravel", "Bootstrap"],
    github: "",
    date: "",
    role: "development",
    features: "",
  },
  home_inventory: {
    name: "Home Inventory",
    link: Links.home_inventory,
    description: "",
    image: "",
    technologies: [],
    github: "",
    date: "",
    role: "development",
    features: "",
  },

  karabama: {
    name: "Karabama",
    link: Links.karabama,
    description: "",
    image: "",
    technologies: ["HTML", "CSS", "JS", "ReactJS", "MaterialUI"],
    github: "",
    date: "",
    role: "production",
    features: "",
  },
  cliqmind: {
    name: "Cliqmind",
    link: Links.cliqmind,
    description: "",
    image: "",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "ReactJs",
      "Styled-Components",
      "Redux",
    ],
    github: "",
    date: "",
    role: "production",
    features: "",
  },
};
