import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { Link } from "react-router-dom";

function App() {
  const { theme } = useTheme();
  const isSidebarLayout = theme === "theme2";

  return (
    <>
      <div className="transition-all duration-1000 ease-in-out transform">
      <Header />

      {isSidebarLayout ? (
        <div className="flex pt-20 min-h-screen">
          <aside className="w-65 bg-gray-800 text-white p-6 hidden md:block sticky top-20 self-start">
            <nav>
              <ul className="space-y-4 text-lg">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      ) : (
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      )}
      <Footer />
      </div>
    </>
  );
}

export default App;
