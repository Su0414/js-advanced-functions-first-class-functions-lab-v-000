// Code your solution in this file!
const drivers = {};

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(drivers.length-2,drivers.length);
};

function selectingDrivers {
  return [returnFirstTwoDrivers, returnLastTwoDrivers]
}
