import { Component } from 'react';


import './App.css';

class App extends Component{

 //says hey whenever this app is instantiated run this first
  constructor(){
    super();

    this.state = {
      name: 'Yihua'
    };

  }

  render(){ 
  return (
    <div className="App">
    <h1>This is a demo...{this.state.name}</h1>
    <button onClick={()=> {
      //give it an obj that you want to shallow merge, checks keys
      this.setState({name: 'Andrei'});
    }}
    >Change Name</button>
    </div>
  );
  }
}

export default App;
