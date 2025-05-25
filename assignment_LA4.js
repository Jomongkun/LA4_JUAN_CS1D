// assignment_LA4.js
// Simple Queueing System using Array for Customer Service

let queue = []; // Array acting as a queue
let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add initial customers to the queue
for (let i = 0; i < initialCustomers.length; i++) {
    queue.push(initialCustomers[i]);
    console.log(`${initialCustomers[i]} is added to the queue. Position: ${i + 1}`);
}

// Allow customer service rep to process customers
while (queue.length > 0) {
    let number = parseInt(prompt(`Queue:\n${queue.map((name, index) => (index + 1) + ". " + name).join("\n")}\nEnter number to service:`));

    if (isNaN(number) || number < 1 || number > queue.length) {
        alert("Invalid number. Try again.");
        continue;
    }

    let customerName = queue[number - 1];
    alert(`Now servicing: ${customerName}`);
    queue.splice(number - 1, 1); // Remove serviced customer

    console.log("Updated Queue:");
    queue.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

alert("All customers have been serviced.");
