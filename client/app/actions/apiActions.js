"use strict";

// import 'whatwg-fetch';
import 'fetch-everywhere'

// import { fetchJsonp } from "fetch-jsonp";

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
              console.log("json response in racksApiCall action:", jsonRes.results)
              dispatch({type: "RECEIVE_RACKS", payload: jsonRes.results})
            })
            .catch((err) => {
              dispatch(type: "FETCH_RACKS_ERROR", payload: err)
            })
  }
}

