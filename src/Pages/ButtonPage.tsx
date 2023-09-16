import ButtonHeader from "../documentation/Headers/ButtonHeader";
import Button from "../Components/Button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonPage = () => {
  return (
    <div className="page">
      <ButtonHeader />
      <div>
        <h3>Primary</h3>
        <Button>Primary button</Button>

        <h5>For the above button, use the following Button component.</h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
              <Button>Primary button</Button>
              `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Button with icon</h3>
        <Button className="btn-icon">Button with icon</Button>

        <h5>
          For the above button, use the following Button component with '
          className' as "btn-icon" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
              <Button className="btn-icon">Button with icon</Button>
              `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Floating Action Buttion</h3>
        <Button className="action-btn">+</Button>

        <h5>
          For the above button, use the following Button component with
          'className' as "action-btn" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
              <Button className="action-btn">+</Button>
              `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Button with Link.</h3>
        <Button>
          <a href="">Click</a>
        </Button>

        <h5>For the above button, use the following Button component.</h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
              <Button><a href="">Click</a></Button>
              `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ButtonPage;
