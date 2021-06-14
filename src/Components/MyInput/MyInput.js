import React, { useState, useEffect, useRef } from 'react';

const MyInput = ({fetchFn, timeout = 300, renderItem}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [timer, setTimer] = useState()
    const [results, setResults] = useState([])

    const styles = {
        position: 'absolute',
        zIndex: 2
    }

    const getSuggestions = async () => {
        const response = await fetchFn(searchTerm)        
        setResults(response)
    }

    useEffect(() => {
        if(timer){
            clearTimeout(timer)
            setTimer(null)
        }
        if(searchTerm.length > 2){
            setTimer(setTimeout(() => getSuggestions(), timeout))
        }
    }, [searchTerm])
    
    const renderResults = () => {
            return (
                <div className="results" style={styles}>
                    {results.map( e => e ? renderItem(e) : null)}
                </div>
            )
    }

    return (
        <div>
            <input
                className="search-input"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search"
            />
            {renderResults()}
        </div>
    )
}

export default MyInput