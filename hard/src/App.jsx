import React from "react";
import "./App.css";

// BasicInfo component that will display a person's data
class BasicInfo extends React.Component {
  render() {
    const { name, age, dob, weight } = this.props.person; // Destructuring data from props.person

    return (
      <div className="basic-card">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Date of Birth: {dob}</p>
        <p>Weight: {weight}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          name: "Jason Nolf",
          age: 29,
          dob: "January 10th, 1996",
          weight: 157,
        },
        {
          name: "Jordan Burroughs",
          age: 35,
          dob: "July 8th, 1988",
          weight: 165,
        },
        {
          name: "Spencer Lee",
          age: "26",
          dob: "November 20th, 1995",
          weight: 125,
        },
      ],
    };
  }

  render() {
    // Iterating over array of wrestlers and renders a BasicInfo comp for each using .map()
    return (
      <div>
        {this.state.people.map((person, index) => {
          return <BasicInfo key={index} person={person} />;
        })}
      </div>
    );
  }
}

export default App;
