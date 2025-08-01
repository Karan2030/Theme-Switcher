import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useTheme();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as typeof theme);
  };
  return (
    <>
      <header className="[.theme2_&]:bg-gray-400 fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-gray-100 shadow-md z-50">
        <div className="text-lg font-bold">
          <Link to="/">Theme Switcher</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact</Link>
          <select
            value={theme}
            onChange={handleChange}
            className="ml-4 p-1 border rounded bg-white-700"
          >
            <option value="theme1" className="[.theme2_&]:text-black">Theme 1</option>
            <option value="theme2" className="[.theme2_&]:text-black">Theme 2</option>
            <option value="theme3" className="[.theme2_&]:text-black">Theme 3</option>
          </select>
        </div>
      </header>
    </>
  );
}

export default Header;
