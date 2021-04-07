import React, {useEffect, useState, useRef} from 'react';
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

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <label>Enter text</label>
            <input value = {text} onChange = {setText} />
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
