import React from "react";

const Bands = props => {
    // debugger
    return (
        <div>{props.bands.map(band => <li key={band.name}>{band.name}</li>)}</div>
    )
}

export default Bands;