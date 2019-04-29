// we should ask for a password

var password = process.argv[2]
var goodPassword = true;

console.log("Password to be analyzed: ",password)

// - Make sure your password is long enough: 9 characters

if (password.length >= 9) {
	console.log("Password is long enough.")
} else {
	console.log("Bad Password. Not long enough.");
	goodPassword = false;
}

// - It has upper case and lower case


function passwordHasAny (fullset, password) {
	var foundSome = false;
	for (i = 0; i < password.length; i++) {
		if (fullset.includes(password[i])) {
			foundSome = true;
		}
	}
	return foundSome;
}

var upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";

if (passwordHasAny(upperCaseLetters,password)) {
	console.log("Found Uppercase letters.")
} else {
	console.log("No uppercase letters!!!!")
	goodPassword = false;
}

// - it has special symbols

if (passwordHasAny("!@#$%^&*()",password)) {
	console.log("Found Special symbols.")
} else {
	console.log("No symbols!!!!")
	goodPassword = false;
}

// - it has numbers
if (passwordHasAny("1234567890",password)) {
	console.log("Found numbers.")
} else {
	console.log("No numbers!!!!")
	goodPassword = false;
}
// - not common words (i.e. NOT "password")

if (password.includes("password")) {
	goodPassword = false
	console.log ("Never use password as a password")
}

// - if not strong enough suggest a better one.
if (!goodPassword) {
	console.log("P@ssW0rds")
}