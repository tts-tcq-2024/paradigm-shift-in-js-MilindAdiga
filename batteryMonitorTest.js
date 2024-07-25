const batteryIsOk = require('../src/batteryMonitor');

function ExpectTrue(expression) {
    if (!expression) {
        console.log("Expected true, but got false");
    }
}

function ExpectFalse(expression) {
    if (expression) {
        console.log("Expected false, but got true");
    }
}

function main() {
    ExpectTrue(batteryIsOk(25, 70, 0.7));
    ExpectFalse(batteryIsOk(50, 85, 0.0));
    ExpectTrue(batteryIsOk(2, 30, 0.7)); // Expect warning for temperature low
    ExpectTrue(batteryIsOk(40, 30, 0.7)); // Expect warning for temperature high
    ExpectTrue(batteryIsOk(25, 22, 0.7)); // Expect warning for SOC low
    ExpectTrue(batteryIsOk(25, 78, 0.7)); // Expect warning for SOC high
    ExpectTrue(batteryIsOk(25, 70, 0.78)); // Expect warning for charge rate high
    console.log("All ok");
    return 0;
}

main();
