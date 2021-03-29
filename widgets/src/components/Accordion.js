import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(-1)
    
    const onTitleClick = (index) => {
        index === activeIndex ? setActiveIndex(-1): setActiveIndex(index)
        //setActiveIndex(index);
        //console.log(activeIndex)
    }

    const renderItems = () => items.map(
        (item, index) => {
            const active = index === activeIndex ? 'active': ''
            return (
                <React.Fragment key = {item.title}>
                    <div 
                        className = {`title ${active}`}
                        onClick = {() =>  onTitleClick(index)}
                    >
                        <i className = 'dropdown icon'></i>
                        {item.title}
                    </div>
                    <div className = {`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            )
        }
    )
    return (
        <div className = 'ui styled accordion'>
            <br></br>
            {renderItems()}
        </div>
    )
}

class AccordComp extends React.Component{
    constructor(props){
        super(props);
        this.state  = {activeIndex: 0};
        //this.renderItems = this.renderItems.bind(this);
    }

    onTitleClick = (index) => {
        this.setState({activeIndex: index});
        console.log(this.state.activeIndex)
    }

    render(){
        return this.props.items.map(
            (item, index) => {
                let active = index === this.state.activeIndex ? 'active':'';
                return (
                    <React.Fragment>
                        <div 
                            className = {`title ${active}`}
                            onClick = { () => this.onTitleClick(index) }
                        >
                            <i className = 'dropdown icon' />
                            {item.title}
                        </div>
                        <div
                            className = {`content ${active}`}
                        >
                            <p>{item.content}</p>
                        </div>
                    </React.Fragment>
                )
            }
        )
    }
}


export default Accordion;