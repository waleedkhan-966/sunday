import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>we are making child component {props.lineName}</h1>
            <hi>we are again making child component {props.secondName}</hi>
            
        </div>
    )
}

export default Dinner;