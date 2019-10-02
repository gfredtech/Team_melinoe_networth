const initialValues = {
  isSignedIn: null,
  clientId: null
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, clientId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, clientId: null };
    default:
      return state;
  }
};
