import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_DISCOUNT = gql`
  mutation {
    createDiscount {
      success
      discount {
        code
      }
    }
  }
`;

const CreateCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [createDiscount, { loading: mutationLoading }] =
    useMutation(CREATE_DISCOUNT);

  const generateCode = () => {
    createDiscount()
      .then((res) => {
        if (res?.data?.createDiscount?.success) {
          setCode(res?.data?.createDiscount?.discount?.code);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  };

  return (
    <div className="container">
      {mutationLoading ? (
        <p>loading...</p>
      ) : (
        code && <p className="code">{code}</p>
      )}
      <button onClick={generateCode}>
        <span className="text">Generate Code</span>
      </button>
      {error && <p className="error">an error occurred!</p>}
    </div>
  );
};

export default CreateCode;
