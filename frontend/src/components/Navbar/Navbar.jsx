import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌱 <span>OptiCrop</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#predict">Predict</a></li>
        <li><a href="#analytics">Analytics</a></li>
      </ul>

      <a href="#predict" className="nav-btn">
        Get Started
      </a>

    </nav>
  );
}

export default Navbar;