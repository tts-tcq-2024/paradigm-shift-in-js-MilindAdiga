const TEMPERATURE_WARNING_THRESHOLD = 0.05 * 45; // 5% of 45
const SOC_WARNING_THRESHOLD = 0.05 * 80;         // 5% of 80
const CHARGE_RATE_WARNING_THRESHOLD = 0.05 * 0.8; // 5% of 0.8

function checkTemperature(temperature) {
    if (temperature < 0 || temperature > 45) {
        console.log("Temperature is out of range!");
        return false;
    } else if (temperature <= 0 + TEMPERATURE_WARNING_THRESHOLD) {
        console.log("Warning: Temperature approaching lower limit");
    } else if (temperature >= 45 - TEMPERATURE_WARNING_THRESHOLD) {
        console.log("Warning: Temperature approaching upper limit");
    }
    return true;
}

function checkSoc(soc) {
    if (soc < 20 || soc > 80) {
        console.log("State of Charge is out of range!");
        return false;
    } else if (soc <= 20 + SOC_WARNING_THRESHOLD) {
        console.log("Warning: Approaching discharge");
    } else if (soc >= 80 - SOC_WARNING_THRESHOLD) {
        console.log("Warning: Approaching charge-peak");
    }
    return true;
}

function checkChargeRate(chargeRate) {
    if (chargeRate >= 0.8 - CHARGE_RATE_WARNING_THRESHOLD) {
        console.log("Warning: Charge rate approaching upper limit");
    }  else if (chargeRate > 0.8) {
        console.log("Charge Rate is out of range!");
        return false;
    } 
    return true;
}

module.exports = { checkTemperature, checkSoc, checkChargeRate };
