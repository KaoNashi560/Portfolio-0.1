import { useEffect, useState } from 'react';
import TypingEffect from '../tools/TypingEffect';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className={`grid grid-cols-10 gap-5 lg:mt-32 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } transition-all duration-[2000ms] ease-in-out`}>
      <div className="col-span-5 lg:col-span-2 text-sm text-white font-bold tracking-wider">
        <div className="sticky top-[200px]">
          <div className="block mb-2">
            <a href="https://web.facebook.com/althon.tomada.5/" target="blank" className="w-24 bg-blue-700 shadow p-2 inline-block text-center transition-all ease-out duration-300 hover:w-28">
              Facebook
            </a>
          </div>
          <div className="block mb-2">
            <a href="https://github.com/KaoNashi560" target="blank" className="w-24 bg-gray-900 shadow p-2 inline-block text-center transition-all ease-out duration-300 hover:w-28">
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-10 order-2 lg:order-2 lg:col-span-6 justify-center text-center mt-5 px-10 lg:px-0 lg:mt-0">
        <div className="text-white">
          <h1 className="text-3xl font-bold">Hello, my name is Althon Dimple M. Tomada,</h1>
          <p className="text-gray-400 mt-5 text-justify lg:text-center">
             <TypingEffect text="a  passionate and aspiring junior web developer. I have a solid foundation in HTML, CSS, and JavaScript, and I'm eager to contribute my skills to create engaging and user-friendly websites. I'm currently honing my skills in front-end and back-end development, and I'm excited about exploring new technologies and frameworks." />
          </p>
        </div>
      </div>
      <div className="col-span-5 order-2 lg:order-3 lg:col-span-2 lg:block hidden">
        <Link to="portfolio" className="block bg-green-500 sticky top-[200px] ml-auto p-2 shadow text-white font-bold w-32 transition-all ease-out duration-300 hover:bg-red-500 uppercase text-xs group">
          <span className="child-div transform group-hover:translate-x-6 transition-all ease-out duration-300 inline-block">Next</span>
        </Link>
      </div>
    </div>
  );
}
 
export default About;