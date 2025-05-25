// assignment_LA5.js
// Queueing System using hash table

// This function changes name to a number using letters
function simpleHash(name, tableSize) {
    let hash = 0; // Start with 0
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i); // Add the code of each letter
    }
    return hash % tableSize; // Make sure number fits in table
}

let tableSize = 10; // Size of hash table
let hashTable = new Array(tableSize).fill(null); // Empty table
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"]; // List of names
let keys = []; // Store positions in table

// Add each customer to the hash table
customers.forEach((name, i) => {
    let index = simpleHash(name, tableSize); // Get number from name
    while (hashTable[index] !== null) {
        index = (index + 1) % tableSize; // Move to next if full (linear probing)
    }
    hashTable[index] = name; // Put name in table
    keys.push(index); // Remember the position
    console.log(`${name} is hashed to index ${index} (Number: ${keys.length})`); // Show info
});

// Keep asking for number to service while table is not empty
while (keys.length > 0) {
    // Ask for number to service
    let number = parseInt(prompt(`Enter number (1-${keys.length}) to service:`));

    // If number is not valid
    if (isNaN(number) || number < 1 || number > keys.length) {
        alert("Invalid number. Try again."); // Show error
        continue; // Try again
    }

    let index = keys[number - 1]; // Get position from keys
    let customerName = hashTable[index]; // Get name from table
    alert(`Now servicing: ${customerName}`); // Show name

    hashTable[index] = null; // Remove name from table
    keys.splice(number - 1, 1); // Remove from keys

    // Show updated table
    console.log("Updated Hash Table:");
    hashTable.forEach((val, i) => {
        console.log(`${i}: ${val}`);
    });
}

// All done
alert("All customers have been serviced.");
