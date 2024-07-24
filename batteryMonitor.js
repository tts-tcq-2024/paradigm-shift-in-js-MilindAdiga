const { checkTemperature, checkSoc, checkChargeRate } = require('./checker');

function batteryIsOk(temperature, soc, chargeRate) {
    return checkTemperature(temperature) && checkSoc(soc) && checkChargeRate(chargeRate);
}

module.exports = batteryIsOk;
