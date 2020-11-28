import { Component } from "react";
import "./App.css";
import CreateCode from "./components/createCode";
import VerifyCode from "./components/verifyCode";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
    };
  }

  changeRoute = (route) => {
    this.setState({ route });
  };

  render() {
    const { route } = this.state;

    return route === "createCode" ? (
      <CreateCode />
    ) : route === "verifyCode" ? (
      <VerifyCode />
    ) : (
      <div>
        <button
          className="button"
          onClick={() => this.changeRoute("createCode")}
        >
          <span className="text">create new code</span>
        </button>
        <button
          className="button"
          onClick={() => this.changeRoute("verifyCode")}
        >
          <span className="text">verify code</span>
        </button>
      </div>
    );
  }
}

export default App;
