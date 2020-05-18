import React, { Component } from 'react';
import './App.css';
import BasicInfo from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: 'Latori Miller',
          phone: '980-020-3410',
          DOB: '08/01/2000'
        },
        {
          name: 'Lucy Yang',
          phone: '980-770-9089',
          DOB: '10/27/2001'
        },
        {
          name: 'Fatima Lopez Garcia',
          phone: '123-123-4123',
          DOB: '09/22/2000'
        },
        {
          name: 'Raul Mendez',
          phone: '567-333-0880',
          DOB: '11/14/1973'
        },
        {
          name: 'Juan Hernandez',
          phone: '901-998-3653',
          DOB: '12/23/1990'
        },
        {
          name: 'Carolina',
          phone: '672-0283-04834',
          DOB: '07/20/2001'
        },
      ]
    };
  }

  render() {
    return <BasicInfo persons={this.state.persons} />;
  }
}

export default App;










