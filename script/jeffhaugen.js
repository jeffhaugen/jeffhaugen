
// function main() {
// 	console.log('hello, jeff')


// 	let post = new File(["test"], "../posts/test.html")
// 	console.log(post)
// }

function onToggleClick(e) {
	let post = this.parentElement

	let button = this.getElementsByClassName("post-toggle button")[0]
	let status = button.getAttribute("value")

	let title    = post.getElementsByClassName("post-title")[0]
	let subtitle = post.getElementsByClassName("post-subtitle")[0]
	let date     = post.getElementsByClassName("post-date")[0]
	let content  = post.getElementsByClassName("post-content box")[0]

	switch (status) {
		case "open":
			// title.classList.add("closed")
			// subtitle.classList.add("closed")
			// date.classList.add("closed")
			// content.classList.add("closed")

			// title.classList.remove("open")
			// subtitle.classList.remove("open")
			// date.classList.remove("open")
			// content.classList.remove("open")

			post.classList.add("closed")

			button.innerHTML = "&#9660;"
			button.setAttribute("value", "closed")
			break

		case "closed":
			// title.classList.add("open")
			// subtitle.classList.add("open")
			// date.classList.add("open")
			// content.classList.add("open")

			// title.classList.remove("closed")
			// subtitle.classList.remove("closed")
			// date.classList.remove("closed")
			// content.classList.remove("closed")

			post.classList.remove("closed")

			button.innerHTML = "&#9650;"
			button.setAttribute("value", "open")
			break

		default: 
			console.log("Something went wrong...")
	}
	
}



function main() {
	let postToggleButtons = document.getElementsByClassName("post-toggle box")

	for (index = 0; index < postToggleButtons.length; index++) {
		postToggleButtons[index].addEventListener("click", onToggleClick, false)
	}
}

window.onload = main