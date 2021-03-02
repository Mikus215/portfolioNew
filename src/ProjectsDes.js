import memoryGame from './img/memorygame.png';
import music from './img/music.png';
import nefretet from './img/nefretet.png';
import pizza from './img/pizza.png';
import prcgame from './img/prcgame.png';
import toDoList from './img/todolist.png';
import weatherPicture from './img/weatherPicture.png';

export const ProjectsState = () => {
    return [
      {
        title: "Music",
        mainImg: music,
        live: "https://music-app-h.netlify.app/",
        github: "https://github.com/Mikus215/Music-App",
        description: "Music application, I used to create it mainly Reacta."
      },
      {
        title: "Hairdresser",
        mainImg: nefretet,
        live: "https://nefretetefryzjer.pl/",
        github: "https://github.com/Mikus215/test21345456",
        description: "Project for a local hairdresser. I used html, JavaScript , SCSS(BEM)."
      },
      {
        title: "Pizza Restaurant",
        mainImg: pizza,
        live: "https://pizza32.netlify.app/",
        github: "https://github.com/Mikus215/Pizza",
        description: "This is a fictional page for a restaurant. This site shows my RWD ability. I used html, sass and some JavaScript."
      },
      {
        title: "Paper Rock and Scissors",
        mainImg: prcgame,
        live: "https://prsgame.netlify.app/",
        github: "https://github.com/Mikus215/",
        description: "This is a mini game, rock, paper and scissors. See who is better, you or the PC. This site shows my JavaScript ability."
      },
      {
        title: "Weather APP",
        mainImg: weatherPicture,
        live: "https://wpapi.netlify.app/",
        github: "https://github.com/Mikus215/weatherApp",
        description: "It shows a lot of information about weather. This site shows my API ability."
      },
      {
        title: "Memory Game",
        mainImg: memoryGame,
        live: "https://memory-game-animal.netlify.app/",
        github: "https://github.com/Mikus215/memory-game",
        description: "Play to relax. A memory game that shows your time at the end. I used mainly JavaScript."
      },
      {
        title: "To Do List",
        mainImg: toDoList,
        live: "https://tasktodolist.netlify.app/",
        github: "https://github.com/Mikus215/ToDoList",
        description: "Using 'To Do List' you will not forget about your tasks. I used mainly JavaScript."
      },
    ];
  };