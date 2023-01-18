import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login";
import LoggedIn from "./LoggedIn";

function Header({ facade, loggedIn, setLoggedIn, onChange, logOut }) {
  return (
    <>
      <nav className="topnav">
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          {facade.hasUserAccess("user", loggedIn) && (
            <NavLink to="/userprofile">Profile</NavLink>
          )}
          {facade.hasUserAccess("admin", loggedIn) && (
            <NavLink to="/adminprofile">Admin</NavLink>
          )}

          <div className="login-container">
            {!loggedIn ? (
              <Login setLoggedIn={setLoggedIn} profileChange={onChange} />
            ) : (
              <div>
                <LoggedIn logOut={logOut} setLoggedIn={setLoggedIn} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
