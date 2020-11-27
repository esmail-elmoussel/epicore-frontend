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
        <button className="button" onClick={this.generateCode}>
          <span className="text">Generate Code</span>
        </button>
        <p>{code}</p>
        {error && <p className="error">an error occurred!</p>}
      </>
    );
  }
}

export default createCode;
