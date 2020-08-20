import React from 'react';

function AppHeader() {
        return (
            <nav className="navbar navbar-expand-lg">
                <h1>Movie Details App</h1>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                {/* </div> */}
            </nav>
        )
}

export default AppHeader;