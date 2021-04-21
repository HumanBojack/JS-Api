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
			<div id="map"></div>
		</ul>`

		let map = L.map('map').setView(station.coordonnees_geo, 18);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		    maxZoom: 18
		}).addTo(map);
		L.marker(station.coordonnees_geo).addTo(map);
}

updatePage()
setInterval(updatePage, 60 * 1000)
