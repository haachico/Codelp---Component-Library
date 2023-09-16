import Alert from "../Components/Alert";
import AlertHeader from "../documentation/Headers/AlertHeader";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AlertPage = () => {
  return (
    <div className="page">
      <AlertHeader />

      <div>
        <Alert status="primary">This is an Alert Box.</Alert>
        <Alert status="success">This is an Alert Box.</Alert>
        <Alert status="warning">This is an Alert Box.</Alert>
        <Alert status="error">This is an Alert Box.</Alert>

        <h5>
          How to use above Alerts? Use the following Alert component with the
          status 'primary', 'success', 'warning' or 'error' as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`

          //for primary alert
          <Alert status="primary">This is an Alert Box.</Alert>

          //for success alert
          <Alert status="success">This is an Alert Box.</Alert>

          //for warning alert
          <Alert status="warning">This is an Alert Box.</Alert>

          //for error alert
          <Alert status="error">This is an Alert Box.</Alert>
    
        `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default AlertPage;
