"use strict";

import 'whatwg-fetch';

export function racksApiCall(url) {
  // calls api using provided url and thunk 

  return function(dispatch) {
    // nested return lets you chain aysnc actions with thunk middleware so you can call .then on 
    // the response of the fetch() after it dispatches its action to store. This is called in
    // index.jsx apiAction() method 
    return fetch(url, {
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
                    dispatch(type: "FETCH_RACKS_ERROR", payload: err)
                  })
  }
}

