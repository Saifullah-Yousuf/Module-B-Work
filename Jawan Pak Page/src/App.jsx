import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Section01 from './Components/Section01/Section01';
import Section02 from './Components/Section02/Section02';
import Section03 from './Components/Section03/Section03';
import Section04 from './Components/Section04/Section04';
import Section05 from './Components/Section05/Section05';
import Section06 from './Components/Section06/Section06';
import Footer from './Components/Footer/Footer';
import Card01 from '../src/assets/card01.png';
import Card02 from '../src/assets/card02.jfif';
import Card03 from '../src/assets/card03.jpg';
import Card04 from '../src/assets/card04.png';
import Card05 from '../src/assets/card05.jpg';

const cards = [
  { srcs: Card01, title: 'Web and Mobile Application Development' },
  { srcs: Card02, title: 'Flutter Mobile Application Development' },
  { srcs: Card03, title: 'Graphic Design And Video Editing' },
  { srcs: Card04, title: 'Digital And Social Media Marketing' },
  { srcs: Card05, title: 'BlockChain Development' },
];
 
const App = () => {
  return (
    <div>
      <Navbar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 cards={cards} />
      <Section05 />
      <Section06 />
      <Footer />
    </div>
  )
}

export default App
