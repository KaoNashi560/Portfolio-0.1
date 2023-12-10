import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const [name, setName] = useState(''),
  [email, setEmail] = useState(''),
  [message, setMessage] = useState(''),
  [pending, setPending] = useState(false)
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
  const handleSubmit = (e) => {
    if (name !== '' && message !== '') {
      e.preventDefault()
      setPending(true)
      const inbox = { name, email, message }
      fetch("http://localhost:8000/inboxes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inbox)
      }).then(() => {
        setTimeout(function() {
          setPending(false)
          setName('')
          setEmail('')
          setMessage('')
          toggleLabelPosition(e)
        }, 1000)
      })
    }
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
          I'm thrilled to connect with you. Whether you have questions, feedback, or just want to chat, this page is the perfect place to reach out. Looking forward to hearing from you!
        </p>
        <div className="block sm:grid grid-cols-12 w-full gap-8 mt-14">
          <div className="col-span-8">
            <form>
              <div className="sm:grid grid-cols-2 gap-8">
                <div className="relative col-span-1">
                  <input required onKeyUp={ toggleLabel } onChange={ (e) => setName(e.target.value) } value={ name } type="text" className="capitalize border-b w-[100%] bg-transparent font-bold text-lg outline-none text-gray-400 px-1" />
                  <span className="text-gray-500 font-bold block transform duration-150 transition-all ease-out absolute start-1 text-lg -z-10 top-0">Fill with your name</span>
                </div>
                <div className="mt-10 sm:mt-0 relative col-span-1">
                  <input onKeyUp={ toggleLabel } onChange={ (e) => setEmail(e.target.value) } value={ email } type="email" className="border-b w-[100%] bg-transparent font-bold text-lg outline-none text-gray-400 px-1" />
                  <span className="text-gray-500 font-bold block transform duration-150 transition-all ease-out absolute start-1 text-lg -z-10 top-0">Fill with your email</span>
                </div>
              </div>
              <div className="mt-10 relative">
                <input required onKeyUp={ toggleLabel } onChange={ (e) => setMessage(e.target.value) } value={ message } type="text" className="border-b w-[100%] bg-transparent font-bold text-lg outline-none text-gray-400 px-1" />
                <span className="text-gray-500 font-bold block transform duration-150 transition-all ease-out absolute start-1 text-lg -z-10 top-0">Message</span>
              </div>
              <div className="flex gap-4 mt-10">
                <input type="reset" onClick={ toggleLabelPosition } className="bg-gray-600 p-2 text-gray-200 text-sm font-bold uppercase tracking-wider px-3 rounded-lg shadow hover:bg-gray-800 transition ease-out duration-300" value="reset" /> 
                { !pending ? <input type="submit" onClick={ handleSubmit } className="bg-red-600 p-2 text-gray-200 text-sm font-bold uppercase tracking-wider px-3 rounded-lg shadow hover:bg-red-800 transition ease-out duration-300" value="submit" />  : <input type="submit" onClick={ handleSubmit } className="bg-red-800 p-2 text-gray-200 text-sm font-bold uppercase tracking-wider px-3 rounded-lg shadow transition ease-out duration-300 disabled" value="submiting..." /> }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;