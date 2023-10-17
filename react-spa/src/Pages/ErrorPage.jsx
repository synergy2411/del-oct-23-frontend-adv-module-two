import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center">
      <h1>Error Occured</h1>
      <p>
        {error.statusText} - {error.status}
      </p>
      <Link to="/" className="btn btn-secondary">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
