import React, { useState, useEffect } from 'react';
import axios from 'axios';

const google_api_key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
    const [result, setResult] = useState('hello');
    const [delayedText, setDelayedText] = useState('hello');

    // as long as the text changes, wait for 1sec then call the api
    useEffect(
        () => {
            const textTimer = setTimeout(
                () => {
                    setDelayedText(text)
                }, 1000
            );
            return () => {
                clearTimeout(textTimer)
            }
        },[text]
    );

    useEffect(
        () => {
            console.log('new language or text');
            console.log(text, language);
            // something goes wrong in doTranslation
            const doTranslation = async () => {
                await axios.post('https://translation.googleapis.com/language/translate/v2',
                    {},
                    {
                        params: {
                            q: delayedText,
                            target: language.value,
                            key: google_api_key
                        }
                    }
                ).then(
                    (translationResult) => {
                        console.log(translationResult)
                        setResult(translationResult.data.data.translations[0].translatedText)
                    }
                )
            };
            doTranslation();
        }, [language, delayedText]
    );
    return (
        <div>
            <h1 className = 'ui header'>{result}</h1>
        </div>
    )
}

export default Convert;