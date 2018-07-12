// Code your solution in this file!
const drivers = {};

function returnFirstTwoDrivers(drivers){
  const firstTwoDrivers = function (drivers){
    return {drivers[0], drivers[1]};
  }
  firstTwoDrivers;
}

function returnLastTwoDrivers(drivers){
  const lastTwoDrivers = function (drivers){
    var len = drivers.length;
    return {driver[len],drivers[len-1] }
  }
}
