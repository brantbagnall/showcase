import React, {Component} from 'react';

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark'],
      userInput: '',
      filteredArray: []
    }
  }

  updateInput(e){
    this.setState({
      userInput: e.target.value
    });
    console.log(e.target.value);
  }

  updatArray(){
    var unArr = this.state.unfilteredArray.slice();
    var user = this.state.userInput;
    var reg = new RegExp (user, "i");
    var fArr = [];
    unArr.forEach(function(word) {
      if(word.match(reg) && user.length > 0){
        console.log(word);
        fArr.push(word);
      } else if (user === '') {
        fArr = ['No Match']
      }
    });

    this.setState({
      filteredArray: fArr
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>
          Filter String
        </h4>
        <span className="puzzleText">
        Unfiltered: {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input className="inputLine" onChange={ e=> this.updateInput(e)} />
        <button className="confirmationButton" onClick={ ()=> this.updatArray()}>
          Confirm
        </button>
        <span className="resultsBox filterStringRB">
        Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    )
  }
}
export default FilterString;
