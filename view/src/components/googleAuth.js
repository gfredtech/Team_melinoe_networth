import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn, Signout } from "../actions";
import History from "./history";
import { Redirect } from "react-router-dom";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "45236546263-sgk55ma8s759ftu8bg22aqhn8dd91rl9.apps.googleusercontent.com", //'388348893296-p02bmic3276qp7vssooqg4vu9lp3kp69.apps.googleusercontent.com',
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onauthchange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onauthchange);
        });
    });
  }

  onauthchange = isSignedIn => {
    if (isSignedIn) {
      this.props.SignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.Signout();
    }
  };

  onsignin = () => {
    this.auth.signIn();
    History.push("/calculator");
    console.log(this.props.isSignedIn);
  };

  onsignout = () => {
    this.auth.signOut();
  };

  onRender = () => {
    return (
      <div>
        <button onClick={this.onsignin} className="ui primary google button">
          {this.props.purpose} with <i className="google icon"></i>Google
        </button>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.onRender()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.Auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { SignIn, Signout }
)(GoogleAuth);
