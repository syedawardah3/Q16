// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Original guest list
let guests: string[] = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];

// Add one new guest to the beginning of the list
guests.unshift('Isaac Newton');

// Add one new guest to the middle of the list
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Galileo Galilei');

// Use push() to add one new guest to the end of the list
guests.push('Stephen Hawking');

// Print statement informing about the bigger dinner table
console.log("Good news everyone! We've found a bigger dinner table.");

// Print a new set of invitation messages
for (let person of guests) {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
}
