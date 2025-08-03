import { useTheme } from "../context/ThemeContext";
import { useState } from "react"
import { Link } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as typeof theme);
  };
  return (
    <>
      <header className="[.theme2_&]:bg-gray-400 fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-gray-100 shadow-md z-50">
        <div className="text-lg font-bold">
          <Link to="/">Theme Switcher</Link>
        </div>
        {/* desktop nav */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact</Link>
        </div>
        <select
          value={theme}
          onChange={handleChange}
          className="ml-4 p-1 border rounded bg-white-700"
        >
          <option value="theme1" className="[.theme2_&]:text-black">Theme 1</option>
          <option value="theme2" className="[.theme2_&]:text-black">Theme 2</option>
          <option value="theme3" className="[.theme2_&]:text-black">Theme 3</option>
        </select>

        {/* mobile nav */}
        <button className="md:hidden flex flex-col justify-between h-5" onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-2 md:hidden [.theme2_&]:bg-gray-400">
            <Link to="/" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}

      </header>
    </>
  );
}

export default Header;
