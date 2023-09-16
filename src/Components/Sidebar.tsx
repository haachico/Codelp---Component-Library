import { NavLink } from "react-router-dom";

const Sidebar = () => {
  type ButtonStyles = {
    backgroundColor: string;
    color: string;
    fontWeight: string;
    padding: string;
  };

  const getActiveStyle = ({
    isActive
  }: {
    isActive: boolean;
  }): ButtonStyles => ({
    backgroundColor: isActive ? "#e9d5ff" : "",
    color: isActive ? "#6d28d9" : "",
    fontWeight: isActive ? "700" : "",
    padding: isActive ? "10px" : ""
  });

  return (
    <div className="sidebar">
      <div>
        <NavLink to="." end style={getActiveStyle}>
          Installation
        </NavLink>
      </div>
      <div>
        <NavLink to="avatar" style={getActiveStyle}>
          Avatar
        </NavLink>
      </div>
      <div>
        <NavLink to="alert" style={getActiveStyle}>
          Alert
        </NavLink>
      </div>
      <div>
        <NavLink to="badge" style={getActiveStyle}>
          Badge
        </NavLink>
      </div>
      <div>
        <NavLink to="button" style={getActiveStyle}>
          Button
        </NavLink>
      </div>
      <div>
        <NavLink to="card" style={getActiveStyle}>
          Card
        </NavLink>
      </div>
      <div>
        <NavLink to="headings" style={getActiveStyle}>
          Headings
        </NavLink>
      </div>
      <div>
        <NavLink to="text" style={getActiveStyle}>
          Text
        </NavLink>
      </div>
      <div>
        <NavLink to="image" style={getActiveStyle}>
          Image
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
