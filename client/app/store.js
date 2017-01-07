"use strict";

import { applyMiddleware, createStore } from "redux";

import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
      userCenter: {
        lat: 45.521, 
        lng: -122.673
      },
      bikeRacks: [],
      mapMoved: false,
      movedCenter: {},
      gMapObj: null
    }

const reducer = (state=initialState, action) => {
  
  switch (action.type) {
    case "RECEIVE_RACKS": {
      return {...state, bikeRacks: action.payload}
    }
    case "GET_USER_LOCATION": {
      return {...state, userCenter: action.payload.center}
    }
    case "CHANGE_MAP_CENTER": {
      return {...state, gMapObj: action.payload.gMapObj, mapMoved: true}
    }
  }
  
  return state;
}

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, middleware)