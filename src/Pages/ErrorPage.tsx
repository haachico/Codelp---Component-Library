import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage--div">
      <h2>Error! Couldn't find what you are looking for!</h2>

      <Link to="/" className="return--btn">
        Return to home page.
      </Link>
    </div>
  );
};

export default ErrorPage;
