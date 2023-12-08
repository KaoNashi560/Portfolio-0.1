import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className={`grid grid-cols-10 gap-5 lg:mt-20 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } transition-all duration-[2000ms] ease-in-out`}>
      <div className="hidden lg:block lg:col-span-2 relative">
        <Link to="about" className="block bg-red-500 sticky top-[200px] p-2 shadow text-white font-bold w-32 transition-all ease-out duration-300 hover:bg-green-500 uppercase text-xs group text-end">
          <span className="child-div transform group-hover:-translate-x-6 transition-all ease-out duration-300 inline-block">Previous</span>
        </Link>
      </div>
      <div className="col-span-10 lg:col-span-6 mt-5 px-10 lg:px-0 lg:mt-0 mb-10">
        <h1 class="text-3xl text-white font-bold">Web developer portfolio</h1>
        <p className="text-gray-400 mt-5 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius adipisci iure autem at dignissimos natus expedita architecto, numquam est quaerat, esse quia laudantium voluptatem reiciendis iste nisi veniam molestiae dolore.
        </p>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="col-span-2 sm:col-span-1 relative">
            <div className="absolute bg-gray-800 bg-opacity-[0.8] h-60 w-full -z-10 -right-2 top-2"></div>
            <div className="h-60 bg-gray-900 z-20"></div>
          </div>
          <div className="col-span-2 sm:col-span-1 relative">
            <div className="absolute bg-gray-800 bg-opacity-[0.8] h-60 w-full -z-10 -right-2 top-2"></div>
            <div className="h-60 bg-gray-900 z-20"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="col-span-2 sm:col-span-1 relative">
            <div className="absolute bg-gray-800 bg-opacity-[0.8] h-60 w-full -z-10 -right-2 top-2"></div>
            <div className="h-60 bg-gray-900 z-20"></div>
          </div>
          <div className="col-span-2 sm:col-span-1 relative">
            <div className="absolute bg-gray-800 bg-opacity-[0.8] h-60 w-full -z-10 -right-2 top-2"></div>
            <div className="h-60 bg-gray-900 z-20"></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:col-span-2 lg:block">
        <Link to="contact" className="block bg-green-500 sticky top-[200px] ml-auto p-2 shadow text-white font-bold w-32 transition-all ease-out duration-300 hover:bg-red-500 uppercase text-xs group">
          <span className="child-div transform group-hover:translate-x-6 transition-all ease-out duration-300 inline-block">Next</span>
        </Link>
      </div>
    </div>
  );
}
 
export default Portfolio;