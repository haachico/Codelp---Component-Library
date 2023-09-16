import { Link } from "react-router-dom";
// import Button from "../Components/Button";
import { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (): void => {
    setSearchText("");
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>Codelp</h1>
      </Link>
      <div className="search--bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a component here."
        />

        <button className="search--btn" onClick={handleSearch}>
          <Link to={`installation/${searchText}`}>Search</Link>
        </button>
      </div>

      <div className="header--nav">
        <Link to="/">Home</Link>
        <Link to="/installation">Components</Link>
      </div>
    </div>
  );
};

export default Header;
