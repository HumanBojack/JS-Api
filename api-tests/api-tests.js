const fetch = require("node-fetch");

fetch("https://geek-jokes.sameerkumar.website/api?format=json")
	.then(code => code.json())
	.then(code => console.log(code));

// fetch("https://geek-jokes.sameerkumar.website/api?format=json")
// 	.then(code => console.log(code));