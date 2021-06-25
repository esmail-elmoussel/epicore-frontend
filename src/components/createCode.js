import { useState } from "react";
import { postService } from "../services/axiosServices";

const CreateCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const generateCode = () => {
    postService("/discount/create")
      .then((res) => setCode(res.data?.code))
      .catch(() => setError(true));
  };

  return (
    <div className="container">
      <p className="code">{code}</p>
      <button onClick={generateCode}>
        <span className="text">Generate Code</span>
      </button>
      {error && <p className="error">an error occurred!</p>}
    </div>
  );
};

export default CreateCode;
