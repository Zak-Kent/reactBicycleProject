"use strict";

export function testAction() {
	return {
		type: "CHANGE_STORE", 
		payload: [
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
}