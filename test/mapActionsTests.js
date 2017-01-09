"use strict";

import { expect } from "chai";
import { getMapRef } from "../client/app/actions/mapActions.js";

describe("test of tests", function() {
	var test = 5;

	it("should return correct", function() {
		expect(test).to.equal(5);
	})
})

describe("getMapRef Action", () => {
	let action = getMapRef({testObj: {mapFunc: "test"}});
	it("should return and object with type property", () => {
		expect(action.type).to.equal("GET_MAP_REF");
	})
})