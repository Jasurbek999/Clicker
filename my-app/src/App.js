import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      key:true,
    }
    this.handleClick=this.handleClick.bind(this)
    this.decrClick=this.decrClick.bind(this)
    this.removeClick=this.removeClick.bind(this)
  }
handleClick(){

  this.setState((prevState)=>({count: prevState.count +1}), ()=>{
    console.log('setState complated')
  })
  console.log('From handleClick'  )
}
decrClick(){
  
  this.setState((prevState)=>({count: prevState.count -1}), ()=>{
    console.log('setState complated')
  })
  console.log('From handleClick'  )
}
removeClick(){
  
  this.setState((prevState)=>({count: prevState.count =0}), ()=>{
    console.log('setState complated')
  })
  console.log('From handleClick'  )
}



render() {
  return (
    <div>
      <h1>Assalomu alaykum Clicker</h1>
      <h1> {this.state.count} </h1>
      <button onClick={this.handleClick}> {this.setState.count} incr</button>

      <button onClick={this.removeClick} >{this.setState.count} remove</button>
      <button onClick={this.decrClick} >{this.setState.count} decr</button>
    </div>
  )
}
}
export default App