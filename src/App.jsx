import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import quotes from './assets/quotes.json';
import { IconContext } from 'react-icons';

function App() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const [number, setNumber] = useState(randomNumber);

  const handleClick = () => {
    setNumber(randomNumber);
  };

  const { author, quote } = quotes[number];

  const quoteToTweet = `"${quote}"; - ${author}`

  return (
    <div className='container' id='quote-box'>
      <IconContext.Provider value={{ className: 'quote-icon' }}>
        <h2 className='text-center ' id='text'>
          <FaQuoteLeft />
          {quote}
          <FaQuoteRight />
        </h2>
      </IconContext.Provider>
      <p id='author'> - {author} </p>

      <div className='buttons'>

        <button onClick={handleClick} id='new-quote'>
          New Quote
        </button>
        <IconContext.Provider value={{ className: 'twitter-share-button' }}>
          <a
            href={`https://twitter.com/intent/tweet?text=${quoteToTweet}`}
            target='_blank'
            rel='noreferrer'
            id='tweet-quote'
            title='tweet this quote'
          >
            <FaSquareXTwitter />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default App;

