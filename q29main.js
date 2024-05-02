// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
var favoriteFruits = ["Banana", "Mango", "Cherry"];
if (favoriteFruits.includes("Mangoes")) {
    console.log("You really like mangoes!");
}
if (favoriteFruits.includes("Banana")) {
    console.log("You really like Banana!");
}
if (favoriteFruits.includes("Orange")) {
    console.log("You really like Orange!");
}
else {
    console.log("Orange is not in your favorite fruits list.");
}
if (favoriteFruits.includes("Cherry")) {
    console.log("You really like Cherry!");
}
if (favoriteFruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
else {
    console.log("Grapes are not in your favorite fruits list.");
}
