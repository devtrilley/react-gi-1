// Importing React
import React from "react";

// BasicInfo
class BasicInfo extends React.Component {
  render() {
    // Destructuring data from props.person
    const { name, age, dob, sport } = this.props.person;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Date of Birth: {dob}</p>
        <p>Sport: {sport}</p>
      </div>
    )
  }
}

// Main app component. Extends React.Component which gives React features to component
class App extends React.Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "Jason Nolf",
        age: "29",
        dob: "January 10th, 1996",
        sport: "Wrestling"
      }
    }
  }

  render() {
    return (
      // These are stats for American International Wrestler Jason Nolf
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

// Exports App component to main.jsx
export default App;
