"use strict";

import { expect } from "chai";

import { HttpButton } from "../client/app/components/buttons.jsx";


describe("HttpButton component function", () => {
  let HttpButtonFunc = HttpButton;

  it("Should exist as a function", () => {
    expect(HttpButtonFunc).to.be.an('function');
  })
   
   // need to figure out how to test jsx output  
  // it("Should respond with correct button based on input", () => {
    
  // })

})