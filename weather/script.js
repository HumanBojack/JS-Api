// I will not push my api key on github, so, if you want to use this, you will need to provide
// yours. You can create a free account on weatherbit.io for that

const API_KEY = "YOUR_API_KEY"
const fetchApi = (city) => {
	return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=${city}`)
		.then(data => data.json())
		.catch(error => console.error(error));
}


async function updatePage(){
	event.preventDefault();
	let feed = document.getElementById('feed');
	let title = document.getElementsByTagName('h1')[0];
	let city = document.getElementById("search").value;
	let results = await fetchApi(city);

	title.innerHTML = results.city_name;
	feed.innerHTML = "";

	results.data.forEach((day, id) => {
		feed.innerHTML += 
		`<div class="day">
			<p>Date: ${day.datetime}</p>
			<p>Temperature ${day.temp}C</p>
			<img src="icons/${day.weather.icon}.png" alt="">
		</div>`

	})
	
}

let submitButton = document.querySelector(".header input[type='submit']");
submitButton.addEventListener("click", updatePage);
