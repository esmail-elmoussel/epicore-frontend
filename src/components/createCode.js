import { Component } from "react";
import { postService } from "../services/axiosServices";

class createCode extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      error: false,
    };
  }

  generateCode = () => {
    postService("/discount/create")
      .then((res) => {
        this.setState({ code: res.data.code });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    const { code, error } = this.state;

    return (
      <>
        <p className="code">{code}</p>
        <button onClick={this.generateCode}>
          <span className="text">Generate Code</span>
        </button>
        {error && <p className="error">an error occurred!</p>}
      </>
    );
  }
}

export default createCode;
