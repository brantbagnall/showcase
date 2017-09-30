import React, {Component} from 'react';

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
        ],
      userInput: '',
      filteredArray: []
    }
  }

  updateArray () {
    var unArr = this.state.unfilteredArray.slice();
    var user = this.state.userInput;
    var filArr = []
    unArr.map(function(curr, i, arr){
      if(curr[user.toLowerCase()]) {
          filArr.push(curr)
        }
        return null;
    });
    if(filArr.length === 0) {
      filArr = ['No Match']
    }
    this.setState({
      filteredArray: []
    })
    this.setState({
      filteredArray: filArr.slice()
    })
  }

  updateInput (e) {
    this.setState({
    userInput: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>
          Filter Object
        </h4>
        <span  className="puzzleText">
          Unfiltered: {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input className="inputLine" onChange={e=> this.updateInput(e)}>

        </input>
        <button className="confirmationButton" onClick={()=> this.updateArray()}>
          Confirm
        </button>
        <span className="resultsBox filterObjectRB">
        Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    )
  }
}
export default FilterObject;
