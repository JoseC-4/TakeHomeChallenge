import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLayout">

        <div className="navTab navTabActive">
          <a href ="#" className="tabLabel">Matched</a>
        </div>
        <br/>
        <div className="navTab">
          <a href ="#" className="tabLabel">Liked</a>
          <p className="tabBadge">1</p>
        </div>

        <br/>

        <div className="navTab ">
          <a href ="#" className="tabLabel">Applied</a>
          <p className="tabBadge">1</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;