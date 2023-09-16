import ImageHeader from "../documentation/Headers/ImageHeader";
import Image from "../Components/Image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ImagePage = () => {
  return (
    <div className="page">
      <ImageHeader />

      <div>
        <h3>Rouns Image.</h3>
        <div className="images--div">
          <Image
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            className="round"
            size="sm"
            name="woman"
          />
          <Image
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            className="round"
            size="md"
            name="woman"
          />
          <Image
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            size="lg"
            className="round"
            name="woman"
          />
        </div>
        <h5>
          For above round image, use the following Image component with 'image',
          'size', 'name' and 'className' as "round" as props.{" "}
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            // for small size
            <Image
              image="URL here"
              className="round"
              size="sm"
              name=""
            />

            //for medium size
            <Image
              image="URL here"
              className="round"
              size="md"
              name=""
            />

            // for large size
            <Image
              image="URL here"
              size="lg"
              className="round"
              name=""
            />
              `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Responsive Image</h3>
        <div>
          <Image
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            className="rsp--img"
            name="woman"
          />
        </div>
        <h5>
          For above round image, use the following Image component with 'image',
          'size', 'name' and 'className' as "rsp-img" as props.{" "}
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
                 <Image
                 image="URL here"
                 className="rsp--img"
                 name=""
               />
              `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ImagePage;
