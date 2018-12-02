const projects = [
  {
    _id: "001",
    name: "RGB Guessing Game",
    image_url: require("./img/colorgame.PNG"),
    description: `This game allows user to test out their RGB estimation skills by providing users with various color options to choose from.`,
    github_url: "#",
    app_url: "#"
  },
  {
    _id: "002",
    name: "To-do List",
    image_url: require("./img/todolist.PNG"),
    description: `This is a simple To-do list created using React`,
    github_url: "#",
    app_url: "#"
  },
  {
    _id: "003",
    name: "Morse Code Page",
    image_url: require("./img/miniproj.PNG"),
    description: `This website provides a short introduction of morse code.`,
    github_url: "#",
    app_url: "#"
  },
  {
    _id: "004",
    name: "Gif-tionary",
    image_url: require("./img/giftionary.PNG"),
    description: `This app was built to return search terms from Giphy and Urban-dictionary APIs as the results are unpredictable and interesting.`,
    github_url: "#",
    app_url: "#"
  },
  {
    _id: "005",
    name: "Yelp Camp",
    image_url: require("./img/yelpcamp.PNG"),
    description: `This campgrounds app showcases campgrounds posted by users allows user to login and create, edit or comment on campgrounds.`,
    github_url: "#",
    app_url: "#"
  },
  {
    _id: "006",
    name: "Pokemon List",
    image_url: require("./img/pokemon.PNG"),
    description: `This app was built to show and keep track of a user’s favourite Pokémon. It includes a pokédex and collections page where users can view/add/delete their list of favourite Pokémon. `,
    github_url: "#",
    app_url: "#"
  }
];

export const getProjects = () => {
  return projects;
};
