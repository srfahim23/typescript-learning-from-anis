// built-in data type : number, string, boolean, void, undefined, null 
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Faisal";
lastName = "Sarker";
fullName = firstName.concat(lastName);
isActivated = true;
console.log("your id :".concat(userId, ", username :").concat(fullName, " ,  account status  :").concat(isActivated, "}"));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi am display");
}
display();
