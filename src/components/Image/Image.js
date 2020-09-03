import React from 'react';
import "./Image.scss";

function Image(props) {
    console.log(props);
    var cardImage = {
        backgroundImage : "url(" + props.data + ")"
      };
    if(props.data === '') return null;
    else{
        return (
            <div className="card-edit" style={cardImage}>
            </div>
        )
    }
}

export default Image;