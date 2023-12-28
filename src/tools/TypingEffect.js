import { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[index]);
      index += 1;
      if (index === (text.length - 1)) {
        clearInterval(intervalId);
      }
    }, 15);
    return () => clearInterval(intervalId);
  }, [text]);
  console.log(displayedText)
  return displayedText;
};

export default TypingEffect;