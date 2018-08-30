import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
  getKey(event) {
    event.preventDefault()
    const keyTyped = this.refs.inputword.value;
    const update = this.props;


    // axios get location  

    axios.post('http://localhost:4010/getLocations', {
        city:keyTyped,
      })
      .then(function (response) {
        console.log(response);
        update.callUpdate(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
      return(

          <div className="searh-wrap">

            <div className="form-group row">

              <div className="col-xs-6 row col-xs-offset-4">
              <div className="col-xs-6">
                <div className="clearfix">
                  <input type="text"  className="form-control searchbox plaintext" placeholder="Find Your Place" id="staticEmail" ref="inputword"  />
                </div>
              </div>
              <div className="col-md-2">
                <button className="form-control search-btn"  onClick={this.getKey.bind(this)}> Search </button>
              </div>
              </div>
            </div>

          </div>

      );
  }
}

export default Search;
