import CardHeader from "../documentation/Headers/CardHeader";
import BadgeCard from "../Components/Card/BadgeCard";
import DismissCard from "../Components/Card/DismissCard";
import OverlayCard from "../Components/Card/OverlayCard";
import Card from "../Components/Card/Card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CardPage = () => {
  return (
    <div className="page">
      <CardHeader />

      <div>
        <h3>Card with Badge.</h3>
        <BadgeCard badge="Fiction">
          <h4>Book : In Perfect Light</h4>
          <h5>Author: Benjamin Alire Saenz</h5>
        </BadgeCard>

        <h5>
          To use the card with badge, use the following BadgeCard component with
          "badge" as prop.
        </h5>

        <SyntaxHighlighter language="jsx" style={docco}>
          {`
          <BadgeCard badge="Fiction">
             <h4>Book : In Perfect Light</h4>
             <h5>Author: Benjamin Alire Saenz</h5>
           </BadgeCard>
             `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Card with Dismiss.</h3>
        <DismissCard>
          <h4>Book : In Perfect Light</h4>
          <h5>Author: Benjamin Alire Saenz</h5>
        </DismissCard>

        <h5>To use the above card, use the following DismissCard component.</h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
        <DismissCard>
           <h4>Book : In Perfect Light</h4>
           <h5>Author: Benjamin Alire Saenz</h5>
         </DismissCard>
             `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Card with Overlay.</h3>
        <OverlayCard image="https://vkist.gov.vn/vkist-media/21/7/12/noimage.jpg">
          <h4>Book : In Perfect Light</h4>
          <h5>Author: Benjamin Alire Saenz</h5>
        </OverlayCard>
        <h5>
          To use the above card with overlay, use the following OverlayCard with
          "image" for iage link as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
       <OverlayCard image="https://vkist.gov.vn/vkist-media/21/7/12/noimage.jpg">
         <h4>Book : In Perfect Light</h4>
         <h5>Author: Benjamin Alire Saenz</h5>
       </OverlayCard>
             `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Card with Text.</h3>
        <Card>
          <h4>Book : In Perfect Light</h4>
          <h5>Author: Benjamin Alire Saenz</h5>
        </Card>

        <h5>
          To use the above card with text, use the following Card component.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
       <Card>
       <h4>Book : In Perfect Light</h4>
       <h5>Author: Benjamin Alire Saenz</h5>
       </Card>
             `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Vertical/Horizontal Cards.</h3>
        <div className="cards">
          <Card className="vertical">
            <h4>Book : In Perfect Light</h4>
            <h5>Author: Benjamin Alire Saenz</h5>
          </Card>
          <Card className="horizontal">
            <h4>Book : In Perfect Light</h4>
            <h5>Author: Benjamin Alire Saenz</h5>
          </Card>
        </div>
        <h5>
          For vertical or horizontal card, use the the following Card component
          with 'className' as "vertical" or "horizontal" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`

          //for vertical card
        <Card className="vertical">
        <h4>Book : In Perfect Light</h4>
        <h5>Author: Benjamin Alire Saenz</h5>
        </Card>

          //for horizantal card
      <Card className="horizontal">
        <h4>Book : In Perfect Light</h4>
        <h5>Author: Benjamin Alire Saenz</h5>
      </Card>
             `}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div>
        <h3>Card with Shadow.</h3>
        <Card className="shadow">
          <h4>Book : In Perfect Light</h4>
          <h5>Author: Benjamin Alire Saenz</h5>
        </Card>
        <h5>
          To use the above card with shadow, use the following Card component
          with 'className' as "shadow" as prop.
        </h5>
        <SyntaxHighlighter language="jsx" style={docco}>
          {`
            <Card className="shadow">
              <h4>Book : In Perfect Light</h4>
              <h5>Author: Benjamin Alire Saenz</h5>
            </Card>
              `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CardPage;
