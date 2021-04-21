
const fetchApi = () => {
	return fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=100&refine.name=Gare+du+Nord+-+Dunkerque")
		.then(data => data.json());
}


async function updatePage(){
	let results = await fetchApi();
	let feed = document.getElementById('feed');
	let station = results.records[0].fields;

	feed.innerHTML = 
	`<ul class="infos">
			<li>${station.name}</li>
			<li>${station.ebike} ebikes available</li>
			<li>${station.mechanical} regular bikes available</li>
			<li>Location: ${station.coordonnees_geo[0]} ${station.coordonnees_geo[1]}</li>
		</ul>`
}

updatePage()
setInterval(updatePage, 60 * 1000)
