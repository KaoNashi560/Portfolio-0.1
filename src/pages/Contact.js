import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const toggleLabel = (e) => {
    const field = e.target
    const fieldLabel = field.nextElementSibling
    if (field.value !== "") {
      console.log()
      fieldLabel.classList.add('-translate-y-6')
      fieldLabel.classList.add('!text-sm')
    } else {
      fieldLabel.classList.remove('-translate-y-6')
      fieldLabel.classList.remove('!text-sm')
    }
  } 
  const toggleLabelPosition = (e) => {
    const form = e.target.closest('form')
    const labels = form.querySelectorAll('span')
    labels.forEach(function(label) {
      label.classList.remove('-translate-y-6')
      label.classList.remove('!text-sm')
    })
  }
  return (
    <div className={`grid grid-cols-10 gap-5 lg:mt-20 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } transition-all duration-[2000ms] ease-in-out`}>
      <div className="hidden lg:block lg:col-span-2 relative">
        <Link to="portfolio" className="block bg-red-500 sticky top-[200px] p-2 shadow text-white font-bold w-32 transition-all ease-out duration-300 hover:bg-green-500 uppercase text-xs group text-end">
          <span className="child-div transform group-hover:-translate-x-6 transition-all ease-out duration-300 inline-block">Previous</span>
        </Link>
      </div>
      <div className="col-span-10 lg:col-span-6 mt-5 px-10 lg:px-0 lg:mt-0 mb-10">
        <h1 className="text-3xl text-white font-bold">Get in touch</h1>
        <p className="text-gray-400 mt-5 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius adipisci iure autem at dignissimos natus expedita architecto, numquam est quaerat, esse quia laudantium voluptatem reiciendis iste nisi veniam molestiae dolore.
        </p>
        <div className="block sm:grid grid-cols-12 w-full gap-8 mt-14">
          <div className="col-span-8">
            <form>
              <div className="sm:grid grid-cols-2 gap-8">
                <div className="relative col-span-1">
                  <input onKeyUp={ toggleLabel } type="text" className="capitalize border-b w-[100%] bg-transparent font-bold text-lg outline-none text-gray-400 px-1" />
                  <span className="text-gray-500 font-bold block transform duration-150 transition-all ease-out absolute start-1 text-lg -z-10 top-0">Fill with your name</span>
                </div>
                <div className="mt-10 sm:mt-0 relative col-span-1">
                  <input onKeyUp={ toggleLabel } type="email" className="border-b w-[100%] bg-transparent font-bold text-lg outline-none text-gray-400 px-1" />
                  <span className="text-gray-500 font-bold block transform duration-150 transition-all ease-out absolute start-1 text-lg -z-10 top-0">Fill with your email</span>
                </div>
              </div>
              <div className="mt-10 relative">
                <input onKeyUp={ toggleLabel } type="text" className="border-b w-[100%] bg-transparent font-bold text-lg outline-none text-gray-400 px-1" />
                <span className="text-gray-500 font-bold block transform duration-150 transition-all ease-out absolute start-1 text-lg -z-10 top-0">Message</span>
              </div>
              <div className="flex gap-4 mt-10">
                <input type="reset" onClick={ toggleLabelPosition } className="bg-gray-600 p-2 text-gray-200 text-sm font-bold uppercase tracking-wider px-3 rounded-lg shadow hover:bg-gray-800 transition ease-out duration-300" value="reset" /> 
                <input type="submit" className="bg-red-600 p-2 text-gray-200 text-sm font-bold uppercase tracking-wider px-3 rounded-lg shadow hover:bg-red-800 transition ease-out duration-300" value="submit" /> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;