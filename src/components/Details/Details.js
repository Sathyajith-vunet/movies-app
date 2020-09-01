import React from 'react';
import './Details.scss'

class Details extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        if(this.props.data.movieName === '') return null;
        return (
                <div className="card special-card">
                    <h2>{this.props.data.movieName}</h2>
                    <h4>{this.props.data.tagline}</h4>
                    <p>{this.props.data.description}</p>
                    <p>{this.props.data.genre}</p>
                    <p>{this.props.data.producers}</p>
                    <p>{this.props.data.originalRelease}</p>
                    <p>{this.props.data.runningTime}</p>
                    <p>{this.props.data.boxOffice}</p>
                    <p>{this.props.data.voteAvg}</p>
                </div>
            )
    }
}

export default Details;