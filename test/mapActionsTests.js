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
  let output = mapDragAction();
  it("should return a function", () => {
    expect(output).to.be.an('function');
  })
})

