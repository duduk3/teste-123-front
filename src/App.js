import './App.css';

import React, { useEffect, useState } from 'react';

// API_ENDPOINT = 'https://hero-back-1978.herokuapp.com/users';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hero-back-1978.herokuapp.com/users')
      .then((res) => res.json())
      .then((parsedData) => { setData(parsedData); setLoading(false); });
  }, []);

  if (loading) return <h1>API_ENDPOINT</h1>;

  return (
    <>
      <h1>API_ENDPOINT</h1>
      <table>
        <tr>
          {Object.keys(data[0]).map(
            (key) => (<th key={ Math.random() }>{key}</th>),
          )}
        </tr>
        <tbody>
          {data.map((rowInfo) => (
            <tr key={ Math.random() }>
              {
                Object.values(rowInfo).map(
                  (cellInfo) => (<td key={ Math.random() }>{cellInfo}</td>),
                )
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
