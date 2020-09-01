import React from 'react';
import './App.css';
import Image from './components/Image/Image'
import Search1 from './components/Search/Search1';
import Details from './components/Details/Details';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      movieName: '',
      tagline: '',
      description: '',
      genre: '',
      producers: '',
      originalRelease: '',
      runningTime: '',
      boxOffice: '',
      voteAvg: '',
      background: '',
      foreground: ''
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(movies) {
    console.log(movies);
    this.setState({...movies});
    // document.getElementsByClassName('App')[0].style.backgroundImage="url(" + background +")";
  }

  render(){
    var divImage = {
      backgroundImage : "url(" + this.state.background + ")"
    };
  return (
    <div className="App">
      <Search1 onSelect={this.onSelect}/>
      <div className="container">
        <div className="row">
        <div className="col-md-3"></div>
          <div className="col-md-3">
            <Image data={this.state.foreground}></Image>
          </div>
          <div className="col-md-4">
            <Details data={this.state}></Details>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
