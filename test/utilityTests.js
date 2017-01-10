"use strict";

import { expect } from "chai";

import { sortRacks } from "../client/app/actions/utility.js";



const racks = [
  {
    "id": 70,
    "geom": {
      "type": "Point",
      "coordinates": [
        -122.65674419494266,
        45.52129161367416,
        0.0
      ]
    },
    "theft_prob_per_bike_day_x_1000": "0.88120736"
  },
  {
    "id": 71,
    "geom": {
      "type": "Point",
      "coordinates": [
        -122.65150250641943,
        45.522571437349896,
        0.0
      ]
    },
    "theft_prob_per_bike_day_x_1000": "0.15002538"
  },
  {
    "id": 72,
    "geom": {
      "type": "Point",
      "coordinates": [
        -122.63949345115851,
        45.522086529460445,
        0.0
      ]
    },
    "theft_prob_per_bike_day_x_1000": "0.85646408"
  },
  {
    "id": 73,
    "geom": {
      "type": "Point",
      "coordinates": [
        -122.60169675755077,
        45.51931354074218,
        0.0
      ]
    },
    "theft_prob_per_bike_day_x_1000": "0.20565720"
  }
];

describe("Rack sorting utility function", () => {
  it("Should exist", () => {
    expect(sortRacks).to.exist();
  })
})