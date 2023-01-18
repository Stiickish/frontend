export const initialSignUpInfo = {
  username: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const newProfile = {
  email: "",
  name: "",
  user: {
    userName: "",
    userPass: "",
  },
};

export const initialProfile = {
  id: null,
  email: "",
  name: "",
  user: {
    id: null,
    userName: "",
    userPass: "",
    roles: [
      {
        id: null,
        roleName: "",
      },
    ],
  },
  journeys: [{}],
};

export const initialLoginCredentials = {
  username: "",
  password: "",
};
