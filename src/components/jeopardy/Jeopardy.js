import React, { Component } from 'react';
//import our service
import JeopardyService from "../jeopardyService/JeopardyService";

class Jeopardy extends Component {

  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      formData: {
        answer: '',
      },
      data: { category: {} },
      score: 0
    }
  }
  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0
    if (this.state.formData.answer === this.state.data.answer) {
      newScore = this.state.score + this.state.data.value
    } else {
      newScore = this.state.score - this.state.data.value

    }

    this.setState({
      score: newScore,
      formData: {
        answer: '',
      }
    })

    this.getNewQuestion()
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
      console.log(this.state.data.answer)
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    if (this.state.data.category === undefined)
      return (

        <div>
          <h1>Loading ...</h1>
        </div>
      )

    return (
      <div>

        <h2> Category: {(this.state.data.category.title)} </h2> <br />

        <h3> Question: {(this.state.data.question)} </h3><br />

        <h4> Point Value: {(this.state.data.value)} </h4><br />

        <h4> Score: {(this.state.score)}</h4><br />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Answer:</label>
            <input onChange={this.handleChange} type="text" name="answer" value={this.state.formData.answer} />
          </div>
          <button>Submit Answer</button> <br />

        </form>
      </div>
    );
  }
}
export default Jeopardy;