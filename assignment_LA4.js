// assignment_LA4.js
// Queueing System using array

let queue = []; // This will store the names of the customers

// These are the 5 customers to add first
let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add each customer to the queue
for (let i = 0; i < initialCustomers.length; i++) {
    queue.push(initialCustomers[i]); // Add name to queue
    console.log(`${initialCustomers[i]} is added to the queue. Position: ${i + 1}`); // Show name and position
}

// Keep asking for number to service while queue is not empty
while (queue.length > 0) {
    // Show current queue and ask for number
    let number = parseInt(prompt(`Queue:\n${queue.map((name, index) => (index + 1) + ". " + name).join("\n")}\nEnter number to service:`));

    // If number is not valid
    if (isNaN(number) || number < 1 || number > queue.length) {
        alert("Invalid number. Try again."); // Show error
        continue; // Go back to the start of the loop
    }

    // Get customer name using the number
    let customerName = queue[number - 1];
    alert(`Now servicing: ${customerName}`); // Show who is being served

    queue.splice(number - 1, 1); // Remove customer from the queue

    // Show the new queue
    console.log("Updated Queue:");
    queue.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

// If no more customers
alert("All customers have been serviced.");
