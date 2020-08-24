import React from 'react';
import "./Search.scss";
import axios from 'axios';

class Search extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
			query: '',
            results: {},
            loading: false,
            message: '',
		};

    }

    handleOnInputChange = (event) => {
        console.log('Called');
        const query = event.target.value;
                this.setState({ query, loading: true, message: ''  } );
    };
        render() {
            return(
            // <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4">  
                    <h1 className="" href="#">Movie Details App</h1>
                    <form className="form-inline ml-auto">
                        <div className="md-form my-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleOnInputChange}/>
                        </div>
                        <button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
                    </form>
                </nav>
            // </div>
            )
        }
}

export default Search;