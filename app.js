


function app() {
	const doc = window.document;
	const loc = window.location;
	const history = window.history;

	let title = doc.getElementsByTagName("title");
	let links = doc.getElementsByClassName("nav link");

	let page = doc.getElementById("page");


	let routes = {
		about: "about",
		blog: "blog",
		contact: "contact",
	};

	function loadListeners(root) {
		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener("click", handleLinkClick);
		}
	}

	function handleLinkClick(e) {
		e.preventDefault();
		let href = e.target.getAttribute("href");

		let pathIndex = href.lastIndexOf("/");
		let path = href.slice(pathIndex + 1); // `+ 1` to remove the slash
		if (path === "") {
			path = "index";
		}
		let pathType = ".html";

		let base = "/";
		let route = path + pathType;
		let url = base + route;

		// let state = { key: "value" };
		// let title = " ";
		// let url = path;

		// history.pushState(state, title, url);

		console.log(path);

		switch(path) {
		case "index":
			loc.assign(url);
			break;
		case "about":
			loc.assign(url);
			break;
		case "blog":
			loc.assign(url);
			break;
		case "contact":
			loc.assign(url);
			break;
		default:
			console.log("Unknown route");
			break;
		}
	}

	function getBlogPosts() {
		let base = "/";
		let route = "assets/posts/";
		let file = "five-books";
		let fileType = ".html";

		let url = base + route + file + fileType;

		getBlogPost(url, function(res) {
			let post = res.body.innerHTML;

			// console.log(page);
			// console.log(post);

			page.insertAdjacentHTML("afterbegin", post);
		});
	}

	function getBlogPost(url, callback) {
		makeRequest(url, callback);
	}

	function makeRequest(url, callback) {
		let xhr = new XMLHttpRequest();
		xhr.responseType = "document";
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				let res = xhr.response;
				if (callback) {
					callback(res);
				}
			} else if (xhr.readyState == 4 && xhr.status == 400) {
				// BAD REQUEST
			} else {
				// Other errors...
			}
		};
		
		// Check for a valid & TRUSTED url
		xhr.open("GET", url, true);
		xhr.send(null);
	}

	function setPage() {
		let href = loc.href;
		let pathIndex = href.lastIndexOf("/");
		let path = href.slice(pathIndex + 1); // `+ 1` to remove the slash
		if (path === "") {
			path = "index";
		}

		let typeIndex = path.lastIndexOf(".");
		let route = path.slice(0, typeIndex);

		console.log(route);

		switch(route) {
		case "index":
			break;
		case "about":
			break;
		case "blog":
			getBlogPosts();
			break;
		case "contact":
			break;
		default: 
			console.log("Unknown route");
		}
	}

	loadListeners(window);
	setPage();
}


window.onload = app;