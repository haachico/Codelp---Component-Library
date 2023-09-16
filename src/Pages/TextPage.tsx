import TextHeader from "../documentation/Headers/TextHeader";
import Text from "../Components/Text";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TextPage = () => {
  return (
    <div className="page">
      <TextHeader />

      <div>
        <h3>Bold Text.</h3>
        <Text className="bold">This is a text</Text>

        <h5>
          For the above bold text, use the following Text component with
          'className' as "bold" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="bold">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Italic Text.</h3>
        <Text className="italic">This is a text</Text>
        <h5>
          For the above italic text, use the following Text component with
          'className' as "italic" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="italic">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Underlined Text.</h3>
        <Text className="underline">This is a text</Text>
        <h5>
          For the above underline text, use the following Text component with
          'className' as "underline" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="underline">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Overlined Text.</h3>
        <Text className="overline">This is a text</Text>
        <h5>
          For the above overline text, use the following Text component with
          'className' as "overline" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="overline">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Strikethrough Text.</h3>
        <Text className="strikethrough">This is a text</Text>
        <h5>
          For the above strikethrough text, use the following Text component
          with 'className' as "strikethrough" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="strikethrough">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Trannsparent Text.</h3>
        <Text className="transparent">This is a text</Text>
        <h5>
          For the above transparent text, use the following Text component with
          'className' as "transparent" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="transparent">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Shadowed Text.</h3>
        <Text className="shadow-text">This is a text</Text>

        <h5>
          For the above shadowed text, use the following Text component with
          'className' as "shadow-text" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="shadow-text">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Small caps Text.</h3>
        <Text className="small-caps">This is a text</Text>

        <h5>
          For the above small-caps text, use the following Text component with
          'className' as "small-caps" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Text className="small-caps">This is a text</Text>
            `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default TextPage;
