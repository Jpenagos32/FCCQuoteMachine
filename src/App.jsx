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


  const { author, quote } = quotes[number];
  const quoteToTweet = `"${quote}"; - ${author}`

  const handleClick = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setNumber(random);
  };

  return (
    <>
      <div className='container' id='quote-box'>
        <IconContext.Provider value={{ className: 'quote-icon' }}>
          <h2 className='text-center ' id='text'>
            <FaQuoteLeft />
            {quotes[number].quote}
            <FaQuoteRight />
          </h2>
        </IconContext.Provider>
        <p id='author'> - {quotes[number].author} </p>

        <div className='buttons'>

          <button type='submit' onClick={handleClick} id='new-quote'>
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

      <div className='info'>
        <p className='info-name p-margin'>
          Julian Andres Penagos
        </p>
        <a target='_blank' className='info-mail p-margin' title='Send me an e-mail' href="mailto:jpenagosdev@gmail.com">
          jpenagosdev@gmail.com
        </a>
        <a className='info-github p-margin' target='_blank' href="https://github.com/Jpenagos32">Github: @jpenagos32</a>
      </div>
    </>

  );
}

export default App;

