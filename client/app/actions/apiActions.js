"use strict";

export function racksApiCall(url) {
  // calls api using provided url and thunk 

  return function(dispatch) {
    fetch(url, {
          method: 'get'
        })
          .then((res) => {
            // need to pass data stream from fetch through JSON() to get correct format 
            return res.json()
          })
            .then((jsonRes) => {
              dispatch({type: "RECEIVE_RACKS", payload: jsonRes.results})
            })
            .catch((err) => {
              console.log("error in fetch")
              dispatch(type: "FETCH_RACKS_ERROR", payload: err)
            })
  }
}


