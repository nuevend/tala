function goTo(page) {
    window.location.href = page;
}

// -----------------------------
// GLOBALS
// -----------------------------

let records = [];
let currentVehicle = null;

const VEHICLES = {
    motorcycle: 35,
    sedan: 15,
    suv: 10,
    truck: 6,
    jeep: 8
};

// -----------------------------
// OUTPUT
// -----------------------------

function print(text) {
    document.getElementById("output").textContent = text;
}

// -----------------------------
// VEHICLE SELECT (FIXED)
// -----------------------------

function setVehicle(vehicle, element) {
    currentVehicle = vehicle;

    // highlight selected button
    document.querySelectorAll(".vehicle").forEach(v => {
        v.classList.remove("active");
    });

    if (element) element.classList.add("active");

    print("Selected vehicle: " + vehicle.toUpperCase());
}

// -----------------------------
// ADD RECORD
// -----------------------------

function addRecord() {
    let distance = parseFloat(document.getElementById("distance").value);
    let fuel = parseFloat(document.getElementById("fuel").value);

    if (!currentVehicle) {
        print("Select a vehicle first.");
        return;
    }

    if (!distance || !fuel || fuel <= 0) {
        print("Invalid input.");
        return;
    }

    let efficiency = distance / fuel;
    let date = new Date().toISOString().split("T")[0];

    records.push({
        distance,
        fuel,
        efficiency,
        date
    });

    print(`Record added\nEfficiency: ${efficiency.toFixed(2)} km/L`);
}

// -----------------------------
// HISTORY
// -----------------------------

function showHistory() {
    if (records.length === 0) {
        print("No records yet.");
        return;
    }

    let text = "=== HISTORY ===\n";

    records.forEach((r, i) => {
        text += `${i + 1}. [${r.date}] ${r.distance} km | ${r.fuel} L | ${r.efficiency.toFixed(2)} km/L\n`;
    });

    print(text);
}

// -----------------------------
// SUMMARY
// -----------------------------

function showSummary() {
    if (!records.length) return print("No data.");

    let totalDistance = records.reduce((a, b) => a + b.distance, 0);
    let totalFuel = records.reduce((a, b) => a + b.fuel, 0);
    let avg = totalDistance / totalFuel;

    let ideal = VEHICLES[currentVehicle];
    let expected = totalDistance / ideal;
    let wasted = totalFuel - expected;

    let text = "=== SUMMARY ===\n";
    text += `Vehicle: ${currentVehicle.toUpperCase()}\n`;
    text += `Total Distance: ${totalDistance.toFixed(2)} km\n`;
    text += `Total Fuel: ${totalFuel.toFixed(2)} L\n`;
    text += `Average Efficiency: ${avg.toFixed(2)} km/L\n\n`;

    text += `Ideal Efficiency: ${ideal} km/L\n`;
    text += `Expected Fuel: ${expected.toFixed(2)} L\n`;

    text += wasted > 0
        ? `Wasted Fuel: ${wasted.toFixed(2)} L`
        : "Efficient usage";

    print(text);
}

// -----------------------------
// TREND
// -----------------------------

function analyzeTrend() {
    if (records.length < 2) return print("Not enough data.");

    let text = "=== TREND ===\n";

    for (let i = 1; i < records.length; i++) {
        let prev = records[i - 1].efficiency;
        let curr = records[i].efficiency;

        if (curr > prev) text += `Trip ${i + 1}: Improvement ↑\n`;
        else if (curr < prev) text += `Trip ${i + 1}: Decline ↓\n`;
        else text += `Trip ${i + 1}: Stable →\n`;
    }

    print(text);
}

// -----------------------------
// CLEAR EVERYTHING (NEW)
// -----------------------------

function clearEverything() {
    records = [];
    currentVehicle = null;

    // remove active highlight
    document.querySelectorAll(".vehicle").forEach(v => {
        v.classList.remove("active");
    });

    print("All data cleared.");
}