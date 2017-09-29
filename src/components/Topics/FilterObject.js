import React, {Component} from 'react';

class FilterObject extends Component {
  constructor() {
super();
this.state = {
  unfilteredArray: [],
  userInput: '',
  filteredArray: []
}
  }

updateInput (e) {
  
}

  render() {
    return (
<div className="puzzleBox filterObjectPB">
<h4>
Filter Object
</h4>
<span  className="puzzleText">

</span>
<input className="inputLine" onChange={e=> updateInput()}>

</input>
<button className="confirmationButton">
Confirm
</button>
<span className="resultsBox filterObjectRB">

</span>
</div>
    )
  }
}
export default FilterObject;
