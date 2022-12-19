import React from 'react';
import './App.css'; 

class App extends React.Component{
  constructor(){
    super()
    this.state={
      
      tasks : [
        {desc : "Onion", isDone : false, id : Math.random()},
        {desc : "carrot", isDone : false, id : Math.random()},
        {desc : "melon", isDone : false, id : Math.random()}
      ],
      textP : ''
    }
  }
  handleAdd=()=>{
    if (this.state.textP ==="") {
      alert('Le champ est vide') 
    } else {
      this.setState({tasks : [...this.state.tasks,{desc : this.state.textP,isDone : false, id : Math.random()}]})
      this.setState({textP : ''})
    }
  }
  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter(el => el.id !== a)})
  handleDone=(a)=> this.setState({tasks : this.state.tasks.map(el => el.id === a ? {...el,isDone : !el.isDone} : el)})
  render(){
    return(
      <div>
        <img className='pic1' src='/to.png' alt='Not Found'/>
        <h1>My Tasks</h1>

        {
          this.state.tasks.map(el=> 
            <div>
              <h2 className={el.isDone && 'done'}>{el.desc}</h2>
              
              <i class="fa-solid fa-trash" onClick={()=>this.handleDelete(el.id)}></i>
              <button className='bt' onClick={()=> this.handleDone(el.id)}>{el.isDone ? 'Undone' : "Done"}</button>
              
            </div>
            )
            
            
        }
        <br/>
        <input  value={this.state.textP} type="text" onChange={(e)=>this.setState({textP : e.target.value})}/>
       
        <i class="fa-solid fa-circle-plus" onClick={this.handleAdd}></i>
        

        
      </div>
    )
  }
}

export default App;