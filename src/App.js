import React from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className='App'>
        <input onChange={this.handleChange} type="text" placeholder='Search...'/>
        {JSONDATA.filter(val => 
          val.first_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ).map((val, key) => (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
