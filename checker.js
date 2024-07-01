function batteryIsOk(temperature, soc, chargeRate) {
    const checks = [
        { condition: temperature < 0 || temperature > 45, message: "Temperature is out of range!" },
        { condition: soc < 20 || soc > 80, message: "State of Charge is out of range!" },
        { condition: chargeRate > 0.8, message: "Charge Rate is out of range!" }
    ];

    for (let check of checks) {
        if (check.condition) {
            return { status: false, message: check.message };
        }
    }

    return { status: true, message: "Battery is OK" };
}

function expectTrue(result) {
    if (!result.status) {
        return `Expected true, but got false: ${result.message}`;
    }
    return "Test passed";
}

function expectFalse(result) {
    if (result.status) {
        return `Expected false, but got true: ${result.message}`;
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
