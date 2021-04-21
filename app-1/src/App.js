import React from 'react'
import './App.css';
import ParentComponent from './components/ParentComponent'

//App.js is a Functional Component and contains no state
//But renders our "Parent" component

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;