"use strict";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Your Appointment was submitted, please check email for confirmation" +
        this.state.value
    );
    event.preventDefault();
    $(".modal").modal("hide");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Full Name:
        <br />
        <input
          type="text"
          name="Full Name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        E-mail: <br />
        <input type="email" name="email" />
        <br />
        Pick Date and time:
        <input type="datetime-local" name="date" />
        Leave a Message:
        <textarea name="message" cols="30" rows="5"></textarea>
        <input className="subBtn" type="submit" value="Book" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("reactForm"));
$(function() {
  $('[data-toggle="popover"]').popover();
});
$(".popover-dismiss").popover({
  trigger: "focus"
});

$(document).ready(function() {
  $("#cartModal").modal("show");
});
