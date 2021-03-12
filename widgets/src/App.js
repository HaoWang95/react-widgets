//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Accordion from './components/Accordion'

const items = [
  {
    title:'What is React',
    content: 'React is a JavaScript Library that builds web application'
  },
  {
    title:'What is Angular',
    content: 'Angular is a front-end framework'
  }
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {content: ''}
  }

  render(){
    return(
      <div>
        <Accordion items = {items}/>
      </div>
    )
  }
}

export default App;
