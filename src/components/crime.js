import React from 'react';

const Crime = (props) => {
   if(props.crime){
      let obj = props.crime;
      console.log(props.crime)
      var newCrime = []
      for (var prop in obj){
          if (obj[prop].category === "burglary") {
                newCrime.push(<div class="crime"><div>{(obj[prop].category)}: </div><div>The result of our law enforcement: {(obj[prop].outcome_status.category)}</div></div>)
          }  
      }
      return (
         <div className = "component">
            <h1>CRIMINAL ACTIVITY AFFECTING YOUR COMMUNITY, THE HORROR!!!: </h1>
            <div>{newCrime}</div>
         </div>
      )
  } else {
      return null
  }
}
export default Crime