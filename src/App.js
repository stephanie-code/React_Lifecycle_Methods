import { Component } from 'react';
import './App.css';
import Lifecycle_1 from './components/lifecycle_1';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      name: "I'm State From App.js",
    }
  }
  mountfunction = () => {
    this.setState({ mount: true })
  }
  unmountfunction = () => {
    this.setState({ 
      mount: false,
      name : "I'm State From App.js" 
    })
  }
  stateToPropsFunction= () => {
    this.setState({name : "I'm Updated State From App.js"})
  }
  render() {
    return (
      <div className="App">
        {this.state.mount ? <Lifecycle_1 statename={this.state.name}/> : null}
        <button onClick={this.mountfunction} className="button">Mount</button>
        <button onClick={this.unmountfunction} className="button">Unmount</button>
        <button onClick={this.stateToPropsFunction} className="button">Send State As Props</button>
      </div>
    );
  }
}

export default App;
