import React from "react";
import SearchEngine from './SearchEngine';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <h1>Weather Search Engine</h1>
          <SearchEngine />      
      </div>
      <div className="footer">
        <a href="https://github.com/somayehmahjoob/SearchEngine-React">Open-source code</a>, by Somayeh.Mahjoob
      </div>
    </div>
  );
}

export default App;
