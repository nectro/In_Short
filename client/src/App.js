import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const [file,setFile] = useState(null);
  const [summary,setSummary] = useState(null);
  /*
  axios.get('http://localhost:5000/response/')
    .then(
      res =>{
        console.log(res.data)
      }
    )
*/

    const fileHandler = (e)=>{
      setFile(e.target.files[0]);
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(file);

      const formdata = new FormData();

      formdata.append('doc', file);

      axios.post('http://localhost:5000/upload', formdata)
        .then(res =>{
          console.log(res.data)
          setSummary(res.data.summary.frequency_summary.replace(/\n/g, ''))
        })
    }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={fileHandler}/>
        <input type="submit" value="submit"/>
      </form>
      <center>
        {
          summary &&
          <div className="summary">
              <p>
                {summary}
              </p>
          </div>
        }
      </center>
    </div>
  );
}

export default App;
