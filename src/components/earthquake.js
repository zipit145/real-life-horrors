import React from 'react';

const Earthquake = (props) => {
    
    if(props.earthquake){
        console.log(typeof props.earthquake.features)
        console.log(props.earthquake.features)
        let obj = props.earthquake.features;
        var newEarthquake = []
        for (var prop in obj){
            if (obj[prop].properties.mag > 5) {
                  newEarthquake.push(<div class="earthquake"><div>DESTRUCTION FACTOR!!: {(obj[prop].properties.mag)}</div><div>{(obj[prop].properties.place)}</div><div>TSUNAMI CARNAGE!!: {(obj[prop].properties.tsunami)}</div></div>)
            }  
        }
        return (
            <div>{newEarthquake}</div>
        )
    } else {
        return null
    }
}

export default Earthquake