// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
var guestArr = ["Amna", "Maria", "Sonia", "Bushra", "Salar", "Dawood", "Yaram"];
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
var canNotAttend = "Yaram";
console.log(canNotAttend + ' ' + "Can not make It, For Dinner");
var newGuest = "Faris";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// • Print a second set of invitation messages, one for each person who is still
// in your list.
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", You Are Cordinally Invited to a Dinner"));
});
