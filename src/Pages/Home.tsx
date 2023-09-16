import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center--div">
      <div className="home--div">
        <h1 className="home--heading">
          Codelp is a simple, modular and accessible component library that
          gives you the innovative components you need to build your web
          applications.
        </h1>{" "}
        <Link to="/installation" className="start--btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
