"use strict";

import { expect } from "chai";

import { sortRacks, locationCheck } from "../client/app/actions/utility.js";


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
  let sortRacksFunc = sortRacks;

  it("Should exist as a function", () => {
    expect(sortRacksFunc).to.be.an('function');
  })

  it("Should return correctly ordered results", () => {
    let sortedRacks = sortRacksFunc(racks);

    let rack0 = sortedRacks[0];
    let rack1 = sortedRacks[1];
    let rack2 = sortedRacks[2];
    let rack3 = sortedRacks[3];

    expect(rack0.theftProb < rack3.theftProb).to.equal(true);
    expect(rack0.theftProb < rack2.theftProb).to.equal(true);
    expect(rack0.theftProb < rack1.theftProb).to.equal(true);
  })
  
})

describe("Location check utility function", () => {
  let locationCheckFunc = locationCheck;

  it("Should exist as a function", () => {
    expect(locationCheckFunc).to.be.an('function');
  })
  it("Should work as expected with different locations", () => {
    expect(locationCheckFunc(45.511900, -122.638973)).to.equal(true);
    expect(locationCheckFunc(45.649831, -123.059892)).to.equal(false);
    expect(locationCheckFunc(123.059892, -45.649831)).to.equal(false);
    expect(locationCheckFunc(-45.649831, 122.45689)).to.equal(false);
  })

})
