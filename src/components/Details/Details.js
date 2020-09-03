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
                <div className="special-card">
                    <h2>{this.props.data.movieName}</h2>
                    <h4>{this.props.data.tagline}</h4>
                    <p>{this.props.data.description}</p>
                    <h4>{this.props.data.genre}</h4>
                    <p>{this.props.data.producers}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Original Release Date:</h5>
                            <h4>{this.props.data.originalRelease}</h4>
                        </div>
                        <div className="col-md-6">
                            <h5>Running Time:</h5>
                            <h4>{this.props.data.runningTime}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Box Office:</h5>
                            <h4>{this.props.data.boxOffice}</h4>
                        </div>
                        <div className="col-md-6">
                            <h5>Vote Average:</h5>
                            <h4>{this.props.data.voteAvg}</h4>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Details;