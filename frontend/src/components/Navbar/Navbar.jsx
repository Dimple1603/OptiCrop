import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌱 <span>OptiCrop</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#predict">Predict</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;