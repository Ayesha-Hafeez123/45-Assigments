// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places to visit
var placesToVisit = ["Antarctica", "Paris", "Hunza", "Makkah", "Turkey"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Print the array to show it's still in its original order
console.log("Still in original order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Print the array to show it's still in its original order
console.log("Still in original order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to bring it back to the original order
placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);
