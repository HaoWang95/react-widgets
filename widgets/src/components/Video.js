import React, { useState, useEffect } from 'react';

const VideoSearch = () => {
    const [searchKey, setSearchKey] = useState('React');
    const [searchKeyDelayed, setSearchKeyDelayed] = useState('');
    useEffect(
        () => {
            const keyTimer = setTimeout(
                () => {
                    setSearchKeyDelayed(searchKey);
                }, 1500
            );
            return () => {
                clearTimeout(keyTimer);
            }
        }, [searchKey]
    );

    useEffect(() => {
        console.log('searchKeyDelayed has changed');
        return () => {
            console.log('make api request in this useEffect')
        }
    }, [searchKeyDelayed]);

    return (
        <React.Fragment>
            <div className='search-bar ui segment'>
                <div className='ui form'>
                    <div className='field'>
                        <label>Search Video</label>
                        <input
                            type='text'
                            value={searchKey}
                            onChange={(event) => { setSearchKey(event.target.value) }}
                            className='input'
                        />
                    </div>
                </div>
                <text>{searchKey}</text>
                <br />
                <text>{searchKeyDelayed}</text>
            </div>
        </React.Fragment>
    );
}

class VideoSearchComponent extends React.Component {
    constructor(){
        this.state = {searchKey: 'React', searchKeyDelayed: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (e) => {
        this.setState({searchKey: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className='search-bar ui segment'>
                    <form className = 'ui form' onSubmit = {this.onFormSubmit}>
                        <div className = 'field'>
                            <label>Search Video</label>
                            <input 
                                type = 'text'
                                className = 'input'
                                onChange = {e => {this.setState({searchKey: e.target.value})}}
                                value = {this.state.searchKey}
                            />
                        </div>
                        <text>{this.state.searchKey}</text>
                        <br />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default VideoSearch;