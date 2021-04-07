import React, {useState, useEffect} from 'react';
import axios from 'axios';



const Convert = ({language, text}) => {
    const [result, setResult] = useState('');
    useEffect(
        async () => {
            console.log('new language or text');
            await axios.post('https://translation.googleapis.com/language/translate/v2', 
                {},
                {
                    params:{
                        q: text,
                        target: language,
                        key : ''
                    }
                }
            ).then(
                (translationResult) => {
                    console.log(translationResult)
                }
            )
        },[language, text]
    )
    return (
        <div>
        </div>
    )
}

export default Convert;