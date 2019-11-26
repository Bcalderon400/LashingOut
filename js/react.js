"use strict";
import Button from "react-bootstrap/Button";

const e = React.createElement;

class Button extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>
        <Button variant="secondary" size="lg" active>
          Button
        </Button>
      </ButtonToolbar>
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(Button), domContainer);
