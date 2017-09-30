import React, {Component} from 'react';

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: ''
    }
  }

  updateNumber1(e){
    var user = +e.target.value;
    // var test = 1;
    // test += +e.target.value;
    // console.log(test);
    // if (test) {
    //   user = 'Please Use a Number for input one'
    //   this.updateSum();
    // }
    this.setState({
      number1: user
    });
  }

  updateNumber2(e){
    var user = +e.target.value;
    // var test = 1;
    // test += +e.target.value;
    // console.log(test);
    // if (test) {
    //   user = 'Please Use a Number for input two' 
    //   this.updateSum();
    // }
    this.setState({
      number2: user
    });
  }

  updateSum(){
    var sum = this.state.number1 + this.state.number2;
    if (sum) {
    } else {
      sum = 'Please use numbers only'
    }
    this.setState({
      sum: sum.toString()
    });
  }

  render() {
    return (
      <div  className="puzzleBox sumPB">
        <h4>
          Sum
        </h4>
        <input className="inputLine" onChange={ e => this.updateNumber1(e)} />
        <input className="inputLine" onChange={ e => this.updateNumber2(e)} />
        <button className="confirmationButton" onClick={ () => this.updateSum()}>
          Confirm
        </button>
        <span className="resultsBox">
          {this.state.sum}
        </span>
      </div>
    )
  }
}
export default Sum;
