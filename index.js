const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fair){
        return fair * int
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, option){
    return option(arrayOfDrivers)
}