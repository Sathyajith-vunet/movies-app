import React from 'react';
import './App.css';
import Image from './components/Image/Image'
import Search1 from './components/Search/Search1';
import Details from './components/Details/Details';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '1',
      movieName: 'Batman Begins',
      tagline: 'Evil fears the knight',
      description: 'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
      genre: 'Action, Crime, Drama',
      producers: 'DC Comics, Legendary Entertainment, DC Entertainment, Syncopy, Patalex III Productions Limited, Warner Bros. Pictures',
      originalRelease: '2005-06-10',
      runningTime: '140 mins',
      boxOffice: '$374,218,673',
      voteAvg: '7.7 / 10',
      background: './Batman2.jpg',
      foreground: './Batman1.jpeg'
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
    <div className="App" style={divImage}>
      <Search1 onSelect={this.onSelect}/>
      <div className="container">
        <div className="row no-gutters">
        <div className="col-md-1"></div>
          <div className="col-md-3 no-gutters">
            <Image data={this.state.foreground}></Image>
          </div>
          <div className="col-md-7 no-gutters">
            <Details data={this.state}></Details>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
