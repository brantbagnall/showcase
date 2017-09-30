import React, {Component} from 'react';

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  updateInput(e){
    this.setState({
      userInput: e.target.value
    });
  }

  updateAnswer(){
    var user = this.state.userInput;
    var answer ='NO TEXT ENTERED';
    var reverse = user.split('').reverse().join('');
    if (user.toLowerCase() ==  reverse.toLowerCase() && user){
      answer = 'True'
    } else if (user) {
      answer = 'False'
    }
    this.setState({
      palindrome: answer
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>
          Palindrome
        </h4>
        <input className="inputLine" onChange={ e => this.updateInput(e)} />
        <button className="confirmationButton" onClick={ ()=> this.updateAnswer()}>
          Confirm
        </button>
        <span className="resultsBox">
          Palindrome: {this.state.palindrome}
        </span>
      </div>
    )
  }
}
export default Palindrome;
