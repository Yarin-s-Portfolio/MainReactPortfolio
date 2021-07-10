import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import DivingClubsImg from '../images/turtle.jpg';
import CardWarGameImg from '../images/card-war-game.png';
import MardiGrasImg from '../images/mardi-gras.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Diving Clubs',
    desc:
      'An application to add and find diving clubs.',
    img: DivingClubsImg,
    liveURL: 'https://diving-clubs-by-yarin.netlify.app/',
    github: 'https://github.com/Diving-Clubs'
  },
  {
    id: uuidv4(),
    name: 'Card-War-Game',
    desc:
      'The known Cards-War game.',
    img: CardWarGameImg,
    liveURL: 'https://card-war-game.netlify.app/',
    github: 'https://github.com/yarinostudent/cards-war-game'
  },
  {
    id: uuidv4(),
    name: 'Mardi-Gras',
    desc:
      'Website to present the mardi gras festival',
    img: MardiGrasImg,
    liveURL: 'https://mardi-gras-by-yarin.netlify.app/',
    github: 'https://github.com/Mardi-Gras/Mardi-Gras'
  }
];

export default projects;
