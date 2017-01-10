"use strict";

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

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
      gMapObj: null, 
      insidePortland: false
    }

export const reducer = (state=initialState, action) => {
  
  switch (action.type) {
    case "RECEIVE_RACKS": {
      return {...state, bikeRacks: action.payload}
    }
    case "INSIDE_PORTLAND": {
      return {...state, insidePortland: action.payload.insidePortland}
    }
    case "GET_USER_LOCATION": {
      // only updates the default starting center of map if user is in Portland
      if (state.insidePortland) {
        return {...state, userCenter: action.payload.center}
      } else {
        return {state}
      }
    }
    case "CHANGE_MAP_CENTER": {
      return {...state, userCenter: action.payload.center, mapMoved: true}
    }
    case "GET_MAP_REF": {
      return {...state, gMapObj: action.payload}
    }
  }
  
  return state;
}

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, composeWithDevTools(middleware));
