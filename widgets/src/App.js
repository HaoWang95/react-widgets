//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';
import Translate from './components/Translate';
import VideoSearch from './components/Video';

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

const options = [
  {
    label:'A shade of Blue',
    value: 'blue'
  },
  {
    label:'A shade of Green',
    value: 'green'
  },
  {
    label:'A shade of Yellow',
    value: 'yellow'
  },
  {
    label: 'A shade of Red',
    value: 'Red'
  }
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {content: '', selected: options[0], showSelected: true};
    this.onSelectedChange = this.onSelectedChange.bind(this);
    this.onShowButtonClicked = this.onShowButtonClicked.bind(this);
  }

  onSelectedChange = (option) => {
    this.setState({'selected': option})
  }

  onShowButtonClicked = () => {
    this.setState({'showSelected': !this.state.showSelected})
  }

  render(){
    return(
      <div>
        <button 
          className = 'ui primary button' onClick = {this.onShowButtonClicked}>Show
        </button>
        {
          this.state.showSelected ?
            <Dropdown
            options = {options} 
            selected = {this.state.selected}
            onSelectedChange = {this.onSelectedChange} 
            />: null
        }
      </div>   
    )
  }
}



export default () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path = "/">
        <Accordion items = {items} />
      </Route>
      <Route path = "/search">
        <Search />
      </Route>
      <Route path = "/dropdown">
        <Dropdown
          options = {options}
          label = 'Select something'
          selected = {selected}
          onSelectedChange = {setSelected}
         />
      </Route>
      <Route path = "/translate">
        <Translate></Translate>
      </Route>
      <Route path = "/video">
        <VideoSearch></VideoSearch>
      </Route>
    </div>
  )
};
