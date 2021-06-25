import { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const VALIDATE_DISCOUNT = gql`
  query ($code: Int!) {
    validateDiscount(code: $code) {
      success
      message
      discount {
        id
        code
        expirationDate
      }
    }
  }
`;

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [valideCode, setValideCode] = useState(false);
  const [validateCodeQuery, { loading, data }] =
    useLazyQuery(VALIDATE_DISCOUNT);

  useEffect(() => {
    if (loading) return;

    if (data?.validateDiscount?.success) {
      setValideCode(true);
    } else {
      setErrorMessage(data?.validateDiscount?.message);
    }
  }, [loading, data]);

  const validateCode = () => {
    if (code.length !== 4 || !Number(code)) {
      return setErrorMessage("please enter a 4 digits code!");
    }

    validateCodeQuery({ variables: { code: Number(code) } });
  };

  return (
    <div className="container">
      {loading ? (
        <p>loading...</p>
      ) : valideCode ? (
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
