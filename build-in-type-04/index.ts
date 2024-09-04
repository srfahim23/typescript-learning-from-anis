// built-in data type : number, string, boolean, void, undefined, null 

var userId : number;
var firstName: string;
var lastName: string;
var fullName: string;
var isActivated: boolean;



userId = 101;
firstName = "Faisal";
lastName = "Sarker";
fullName = firstName.concat(lastName);
isActivated = true;

console.log(`your id :${userId}, username :${fullName} ,  account status  :${isActivated}}`);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


function display() :void{
    console.log("Hi am display");
}

display();