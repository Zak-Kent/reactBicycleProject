"use strict";

import { applyMiddleware, createStore } from "redux";

import promise from "redux-promise-middleware";
import logger from "redux-logger";

const initialState = {
      center: {
        lat: 45.521, 
        lng: -122.673
      },
      bikeRacks: [
        {
            "id": 605,
            "geom": {
                "type": "Point",
                "coordinates": [
                    -122.67870784036258,
                    45.51479513525199,
                    0.0
                ]
            },
            "theft_prob_per_bike_day_x_1000": "0.26570381"
        },
        {
            "id": 921,
            "geom": {
                "type": "Point",
                "coordinates": [
                    -122.67852660605533,
                    45.51511959277659,
                    0.0
                ]
            },
            "theft_prob_per_bike_day_x_1000": "0.68703283"
        }
      ]
    }

const newState = {
      center: {
        lat: 45.521, 
        lng: -122.673
      },
      bikeRacks: [
        {
            "id": 555,
            "geom": {
                "type": "Point",
                "coordinates": [
                    -122.67870784036258,
                    45.51479513525199,
                    0.0
                ]
            },
            "theft_prob_per_bike_day_x_1000": "0.26570381"
        }
      ]
    }

const reducer = (state=initialState, action) => {
  
  switch (action.type) {
    case "CHANGE_STORE": {

      console.log('inside switch statement')

      return {...state, bikeRacks: action.payload}
    }
  }
  
  return state;
}

const middleware = applyMiddleware(promise(), logger())

export default createStore(reducer, middleware)