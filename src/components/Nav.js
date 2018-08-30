import React, {Component} from 'react';
import Diamond from '../images/logo.png';

class Nav extends Component {

  render(){
      return(
        <div className="  nav-wrapper center-xs ">
        <div className="col-xs-6 col-xs-offset-3">
        <div className="row center-xs navbar">
            <div className="box col-xs">
                <p> Find Your Nearby Locations </p>
            </div>

        </div>
      </div>
        </div>
      );
  }
}

export default Nav;
