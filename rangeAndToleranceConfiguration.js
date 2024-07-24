const WARNING_TOLERANCE_PERCENTAGE = 0.05; // 5%

const PARAMETERS = {
    soc: {
        lowerLimit: 20,
        upperLimit: 80,
        warningTolerance: WARNING_TOLERANCE_PERCENTAGE * 80
    },
    temperature: {
        lowerLimit: 0,
        upperLimit: 100,
        warningTolerance: WARNING_TOLERANCE_PERCENTAGE * 100
    },
    chargeRate: {
        lowerLimit: 0,
        upperLimit: 50,
        warningTolerance: WARNING_TOLERANCE_PERCENTAGE * 50 
    }
};

module.exports = PARAMETERS;
