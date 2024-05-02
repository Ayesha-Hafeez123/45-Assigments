// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function cityCountry(city, country) {
    var formattedString = "${city.toLowerCase()}, ${country.toLowerCase()}";
    return formattedString;
}
var lahorePakistan = cityCountry("Lahore", "Pakistan");
var tokyoJapan = cityCountry("Tokyo", "Japan");
var londonEngland = cityCountry("London", "England");
console.log("Lahore", "Pakistan");
console.log("Tokyo", "Japan");
console.log("London", "England");
