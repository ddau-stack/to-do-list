function addToList() {
	let newItem = document.createElement("li");
	let newValue = document.createTextNode(listInput.value);
	newItem.appendChild(newValue);
	theList.appendChild(newItem);
	listInput.focus();
}

let theList = document.querySelector('.list');
let listButton = document.querySelector('.listButton');
let listInput = document.querySelector('.input');
listButton.addEventListener('click', addToList);