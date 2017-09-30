import React, {Component} from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput:''
    }
  }


  updateInput (e) {
    var newUser = this.state.userInput;
    newUser = e.target.value.toString();
    this.setState({
      userInput: newUser
    });
    // console.log(this.state.userInput)
    console.log(e.target.value);
  }

  updateArrays () {
    var newArray = this.state.userInput.split(','); //['1','2','3','4','5']
    var even = [];
    var odd = [];
    console.log(newArray)
    for (var i = 0; i < newArray.length; i++) {
      if(+newArray[i] % 2 === 0) {
        even.push(+newArray[i])
      } else if (+newArray[i] % 2) {
        odd.push(+newArray[i])
      }
    }
    if (even[0] && odd[0]) {
      
    } else {
      even = ['Use only numbers and commas'];
      odd = ['Example: 1,2,3,4'];
    }
    this.setState({
      evenArray: even,
      oddArray: odd
    })
  }

  render() {
    return (
    <div  className="puzzleBox evenAndOddPB">
      <h4>
        Even and Odds
      </h4>
      <input className="inputLine" onChange={ (e)=> this.updateInput(e)}>

      </input>
      <button className="confirmationButton" onClick={ ()=> this.updateArrays()}>
        Confirm
      </button>
      <spans className="resultsBox">
        Even Array: {JSON.stringify(this.state.evenArray)}
      </spans>
      <spans className="resultsBox">
      Odd Array: {JSON.stringify(this.state.oddArray)}
      </spans>
    </div>
    )
  }
}
export default EvenAndOdd;
