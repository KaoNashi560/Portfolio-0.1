import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="text-white font-bold flex justify-center gap-6">
      { (['about', 'portfolio', 'contact']).map((link, index) => (
        <NavLink exact to={ link } activeClassName="!border-red-500 text-red-400" className="border-transparent uppercase text-sm inline-block px-4 pt-8 border-t-4 transition-all ease-in-out duration-500 hover:text-red-400">
          { link }
        </NavLink>
      )) }
    </nav>
  );
}
 
export default Navbar;