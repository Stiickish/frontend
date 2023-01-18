import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";
import facade from "../utils/loginFacade";
import { useEffect } from "react";
import { initialProfile } from "../utils/initialState";
import AdminProfile from "./AdminProfile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [changeOccured, setChangeOccured] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const onChange = () => {
    setChangeOccured(!changeOccured);
  };

  const logOut = () => {
    setLoggedIn(false);
    setProfile(initialProfile);
    onChange();
  };

  useEffect(() => {}, [changeOccured]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          facade={facade}
          logOut={logOut}
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
          onChange={onChange}
          setProfile={setProfile}
          profile={profile}
        />
        <Routes>
          <Route path="/" element={<Home profile={profile} />} />
          <Route path="/adminprofile" element={<AdminProfile />}></Route>
          <Route
            path="/signup"
            element={
              <SignUp
                setProfile={setProfile}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/userprofile"
            element={
              facade.hasUserAccess("user", loggedIn) && (
                <UserProfile onChange={onChange} profile={profile} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
