const PARAMETERS = require('./rangeConfiguration');

function checkParameter(parameter, value) {
    const { lowerLimit, upperLimit, warningTolerance } = PARAMETERS[parameter];
    const warningLowerLimit = lowerLimit + warningTolerance;
    const warningUpperLimit = upperLimit - warningTolerance;

    if (value < lowerLimit) {
        return `${parameter} is below the minimum limit!`;
    } else if (value >= lowerLimit && value < warningLowerLimit) {
        return `Warning: ${parameter} approaching discharge`;
    } else if (value >= warningLowerLimit && value <= upperLimit) {
        return `Normal ${parameter} level`;
    } else if (value > upperLimit) {
        return `${parameter} is above the maximum limit!`;
    } else if (value > warningUpperLimit && value <= upperLimit) {
        return `Warning: ${parameter} approaching charge-peak`;
    }
}

module.exports = checkParameter;
