import History from "../components/history";
export const SignIn = id => dispatch => {
  dispatch({
    type: "SIGN_IN",
    payload: id
  });
};

export const Signout = () => {
  return {
    type: "SIGN_OUT"
  };
};
