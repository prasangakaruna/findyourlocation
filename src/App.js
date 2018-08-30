import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SideList from './components/SideList';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results:{}
    }
  }

  updateState(newplaces){
    this.setState({
      results:newplaces
    })
  }
  render() {
    return (
      <div className="App">
      
        <Header />
        <Nav />
        <form>
          <div className="container form-control-wrap">
            <div className="col-md-12">



              <Search callUpdate={this.updateState.bind(this)} />
            </div>

            <div className="row listitem">

                <ResultList resultPlaces={this.state.results}/>


            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default App;
