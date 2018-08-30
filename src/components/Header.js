import React, {Component} from 'react';
import Diamond from '../images/logo.png';

class Header extends Component {

  render(){
      return(
        <div className="header-wrapper">
          <div className="container">

            <div className="row center-xs padding-fix">
                <div className="col-xs-6">
                    <div className="box">
                          <img  src={Diamond}/>
                    </div>
                </div>
            </div>

          </div>
        </div>
      );
  }
}

export default Header;
