import './App.css';
import React, { useState } from 'react';
 

function App() {
  const [returnedData, setReturnedData] = useState (['Hiiii there'])
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json' ,
        'Accept' : 'application/json'
      }
    })
    .then(res => res.json()) ;
    console.log(newData) ;
    setReturnedData(newData.result) 
  }

  
  return (
    <div className="App">
      <button onClick={() => getData('http://localhost:5000/quit')}>Click</button>
      <button onClick={() => getData('http://localhost:5000/api')}>Click</button>
      {returnedData}
    </div>
  );
}

export default App;