import React, {Component} from 'react';

class ResultList extends Component {

  render(){
    if(this.props.resultPlaces.results !== undefined ){
      var placeList = this.props.resultPlaces.results.map(name=> {
          return (
            <li className="col-xs-2"> { name.name} </li>
          )
      })
    }
      return(
          <div className="col-xs-12 row resultlist">
            {placeList}
          </div>
      );
  }
}

export default ResultList;
