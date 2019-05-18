import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  state = { 
    count: 1,
    items: [
      'arroz',
      'feijão',
      'batata',
      'desodorante',
      'leite'
    ]
  }

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() { 
    return ( 
      <div>
        <h1 className="titulo-home">{ this.state.count }</h1>
        <input onClick={ this.handleIncrement } type="submit" value="Increment" />
 
        {
          this.state.count >= 10
          &&
          <ul>
            { this.state.items.map(item => <li key={ item }>{ item }</li> ) }
          </ul>
        }
        
      </div>

    );
  }

}
 
export default Home;