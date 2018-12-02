const projects = [
  {
    _id: "001",
    name: "RGB Guessing Game",
    image_url: require("./img/colorgame.PNG"),
    description: `This game allows user to test out their RGB estimation skills by providing users with various color options to choose from.`,
    github_url: "https://github.com/Axeaian/colorGame",
    app_url: "https://rgb-colorgame.netlify.com/"
  },
  {
    _id: "002",
    name: "To-do List",
    image_url: require("./img/todolist.PNG"),
    description: `This is a simple To-do list created using React`,
    github_url: "https://github.com/Axeaian/dom-todo-list",
    app_url: "https://jumpstart-todolist.netlify.com/"
  },
  {
    _id: "003",
    name: "Morse Code Page",
    image_url: require("./img/miniproj.PNG"),
    description: `This website provides a short introduction of morse code.`,
    github_url: "https://github.com/Axeaian/mini-proj-1",
    app_url: "https://jumpstart-miniproj.netlify.com/index.html"
  },
  {
    _id: "004",
    name: "Gif-tionary",
    image_url: require("./img/giftionary.PNG"),
    description: `This app was built to return search terms from Giphy and Urban-dictionary APIs as the results are unpredictable and interesting.`,
    github_url: "https://github.com/Axeaian/Giphy",
    app_url: "https://react-gif-tionary.herokuapp.com/"
  },
  {
    _id: "005",
    name: "Yelp Camp",
    image_url: require("./img/yelpcamp.PNG"),
    description: `This campgrounds app showcases campgrounds posted by users allows user to login and create, edit or comment on campgrounds.`,
    github_url: "https://github.com/Axeaian/yelp-camp",
    app_url: "https://yelp-camp-89.herokuapp.com"
  },
  {
    _id: "006",
    name: "Pokemon App",
    image_url: require("./img/pokemon.PNG"),
    description: `This app was built to show and keep track of a user’s favourite Pokémon. It includes a pokédex and collections page where users can view/add/delete their list of favourite Pokémon. `,
    github_url: "https://github.com/Axeaian/mypokelist",
    app_url: "https://mypokelist.herokuapp.com/"
  }
];

export const getProjects = () => {
  return projects;
};
