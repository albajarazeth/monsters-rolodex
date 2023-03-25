import { Component } from 'react';


import './App.css';

class App extends Component{

 //says hey whenever this app is instantiated run this first
  constructor(){
    super();

    this.state = {
      monsters: [],
      val: "",
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(()=> {
      return {monsters: users}
    },
    () => {
      //console.log(this.state)
    }))
  }

  //as user types displays the filtered list
  render(){ 


  return (
    <div className="App">
    <input className='App' type='search' placeholder='search monsters' onChange={(event)=>{ this.setState((state)=>{
      return {val: event.target.value}
    },
    ()=>{
     console.log(this.state.val)
    }
    )}} />
    
     {
       this.state.monsters.filter((el)=>el.name.includes(this.state.val)).map(monster =>{
        return(
        
          <div key={monster.id}> 
          <h1>{monster.name}</h1>
          </div>
        )
       })
     }
    </div>
  );
  }
}

export default App;
