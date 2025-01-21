import React from 'react';
import './App.css'

// Creating App component, allows React features by extending
class App extends React.Component {
  // Constructor where we initialize state, called automatically
  // Props are passed into constructor from parent component, so the children can use data.
  constructor(props) {
    // Calls constructor of parent class (React.Component)
    // Since App class extend React.Component, we call super() to make sure the constructor is properly initialized.
    super(props); 

    // state obj used to store data to affect rendering
    this.state = {
      person: {}
    }
  }

  render() {
    return <p>Easy Challenge: No rendering required...</p>
  }
}

export default App
