document.getElementById("myImage").onclick = function () {
    
    // Create a new paragraph element
    let p = document.createElement("p");

    // Set text content
    p.textContent = "A car is an essential part of our life. We use the car to travel from one place to another. A car has an engine, four wheels, four doors, one boot, four windows, brakes, accelerators, headlights, etc. The car runs on various fossil fuels like petrol, diesel or CNG.";
    // Add paragraph to the div
    document.getElementById("paragraphBox").appendChild(p);
    };

    document.getElementById("myImage1").onclick = function () {
    
    // Create a new paragraph element
    let p = document.createElement("p");

    // Set text content
    p.textContent = " We use the car to travel from one place to another. A car has an engine, four wheels, four doors, one boot, four windows, brakes, accelerators, headlights, etc. The car runs on various fossil fuels like petrol, diesel or CNG.";
    // Add paragraph to the div
    document.getElementById("paragraphBox").appendChild(p);
};
