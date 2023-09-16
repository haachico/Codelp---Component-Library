import "./Alert.css";
import { ReactNode } from "react";

type AlertProp = {
  status: string;
  children: ReactNode;
};

const Alert: React.FC<AlertProp> = ({ status, children }) => {
  return <div className={`alert ${status}`}>{children}</div>;
};

export default Alert;
