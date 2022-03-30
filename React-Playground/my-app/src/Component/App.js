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

  state = {
    characters: [
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
    ],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
    
    this.setState({
      characters: characters.filter((character,i) => {
        console.log(`the index = ${index} the i = ${i}`)
        return i !== index
      })
    })
  }


  render() {
    const {characters} = this.state

    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData ={characters} removeCharacter={this.removeCharacter}/>
        <App1/>
      </div>
    )
  }
}

export default App