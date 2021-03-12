import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const Accordion = ({items}) => {
    const onTitleClick = (index) => {

    }

    const renderItems = items.map(
        (item, index) => {
            return (
                <React.Fragment key = {item.title}>
                    <div 
                        className = 'title active'
                    >
                        <i className = 'dropdown icon'></i>
                        {item.title}
                    </div>
                    <div className = 'content active'>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            )
        }
    )
    return (
        <div className = 'ui styled accordion'>
            <br></br>
            {renderItems}
        </div>
    )
}


export default Accordion;