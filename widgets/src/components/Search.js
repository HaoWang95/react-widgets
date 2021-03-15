import React, {useState, useEffect} from 'react';
import axios from 'axios'

const search = () => {
    const [term, setTerm] = useState('');

    useEffect(
        () => {
            (async () => {
                await axios.get('')
            })();
        },
        [term]
    )

    return (
        <React.Fragment>
            <div className = 'ui form'>
                <div className = 'field'>
                </div>
            </div>
        </React.Fragment>
    )
}