import React, {useState} from 'react';
import Convert from './Convert';
import DropDown from './Dropdown';

const options = [
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
]

/**
 * The issue of Translate component, 400 bad request, probably something wrong with the api request
 */
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('hello');
    
    return (
        <div>
            <label>Enter text you want to translate: </label>
            <input type = 'text' value = {text} onChange = {event => {setText(event.target.value)}} />
            <DropDown 
                label = 'Select a language'
                options = {options}
                selected = {language}
                onSelectedChange = {setLanguage}        
            />
            <hr />
            <h3 className = 'ui header'>Output</h3>
            <Convert 
                text = {text}
                language = {language}
            />
        </div>
    )
}

export default Translate;
