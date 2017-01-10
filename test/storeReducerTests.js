"use strict";

import { expect } from "chai";

import { reducer } from "../client/app/store.js";

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

describe("Main store reducer", () => {
	let mainReducer = reducer

	it("Should return an updated bike racks list", () => {
		mainReducer()
	})

})