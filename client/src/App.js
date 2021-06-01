import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Summarizer from './components/Summarizer/Summarizer';
import Spellchecker from './components/Spellchecker/Spellchecker';
import Landing from './components/Landing/Landing';
import Aboutus from './components/Aboutus/Aboutus';

function App() {

  const [file,setFile] = useState(null);
  const [summary,setSummary] = useState(null);

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
      {/*<form onSubmit={handleSubmit}>
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
      </center>*/}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/Spellchecker">
            <Spellchecker />
          </Route>
          <Route path="/Summarizer">
            <Summarizer />
          </Route>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
