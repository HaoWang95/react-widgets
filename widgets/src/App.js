//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title:'What is React',
    content: 'React is a JavaScript Library that builds web application'
  },
  {
    title:'What is Angular',
    content: 'Angular is a front-end framework'
  },
  {
    title:'What is Node.js',
    content: 'Node is a JS runtime that builds backend web services'
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
        <Search/>
      </div>
    )
  }
}

export default App;
