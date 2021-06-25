import { useState } from "react";
import { postService } from "../services/axiosServices";
// import socketIOClient from "socket.io-client";

// Connecting Socket.io
// const socket = socketIOClient("https://epicore.herokuapp.com");

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [valideCode, setValideCode] = useState(false);

  const validateCode = () => {
    if (code.length !== 4 || !Number(code)) {
      return setErrorMessage("please enter a 4 digits code!");
    }

    postService("/discount/validate", { code })
      .then(() => {
        setValideCode(true);
        // socket.emit("codeVerifiedSuccessfully", {
        //   // some data about user
        // });
      })
      .catch((err) => {
        if (err.response?.data?.message === "code is not valid!") {
          return setErrorMessage(err.response?.data?.message);
        }
        setErrorMessage("something went wrong");
      });
  };

  return (
    <div className="container">
      {valideCode ? (
        <p className="code">Success, notification sent to user successfully</p>
      ) : (
        <>
          <input onChange={(e) => setCode(e.target.value)} />
          <button onClick={validateCode}>
            <span>Validate</span>
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default VerifyCode;
