"use strict";

import React from 'react';

function httpRecurse(url, output = []) {
  // makes recursive api call to deal with paginated data on endpoint 

  return new Promise((resolve, reject) => {
      let outputObj = output; 

      fetch(url, {
        method: 'get'
      })
        .then((res) => {
          // need to pass data stream from fetch through JSON() to get correct format 
          return res.json()
        })
          .then((jsonObj) => {
            outputObj.push(...jsonObj.results);

            if (jsonObj.next !== null) {
              httpRecurse(jsonObj.next, outputObj)
            } else {
              return;
            }
          })
      resolve(output); 
    })
  }





//   let outputObj = output; 

//   fetch(url, {
//     method: 'get'
//   })
//     .then((res) => {
//       // need to pass data stream from fetch through JSON() to get correct format 
//       return res.json()
//     })
//       .then((jsonObj) => {
//         outputObj.push(...jsonObj.results);

//         if (jsonObj.next !== null) {
//           httpRecurse(jsonObj.next, outputObj)
//         } else {
//           return;
//         }
//       })
//   return output; 
// }

// simple button that triggers api call 
function HttpButton(props) {
  return (
    <button onClick={() => props.onClick()}>API call bicycles</button>
  );
}


export { httpRecurse, HttpButton };












