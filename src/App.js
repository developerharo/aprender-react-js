import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    const textoSegundoBool = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

    return (
      <div> 
        {/* <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegundoBool}</p> */}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key2}</p>
      </div>
    ) 
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <Hello title='Hello from props' />
        <Text 
          arrayOfNumbers={[2, 3, 10]}
          isActivated
          number={9} 
          objectWithInfo={{ key: 'First Value', key2: 'Second Value'}}
          text='Texto en string'
        />
      </header>
    </div>
  );
}

export default App;
