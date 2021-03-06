"use strict";

export function sortRacks(rackArray) {
  // takes a list of sorted racks and assigns red, yellow, green markers to them based on theft score

  let copyRackArray = rackArray.slice()

  const colorArray = [
    'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
  ];

  copyRackArray.sort((a, b) => {
    return parseFloat(a.theft_prob_per_bike_day_x_1000) - parseFloat(b.theft_prob_per_bike_day_x_1000);
  })

  let sortedOutput = [];

  for (let i = 0; i < copyRackArray.length; i++) { 
    let colorIdx;
    let colorSplit = copyRackArray.length / 3; 

    if (i < colorSplit) {
      colorIdx = 0;
    } else if (i > colorSplit && i < colorSplit * 2) {
      colorIdx = 1;
    } else {
      colorIdx = 2; 
    }

    let obj = {
      id: copyRackArray[i].id, 
      lng: copyRackArray[i].geom.coordinates[0],
      lat: copyRackArray[i].geom.coordinates[1],
      theftProb: copyRackArray[i].theft_prob_per_bike_day_x_1000,
      icon: colorArray[colorIdx]
    };
    sortedOutput.push(obj);
  }

  return sortedOutput;
}

export function locationCheck(lat, lng) {
    // min/max values found using valid data points from DB 
    let xMin = 122.472241;
    let xMax = 122.835418;
    let yMin = 45.431566;
    let yMax = 45.637628;

    let posLon = lng * -1;

    // check to see if point is inside user area 
    if (xMax >= posLon && posLon >= xMin && yMax >= lat && lat >= yMin){
      return true; 
    } else {
      return false;    
    }
  };
