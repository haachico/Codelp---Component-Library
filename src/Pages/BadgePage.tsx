import BadgeHeader from "../documentation/Headers/BadgeHeader";
import ProfileBadge from "../Components/Badge/ProfileBadge";
import IconBadge from "../Components/Badge/IconBadge";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Badge = () => {
  return (
    <div className="page">
      <BadgeHeader />
      <div>
        <h3>Profile Badges</h3>
        <div className="badges--div">
          <ProfileBadge
            size="sm"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            name="woman"
            status="online"
          />
          <ProfileBadge
            size="md"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            name="woman"
            status="offline"
          />
          <ProfileBadge
            size="lg"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            name="woman"
            status="dnd"
          />
        </div>
        <h5>
          {" "}
          How to use above Profile Badges? Use the following ProfileBadge
          component with "size", "src", "name", "status" as props.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`

        //for online status
        <ProfileBadge
        size="sm"
        src="URL here"
        name=""
        status="online"
        />

         // for offline status
        <ProfileBadge
          size="md"
          src="URL here"
          name=""
          status="offline"
        />

        //for dnd status
        <ProfileBadge
          size="lg"
          src="URL here"
          name=""
          status="dnd"
        />
            `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Icon Badge</h3>
        <IconBadge
          size="md"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
          name="woman"
          notification="11"
        />
        <h5>
          How to use the above Icon Badge? Use the following IconBadge component
          with 'size', 'src', 'name', 'notification' as props.
        </h5>

        <SyntaxHighlighter language="jsx" style={docco}>
          {`
          // for small size
          <IconBadge
          size="sm"
          src="URL here"
          name=""
          notification=""
        />

          //for medium size
             <IconBadge
             size="md"
             src="URL here"
             name=""
             notification=""
           />

           //for large size
           <IconBadge
           size="md"
           src="URL here"
           name=""
           notification=""
         />
            `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Badge;
