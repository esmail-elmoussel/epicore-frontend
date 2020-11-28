import { Component } from "react";
import { postService } from "../services/axiosServices";
import socketIOClient from "socket.io-client";

// Connecting Socket.io
const socket = socketIOClient(process.env.REACT_APP_BASE_URL);

class verifyCode extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      errorMessage: "",
      valideCode: false,
    };
  }

  onInputChange = (e) => {
    this.setState({ code: e.target.value });
  };

  validateCode = () => {
    const { code } = this.state;

    if (code.length !== 4 || !Number(code)) {
      return this.setState({ errorMessage: "please enter a 4 digits code!" });
    }

    postService("/discount/validate", {
      code: code,
    })
      .then(() => {
        this.setState({ valideCode: true });
        socket.emit("codeVerifiedSuccessfully", {
          // some data about user
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response?.data?.message === "code is not valid!") {
          return this.setState({ errorMessage: err.response?.data?.message });
        }

        this.setState({ errorMessage: "something went wrong" });
      });
  };

  render() {
    const { errorMessage, valideCode } = this.state;

    return valideCode ? (
      <p>Success</p>
    ) : (
      <>
        <input onChange={this.onInputChange} />
        <button onClick={this.validateCode}>
          <span>Validate</span>
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </>
    );
  }
}

export default verifyCode;
