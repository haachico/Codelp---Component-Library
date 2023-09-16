import HeadingHeader from "../documentation/Headers/HeadingHeader";
import Heading from "../Components/Heading";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HeadingPage = () => {
  return (
    <div className="page">
      <HeadingHeader />

      <div>
        <h3>Headings</h3>
        <div>
          <Heading tag="h1">This is a heading.</Heading>
          <Heading tag="h2">This is a heading.</Heading>
          <Heading tag="h3">This is a heading.</Heading>
          <Heading tag="h4">This is a heading.</Heading>
          <Heading tag="h5">This is a heading.</Heading>
          <Heading tag="h6">This is a heading.</Heading>
        </div>

        <h5>
          For the above headings, use the following Heading component with 'tag'
          as "h1", "h2", "h3", "h4", "h5" or "h6" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
          <Heading tag="h1">This is a heading.</Heading>
          <Heading tag="h2">This is a heading.</Heading>
          <Heading tag="h3">This is a heading.</Heading>
          <Heading tag="h4">This is a heading.</Heading>
          <Heading tag="h5">This is a heading.</Heading>
          <Heading tag="h6">This is a heading.</Heading>
              `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HeadingPage;
