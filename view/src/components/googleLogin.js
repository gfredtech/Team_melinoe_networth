import React from "react";

import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import History from "./history";
//import { GoogleLogin } from "react-google-login";

class GoogleAuth extends React.Component {
  state = {
    tokenId: null
  };
  responseGoogle = res => {
    this.setState({ tokenId: res.tokenId });
  };
  render() {
    if (this.state.tokenId) {
      return <Redirect to="/calculator" />;
    }
    return (
      <div>
        <GoogleLogin
          clientId="45236546263-sgk55ma8s759ftu8bg22aqhn8dd91rl9.apps.googleusercontent.com"
          buttonText={this.props.purpose}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
export default GoogleAuth;
