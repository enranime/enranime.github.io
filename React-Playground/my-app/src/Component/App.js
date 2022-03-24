import React, {Component} from 'react'
import Table from './Table'


const App1 =() => {
    return(
      <div className="wrapper">
       <label htmlFor="text">
         Add Your Text Here:
         <br/>
         <textarea
           id="text"
           name="text"
           rows="10"
           cols="100"
         >
         </textarea>
        </label>
      </div>
    )
}

class App extends Component {
  render() {
    const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]    


    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData ={characters}/>
        <App1/>
      </div>
    )
  }
}

export default App