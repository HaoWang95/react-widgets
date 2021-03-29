import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [delayedTerm, setDelayedTerm] = useState('programming');
    const [results, setResults] = useState([])
    const url = 'https://en.wikipedia.org/w/api.php';

    // a listenter that listens to whether the term changes, update 
    useEffect(
        () => {
            const timerId = setTimeout(() => {
                setDelayedTerm(term)
            }, 1000);

            return () => {
                clearTimeout(timerId)
            }
        }, [term]
    );

    // search info based on the new term
    useEffect(
        () => {
            const search = async () => {
                let {data} = await axios.get(url, {
                    params:{
                        action:'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: delayedTerm
                    }
                })
                setResults(data.query.search);
            };
            search();
        },[delayedTerm]
    )

    const renderResults = results != undefined && results.length > 0 ? results.map(
        (item) => {
            return (
                <div key = {item.pageid} className = 'item'>
                    <div className = 'right floated content'>
                        <a 
                            className = 'ui button'
                            href = {`https://en.wikipedia.org/?curid = ${item.pageid}`}
                        >Go</a>
                    </div>
                    <div className = 'content'>
                        <div className = 'header'>
                            {item.title}
                        </div>
                        <span dangerouslySetInnerHTML = {{__html: item.snippet}}></span> 
                    </div>
                </div>
            )
        }
    ): []

    return (
        <React.Fragment>
            <div className = 'ui form'>
                <div className = 'field'>
                    <label>Search</label>
                    <input className='input'
                        onChange = {(e) => setTerm(e.target.value)} 
                    />
                </div>
            </div>
            <div className = 'ui celled list'>
                {renderResults}
            </div>
        </React.Fragment>
    )
}

class SearchComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:'', results: []}
    }



    render(){
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default Search