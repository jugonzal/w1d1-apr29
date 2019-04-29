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

// - it has special symbols
// - it has numbers
// - not common words (i.e. NOT "password")
// - if not strong enough suggest a better one.
