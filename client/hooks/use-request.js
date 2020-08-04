import axios from "axios";
import { useState } from "react";

const UseRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    // setErrors(null);
    try {
      const response = await axios[method](url, body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4> Ooooops.... </h4>{" "}
          <ul className="my-0">
            {" "}
            {err.response.data.errors.map((error, i) => (
              <li key={i}> {error.message} </li>
            ))}{" "}
          </ul>{" "}
        </div>
      );
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    }
  };

  return {
    doRequest,
    errors,
  };
};

export default UseRequest;
