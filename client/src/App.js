import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [response, setResponse] = useState('Oops, something went wrong...')
    useEffect(() =>{
        async function checkAPIRoute() {
            try {
                const host = process.env.REACT_APP_HOST || "http://localhost:5000"
                const response = await fetch(
                    `${host}/api`
                )
                if (response.status === 200) {
                    setResponse("a Success!!!")
                }
            } catch (err) {
                setResponse("Oops, something went wrong...")
            }
        }
        checkAPIRoute()
    }, [response])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mern-app</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1>The API call is...</h1>
          <h2>{response}</h2>
      </header>
    </div>
  );
}

export default App;
