import { useTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useTheme();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as typeof theme);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-gray-100 shadow-md z-50">
        <div className="text-lg font-bold">
          <Link to="/">Theme Switcher</Link>
        </div>
        <div className="space-x-4">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <select
            value={theme}
            onChange={handleChange}
            className="ml-4 p-1 border rounded"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
      </header>
    </>
  );
}

export default Header;
