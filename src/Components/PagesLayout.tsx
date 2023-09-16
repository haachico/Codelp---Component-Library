import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const PagesLayout = () => {
  return (
    <div className="pages--layout">
      <Sidebar />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default PagesLayout;
