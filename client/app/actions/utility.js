"use strict";

export function sortRacks(rackArray) {
  // takes a list of sorted racks and assigns red, yellow, green markers to them based on theft score

  let copyRackArray = rackArray.slice()

  const colorArray = [
    'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
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




// ************************** need to add location check functionality to app with a update in the store 

  // this.locationCheck = function(lat, lng) {
  //   // min/max values found using valid data points from DB 
  //   var xMin = 122.472241;
  //   var xMax = 122.835418;
  //   var yMin = 45.431566;
  //   var yMax = 45.637628;

  //   var posLon = lng * -1;

  //   // check to see if point is inside user area 
  //   if (xMax >= posLon && posLon >= xMin && yMax >= lat && lat >= yMin){
  //     console.log('inisde the square');
  //     return true; 
  //   } else {
  //     console.log('outside the square');
  //     return false;    
  //   }
  // };