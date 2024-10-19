import { BrowserRouter, Routes, Route , Link } from "react-router-dom";

// Navbar Component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* Use Link to navigate between routes */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
// Main App Component


export default Navbar;
