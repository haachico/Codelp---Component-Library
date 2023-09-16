
import Avatar from "../Components/Avatar";
import AvatarHeader from "../documentation/Headers/AvatarHeader";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AvatarPage = () => {
  return (
    <div className="page">
      <AvatarHeader />

      <div>
        <div className="avatars--div">
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            name="woman"
          />
          <Avatar
            size="md"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            name="woman"
          />
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            name="woman"
          />
        </div>
        <h5>
          How to use the above Avatars? Use the following Avatar component with
          'size' for size of image, 'src' for link of image and 'name' for name
          of image as props.
        </h5>

        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            // for small size
              <Avatar
              size="sm"
              src="URL here"
              name=""
            />

            //for medium size
            <Avatar
              size="md"
              src="URL here"
              name=""
            />

            //for large size
            <Avatar
              size="lg"
              src="URL here"
              name=""
            />
             `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default AvatarPage;
