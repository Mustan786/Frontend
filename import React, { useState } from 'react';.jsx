import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState([]);

    const handleInputChange = (e) => {
        setJsonInput(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            const res = await axios.post('https://your-backend-url/bfhl', parsedData);
            setResponse(res.data);
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleFilterChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedFilter(value);
    };

    return (
        <div>
            <h1>BFHL Frontend</h1>
            <textarea value={jsonInput} onChange={handleInputChange} placeholder="Enter JSON input" />
            <button onClick={handleSubmit}>Submit</button>

            {response && (
                <div>
                    <select multiple onChange={handleFilterChange}>
                        <option value="alphabets">Alphabets</option>
                        <option value="numbers">Numbers</option>
                        <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
                    </select>

                    {selectedFilter.includes('alphabets') && (
                        <div>Alphabets: {JSON.stringify(response.alphabets)}</div>
                    )}
                    {selectedFilter.includes('numbers') && (
                        <div>Numbers: {JSON.stringify(response.numbers)}</div>
                    )}
                    {selectedFilter.includes('highest_lowercase_alphabet') && (
                        <div>Highest Lowercase Alphabet: {JSON.stringify(response.highest_lowercase_alphabet)}</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
