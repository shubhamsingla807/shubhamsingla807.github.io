window.onscroll = function () {
	myFunction();
	updateNavigator();
	zoomImages();
};

function myFunction() {
	let winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight,
	);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
let curr = "";

function removePrevColor() {
	let links = document.getElementById("navigator").getElementsByTagName("a");

	for (let i = 0; i < links.length; i++) {
		links[i].style.color = "black";
	}
}

function updateNavigator() {
	let links = document.getElementById("navigator").getElementsByTagName("a");
	let sections = document.getElementsByTagName("section");
	console.log(sections);
	for (let i = 0; i < sections.length; i++) {
		if (checkVisible(sections[i])) {
			removePrevColor();
			if (i == 0) {
				links[0].style.color = "blue";
			} else if (i == 1) {
				links[1].style.color = "blue";
			} else if (i == 2) {
				links[2].style.color = "blue";
			} else if (i == 3) {
				links[3].style.color = "blue";
			} else if (i == 4) {
				links[4].style.color = "blue";
			} else if (i == 5) {
				links[5].style.color = "blue";
			} else {
				links[6].style.color = "blue";
			}
		}
	}
}

function zoomImages() {
	let images = document.getElementsByTagName("img");
	for (let i = 0; i < images.length; i++) {
		images[i].addEventListener("click", () => {
			const viewer = new Viewer(images[i], {
				navbar: false,
				title: false,
				toolbar: {
					zoomIn: 4,
					zoomOut: 4,
					oneToOne: 0,
					reset: 0,
					prev: 0,
					play: {
						show: 4,
						size: "large",
					},
					next: 0,
					rotateLeft: 0,
					rotateRight: 0,
					flipHorizontal: 0,
					flipVertical: 0,
				},
			});
		});
	}
	// const gallery = new Viewer(document.querySelectorAll("img"));
}
