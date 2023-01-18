import { initialProfile } from "./initialState";

const URL = "http://localhost:8080/movie_festival_war_exploded";

const newProfile = initialProfile;

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function loginFacade() {
  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const getUserRoles = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const roles = decodedClaims.roles;
      return roles;
    } else return "";
  };

  const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(",");
    return loggedIn && roles.includes(neededRole);
  };

  const login = async (user, password, setProfile, onChange) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    const data = await fetch(URL + "/api/login", options);
    const json = await data.json();
    setToken(json.token);

    // newProfile.id = json.profile.id
    // newProfile.name = json.profile.name
    // newProfile.email = json.profile.email
    // newProfile.user = json.profile.user
    // newProfile.journeys = json.profile.journeys

    /*  setProfile(json.profile); */
    /* onChange(); */
  };
  const fetchData = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/user", options).then(handleHttpErrors);
  };
  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    hasUserAccess,
    getUserRoles,
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
  };
}
const facade = loginFacade();
export default facade;
