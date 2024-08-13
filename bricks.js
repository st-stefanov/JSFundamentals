function solve(numberOfBricks, numberOfWorkers, cartCapacity) {
    'use strict';

    const totalBricksPerTrip = numberOfWorkers * cartCapacity;
    const numberOfTrips = Math.ceil(numberOfBricks / totalBricksPerTrip);
    console.log(numberOfTrips)
}
solve(120, 2, 30)
solve(355, 3, 10)