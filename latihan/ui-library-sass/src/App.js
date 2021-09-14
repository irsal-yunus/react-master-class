import React from "react"
import "./App.scss"

const App = () =>{
  return(
    <div className="App">
      <h1>learning SASS</h1>
      <div className="card">
        <div className="card__image">
          image
        </div>
        <div className="card__heading">
          heading
        </div>
        <div className="card__para--normal">
          paragraph 
        </div>
        <div className="card__para--italic">
          paragraph 
        </div>
      </div>
      <button className="btn btn--primary">primary</button>
      <button className="btn btn--secondary">primary</button>
    </div>
  )
}

export default App 