function batteryIsOk(temperature, soc, chargeRate) {
    if(temperature < 0 || temperature > 45) {
        return "Temperature is out of range!";
    } else if(soc < 20 || soc > 80) {
        return "State of Charge is out of range!";
    } else if(chargeRate > 0.8) {
        return "Charge Rate is out of range!";
    }
    return "Battery is OK";
}

function expectTrue(expression) {
    if (expression !== "Battery is OK") {
        return "Expected true, but got false";
    }
    return "Test passed";
}

function expectFalse(expression) {
    if (expression === "Battery is OK") {
        return "Expected false, but got true";
    }
    return "Test passed";
}

function main() {
    let results = [];
    results.push(expectTrue(batteryIsOk(25, 70, 0.7)));
    results.push(expectFalse(batteryIsOk(50, 85, 0.0)));
    
    results.forEach(result => {
        console.log(result);
    });
    
    console.log("All tests completed");
    return 0;
}

main();
