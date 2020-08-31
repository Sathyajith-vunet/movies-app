import React from 'react';
import "./Search.scss";
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of movies that you'd like to autosuggest.
const movies = [
  {
      "id" : "1",
      "movieName" : "Batman Begins",
      "tagline" : "Evil fears the knight",
      "description" : "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
      "genre" : "Action, Crime, Drama",
      "producers" : "DC Comics, Legendary Entertainment, DC Entertainment, Syncopy, Patalex III Productions Limited, Warner Bros. Pictures",
      "originalRelease" : "2005-06-10",
      "runningTime" : "140 mins",
      "boxOffice" : "$374,218,673",
      "voteAvg" : "7.7 / 10",
      "background" : "/src/images/Batman2.jpg",
      "foreground" : "../../images/Batman1.jpeg"
  },
  {
      "id" : "2",
      "movieName" : "The Dark Knight",
      "tagline" : "Welcome to the world without rules",
      "description" : "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "genre" : "Action, Crime, Drama",
      "producers" : "Warner Bros. Pictures, Legendary Entertainment (in association with), Syncopy, DC Comics",
      "originalRelease" : "2008-07-24",
      "runningTime" : "152 mins",
      "boxOffice" : "$1,003,045,358",
      "voteAvg" : "9.0 / 10",
      "background" : "",
      "foreground" : ""
  },
  {
      "id" : "3",
      "movieName" : "The Dark Knight Rises",
      "tagline" : "Every Legend Has An End",
      "description" : "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      "genre" : "Action, Adventure",
      "producers" : "Warner Bros. Pictures, Legendary Entertainment, DC Entertainment, Syncopy, DC Comics",
      "originalRelease" : "2012-07-20",
      "runningTime" : "164 mins",
      "boxOffice" : "$1,081,124,605",
      "voteAvg" : "8.4 / 10",
      "background" : "",
      "foreground" : ""
  },
  {
    "id" : "4",
    "movieName" : "Inception",
    "tagline" : "Your mind is the scene of the crime",
    "description" : "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "genre" : " Action, Adventure, Sci-Fi",
    "producers" : "Warner Bros. Limited, Legendary Entertainment, Syncopy",
    "originalRelease" : "2007-07-16",
    "runningTime" : "148 mins",
    "boxOffice" : "$831,498,685",
    "voteAvg" : "8.8 / 10",
    "background" : "",
    "foreground" : ""
  },
  {
    "id" : "5",
    "movieName" : "Interstellar",
    "tagline" : "Mankind was born on Earth. It was never meant to die here.",
    "description" : "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "genre" : "Adventure, Drama, Sci-Fi",
    "producers" : "Paramount Pictures, Warner Bros. Pictures, Legendary Entertainment, Syncopy, Lynda Obst Productions, Government of Alberta, Alberta Media Fund, Atvinnuvega- og nýsköpunarráðuneytið",
    "originalRelease" : "2014-11-7",
    "runningTime" : "169 mins",
    "boxOffice" : "$710,525,276",
    "voteAvg" : "8.6 / 10",
    "background" : "",
    "foreground" : ""
  },
  {
    "id" : "6",
    "movieName" : "Fight Club",
    "tagline" : "How much can you know about yourself if you've never been in a fight?",
    "description" : "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    "genre" : "Drama",
    "producers" : "Fox 2000 Pictures, Regency Enterprises, Linson Films, Atman Entertainment, Knickerbocker Films, Medusa Film, Taurus Film",
    "originalRelease" : "1999-09-12",
    "runningTime" : "139 mins",
    "boxOffice" : "$103,996,122",
    "voteAvg" : "8.8 / 10",
    "background" : "",
    "foreground" : ""
  },
  {
    "id" : "7",
    "movieName" : "John Wick",
    "tagline" : "Don't Set Him Off!",
    "description" : "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    "genre" : "Action, Crime, Thriller",
    "producers" : "Summit Entertainment, Thunder Road Pictures, 87Eleven, MJW Films, DefyNite Films, Cutting Edge Group, Huayi Brothers Media, Company Films, Poquito Productions, Unbelievable Entertainment",
    "originalRelease" : "2015-04-10",
    "runningTime" : "101 mins",
    "boxOffice" : "$86,081,711",
    "voteAvg" : "7.4 / 10",
    "background" : "",
    "foreground" : ""
  },
  {
    "id" : "8",
    "movieName" : "The Fast and The Furious",
    "tagline" : "If you have what it takes... You can have it ALL!",
    "description" : "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
    "genre" : "Action, Crime, Thriller",
    "producers" : "Universal Pictures, Original Film, Mediastream Film GmbH & Co. Productions KG, Ardustry Entertainment",
    "originalRelease" : "2001-09-14",
    "runningTime" : "106 mins",
    "boxOffice" : "$214,463,726",
    "voteAvg" : "6.8 / 10",
    "background" : "",
    "foreground" : ""
  },
  {
    "id" : "9",
    "movieName" : "The Sixth Sense",
    "tagline" : "I see dead people",
    "description" : "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    "genre" : "Drama, Mystery, Thriller",
    "producers" : "Hollywood Pictures, Spyglass Entertainment, The Kennedy/Marshall Company, Barry Mendel Productions",
    "originalRelease" : "1999-09-05",
    "runningTime" : "107 mins",
    "boxOffice" : "$672,806,292",
    "voteAvg" : "8.1 / 10",
    "background" : "",
    "foreground" : ""
  },
  {
    "id" : "10",
    "movieName" : "Batman vs Superman: Dawn of Justice",
    "tagline" : "Who will win?",
    "description" : "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    "genre" : "Action, Adventure, Sci-Fi",
    "producers" : "Warner Bros. Pictures, Atlas Entertainment, Cruel & Unusual Films, DC Comics, DC Entertainment, RatPac-Dune Entertainment, Zak Productions",
    "originalRelease" : "2016-03-25",
    "runningTime" : "152 mins",
    "boxOffice" : "$873,637,528",
    "voteAvg" : "6.4 / 10",
    "background" : "",
    "foreground" : ""
  }
];
   
  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    return inputLength === 0 ? [] : movies.filter(movie =>
      movie.movieName.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
   
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
   
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
        <a>
            {suggestion.movieName}
        </a>
    </div>
  );
   
  class Search1 extends React.Component {
    constructor() {
      super();
   
      // Autosuggest is a controlled component.
      // This means that you need to provide an input value
      // and an onChange handler that updates this value (see below).
      // Suggestions also need to be provided to the Autosuggest,
      // and they are initially empty because the Autosuggest is closed.
      this.state = {
        value: '',
        suggestions: []
      };
    }
   
    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };
   
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
   
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    getSuggestionValue = (suggestion) => {
      // console.log(movies[0]);
      for(var i = 0;i<movies.length;i++){
        if(movies[i].movieName === suggestion.movieName){
          // console.log(movies[i].movieName);
          this.props.onSelect(movies[i].background);
        }
      }
      return suggestion.movieName;
};
   
    render() {
      const { value, suggestions } = this.state;
   
      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'Search Movie Title...',
        value,
        onChange: this.onChange
      };
   
      // Finally, render it!
      return (
        <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4">  
            <h1 className="" href="#">Movie Details App</h1>
            <form className="form-inline ml-auto">
                <div className="md-form my-0">
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                      getSuggestionValue={this.getSuggestionValue}
                      renderSuggestion={renderSuggestion}
                      inputProps={inputProps}
                    />
                </div>
            </form>
        </nav>
      );
    }
  }

export default Search1;