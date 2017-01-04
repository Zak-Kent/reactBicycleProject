"use strict";

import { createStore } from "redux";


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

const reducer = (state=initialState, action) => {
	return state;
}

const store = createStore(reducer);


export { store };