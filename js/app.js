rightMenu.onclick = () => {
	rightMenu.classList.toggle("height-100");
	rightMenuLinks.classList.toggle("translate");
	menuArrow.classList.toggle("bottom");
	menuButton.classList.toggle("below");
};

mitBox.onclick = () => {
	mitBox.classList.toggle("open");
	mitArrow.classList.toggle("upside-down");

	mitLinks.classList.toggle("translate");
};

aboutBox.onclick = () => {
	aboutBox.classList.toggle("open");
	aboutArrow.classList.toggle("upside-down");
	aboutContent.classList.toggle("translate");
};

leftHeader.onclick = () => {
	pageContainer.classList.toggle("invert");
};
