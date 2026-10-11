// Date and time
let d = new Date();
console.log(d.toString()); 
console.log(d.toLocaleString()); // Full date and time
console.log(d.toDateString()); // Date only
console.log(d.toTimeString()); // Time only
let timestamp=d.getTime(); // Get timestamp
console.log(timestamp);
console.log(new Date(timestamp).getMonth()); // This will correctly display the month

// Get the current year, month, and day
let year = d.getFullYear();
let month = d.getMonth() + 1; // Months are zero-based, so we add 1
let day = d.getDate();
console.log(`Current Year: ${year}, Month: ${month}, Day: ${day}`);

// Get the current hour, minute, and second
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
console.log(`Current Time: ${hour}:${minute}:${second}`);   
