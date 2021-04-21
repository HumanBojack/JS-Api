let page;
let feed = document.getElementById("feed");
// fetch("https://www.instagram.com/thehappywrist/?__a=1", {
// 	method: "GET",
// 	// mode: "no-cors"
// })
// 	.then(data => data.json())
// 	.then(data => page = data)
// 	.catch(error => console.error(error));

const buildPage = (content) => {
	return new Promise((resolve, reject) => {
		let posts = content.graphql.user.edge_owner_to_timeline_media.edges;
		posts.forEach(post => {
			feed.innerHTML += 
			`<div class="post">
				<img src="${post.node.display_url}" alt="picture">
				<p>${post.node.edge_media_to_caption.edges[0].node.text}</p>
			</div>`
		})
		resolve();
	})
}


fetch("happywrist.json")
	.then(data => data.json())
	.then(content => buildPage(content))
	.catch(error => console.error(error));



