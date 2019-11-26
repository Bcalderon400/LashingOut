"use strict";
// import DateTimePicker from "react-datetime-picker";

// class Datepicker extends React.Component {
//   state = {
//     date: new Date()
//   };

//   onChange = date => this.setState({ date });

//   render() {
//     return (
//       <div>
//         <DateTimePicker onChange={this.onChange} value={this.state.date} />
//       </div>
//     );
//   }
// }

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>First Name: </p>
        <input
          type="text"
          name="First Name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Last Name: </p>
        <input
          type="text"
          name="Last Name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Pick Date and time: </p>
        <input type="datetime-local" name="date" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("reactForm"));
