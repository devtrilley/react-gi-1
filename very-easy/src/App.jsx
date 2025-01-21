// Importing React
import React from "react";

// Main app component. Extends React.Component which gives React features to component
class App extends React.Component {
  render() {
    return (
      // These are stats for American International Wrestler Jason Nolf
      <div>
        <p>Name: Jason Nolf</p>
        <p>Number: 678-999-8212</p>
        <p>Date of Birth: December 25th, 2000</p>
        <p>Sport: Wrestling</p>
      </div>
    );
  }
}

// Exports App component to main.jsx
export default App;
