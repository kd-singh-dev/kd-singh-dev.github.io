import React from 'react';
import styles from './styles.module.css';
import Cards, { CardInterface } from './components/Cards';

const cards: CardInterface[] = [
  {
    title: 'Travel Buddy',
    description:
      'Travel Buddy is a full stack application which allows my fello college mates to find travel companions back home and vice versa. Travel budy also supports cab sharing to banglore and chennai as well.',
    to: 'docs/travelbuddy',
    imagePath: 'https://i.imgur.com/IDKPlCF.png',
  },

  {
    title: 'Say Hello',
    description:
    'Say Hello is essentially a speech to sign language converter which takes a speech input from the user and converts it to a text form with the help of a JavaScript API followed by which, this text is used as an input to finally convert this speech into sign language.',
    to: 'docs/sayhello',
    imagePath: 'https://i.imgur.com/T0dnIKh.png',
  },  
  {
    title: 'Docs Stream',
    description:
      'Easies and the fastest way to collaborate while making a document. Provides a solution to hosting your document online..',
    to: 'docs/docstream',
    imagePath: 'https://i.imgur.com/wS0HdLS.png',
  },
  {
    title: 'Github CLI',
    description:
      'git-Cli is a command line automation tool developed to keep the packages of multiple repositories of an organization up to date.',
    to: 'docs/gitcli',
    imagePath: 'https://i.imgur.com/oGmlHTJ.png',
  },
  {
    title: 'Bond Mantainer',
    description:
      'Bond Mantainer is a full stack application integrated with Twilo Api to send reminder messages to the user. Bond Mantainer allows user to make healthy and effictive connections.',
    to: 'docs/bondmantainer',
    imagePath: 'https://i.imgur.com/nggxuDD.png',
  },
  // {
  //   title: 'YouTube API',
  //   description:
  //     'To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.',
  //   to: 'docs/youtubeapi',
  //   imagePath: 'https://cdn-icons-png.flaticon.com/512/152/152810.png',
  // },
];

const OtherFeaturesView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <h1>Projects</h1>
      <Cards cards={cards} />
    </div>
  );
};

export default OtherFeaturesView;
