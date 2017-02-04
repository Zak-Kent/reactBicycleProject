"use strict";

import { expect } from "chai";
import { getMapRef, userCenterAction, mapDragAction } from "../client/app/actions/mapActions.js";


describe("userCenterAction Action", () => {
  let output = userCenterAction();

  it("should return a function", () => {
    expect(output).to.be.an('function');
  })
})

describe("getMapRef Action", () => {
  let output = getMapRef("test");

  it("should return and object with type property", () => {
      expect(output.type).to.equal("GET_MAP_REF");
  })
  it("should return a map object as payload", () => {
      expect(output.payload).to.equal("test")
  })
})

describe("mapDragAction Action", () => {
  let newCoords = {lat: 45, lng: -120}
  let output = mapDragAction(newCoords);

  it("should return a function", () => {
    expect(output).to.be.an('function');
  })
  it("should return correct dispatch obj to store", () => {
    // need to mock a dispatch function and assign payload inside to local var  
    let dispatchPayload;
    let dispatch = (input) => {dispatchPayload = input};
    let mapActionFunc = output(dispatch);
    
    expect(dispatchPayload.type).to.be.equal("CHANGE_MAP_CENTER")
    expect(dispatchPayload.payload.center.lat).to.be.equal(45)
    expect(dispatchPayload.payload.center.lng).to.be.equal(-120)  
  })
})

