import './App.css';
import Header from "./Header"
import Nav from "./Nav"
import Results from "./Results"
import { useState } from "react"
import requests from "./requests"

function App() {
const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">
      <Header />
      
      <Nav />

      <Results />      
    </div>
  );
}

export default App;
