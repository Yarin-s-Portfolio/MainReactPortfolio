import { v4 as uuidv4 } from 'uuid';
import DivingClubsImg from '../images/turtle.jpg';
import CardWarGameImg from '../images/card-war-game.png';
import MardiGrasImg from '../images/mardi-gras.png';
import PortfolioImg from '../images/portfolio-img.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Diving Clubs',
    desc:
      'An application to add and find diving clubs.',
    fullDesc: `My first full stack project which integrate between client and server side,
               a lot of technologies and libraries involved, I gave a lot of time to understand
               how the integration works, what to use on server and what on client, which data should
               the server return and which routes I need.
               I engaged so much problems and issues that helped me to figure out how to learn new things
               by myself, how to handle new techs that I didnt know(like slack and more).
               To conclude, this project taught me so much about me, my potential and my passion to create and solve things
               to make my visions works.`,
    usedLanguage: ['Angular 11', 'Node.js', 'Express', 'MongoDb', 'Slack'],
    img: DivingClubsImg,
    liveURL: 'https://diving-clubs-by-yarin.netlify.app/',
    github: 'https://github.com/Diving-Clubs'
  },
  {
    id: uuidv4(),
    name: 'Card-War-Game',
    desc:
      'The known Cards-War game.',
    fullDesc: `I wanted to build this game in react & redux to improve my understanding in everything connected to data transfer
                from the global state and make the integration between these two libraries.
                I had a lot of issues with the live data transfer and that helped me to
                get into the problems and solve them.`,
    usedLanguage: ['React', 'Redux'],
    img: CardWarGameImg,
    liveURL: 'https://card-war-game.netlify.app/',
    github: 'https://github.com/yarinostudent/cards-war-game'
  },
  {
    id: uuidv4(),
    name: 'Mardi-Gras',
    desc:
      'Website to present the mardi gras festival',
    fullDesc: `This project has been given to me after HTML CSS Module by Hacker-u.
                I have learned a lot of grid and flex layout, how to build responsive components,
                Make an api request and etc...
                This project got and A score and good response from the lecturer.`,
    usedLanguage: ['HTML', 'CSS/Sass', 'Vanilla & jQuery', 'API request'],
    img: MardiGrasImg,
    liveURL: 'https://mardi-gras-by-yarin.netlify.app/',
    github: 'https://github.com/Mardi-Gras/Mardi-Gras'
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'This Portfolio :)',
    fullDesc: `This project purpose is to show everything I know in one place.
                It took my a lot of time to understand the component building method,
                it helped me to understand how to build work with reusable components,
                how to make them responsive and making clean style for the eye.
                I enjoyed to learn from the association with the tutorial.`,
    usedLanguage: ['React', 'Styled components', 'Swiper', 'Emailjs'],
    img: PortfolioImg,
    liveURL: 'https://mardi-gras-by-yarin.netlify.app/',
    github: 'https://github.com/Mardi-Gras/Mardi-Gras'
  }
];

export default projects;
