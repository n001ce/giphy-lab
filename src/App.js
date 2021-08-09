import React from 'react'
import {Component} from 'react'
import Giphy from './Components/Giphy.js'

class App extends Component{
  
  constructor(props){
    super(props)
    this.state= {
        baseUrl: 'https://api.giphy.com/v1/gifs/search?',
        apikey: 'api_key=' + process.env.REACT_APP_APIKEY,
        q: '&q=',
        queryTitle: '',
        limit: '&limit=20',
        offset: '&0'
  }
}
  handleChange = (event) =>{
      this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) =>{
      event.preventDefault()
      this.setState({
        searchUrl: this.state.baseUrl + this.state.apikey + this.state.q + this.state.queryTitle + this.state.limit
      }, ()=>{
        fetch(this.state.searchUrl)
          .then(response=>{
             return response.json()
          }).then(json=> this.setState({
            giph: json,
            queryTitle: '',
          }),
          err => console.log(err))
      })
  }
  

render(){
  return(
    <div className="App">
      <h1 className="header">Giphy Search</h1>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor = 'queryTitle'>Search</label>
          <input
              id= "queryTitle"
              type="text"
              value={this.state.queryTitle}
              onChange={this.handleChange}
          />
          <input 
              className="btn"
              type="submit"
              value="Find Giph"
          />
      </form>
      {(this.state.giph)
        ? <Giphy giph={this.state.giph} />
        : ""
      }
    </div>
    )
  }
}

export default App