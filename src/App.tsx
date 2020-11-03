import { type } from 'os';
import React from 'react';
import './App.css';


type AppProps = {
  
}

 
type AppState = {
  count:number
}
 
class App extends React.Component<AppProps, AppState> {
  state = { count: 0  }

  addCount = () =>{
    this.setState(({count})=>({
      count: count+1
    }))
  }

  render() { 
    return ( 
      <div>
        <h2>{this.state.count} </h2>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }
}
 
export default App;
