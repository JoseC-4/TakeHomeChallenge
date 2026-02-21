import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../src/assets/JobNova.png"
function Sidebar({ items }) {
  return (
    <div className="Sidebar">
      <div className="userCard">
        <img src={logo} alt="JobNova" className="h-8 w-auto" />
      </div>

    

      <ul className="Sidebartags" id="sidebartags">
        {items.map((val, key) => (
          <li key={key} className="navItem">
            <Link to={val.link} className="navLink">
              <span className="navIcon">{val.icon}</span>
              <span className="navText">{val.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="subscriptionCard">
        <div className="card">
          <p className="subscriptionTitle">Upgrade Your Plan</p>
          <p className="subscriptionDesc">Boost your success rate now!</p>

          <button className="subBtn hover:cursor-pointer" type="button">
            Subscription
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;