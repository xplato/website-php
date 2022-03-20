const colors = [
	'hacker-green',
	'rose',
	'pink',
	'fuchsia',
	'purple',
	'violet',
	'indigo',
	'blue',
	'sky',
	'cyan',
	'teal',
	'emerald',
	'green',
	'lime',
	'yellow',
	'amber',
	'orange',
	'red',
	'white',
];

const removeAllColors = () => {
	const body = document.querySelector('body');

	colors.forEach(color => {
		if (body.classList.contains(color)) body.classList.remove(color);
	});
}

const handleThemeSelect = () => {
	document.querySelector('.theme-color-select').addEventListener('change', (ev) => {
		const color = ev.target.value.toLowerCase();
		removeAllColors();
		localStorage.setItem('theme-color', color);
		setThemeColor(color);
	});
}

const setThemeColor = (color) => {
	document.querySelector('body').classList.add(color);
}

const main = () => {
	// Let's start by checking if the user has set
	// a specific theme color. If so, set the body
	// class right away.
	const color = localStorage.getItem('theme-color') || 'hacker-green';
	setThemeColor(color);

	// Set the value of the <select> element
	document.querySelector('.theme-color-select').value = color;

}

main();
handleThemeSelect();