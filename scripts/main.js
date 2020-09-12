function addToList() {
	if(numItems >= 6) {
		alert('Maximum capacity reached, please delete an item');
		return;
	}

	if(listInput.value === "") {
		listInput.value = '';
		alert('Can not add an empty string to the list');
		return;
	}
	let newItem = document.createElement("li");
	let newValue = document.createTextNode(listInput.value);
	newItem.appendChild(newValue);
	theList.appendChild(newItem);
	listInput.value = '';
	listInput.focus();
	numItems++;
}

function removeFirstItem() {
	if(numItems == 0) {
		listInput.value = '';
		alert('Can not delete from an empty list, please add an item');
		listInput.focus();
		return;
	}

	theList.removeChild(theList.firstElementChild);
	numItems--;
	listInput.focus();
}

function removeLastItem() {
	if(numItems == 0) {
		listInput.value = '';
		alert('Can not delete from an empty list, please add an item');
		listInput.focus();
		return;
	}

	theList.removeChild(theList.lastElementChild);
	numItems--;
	listInput.focus();
}

let numItems = 0;
let theList = document.querySelector('.list');
let listInput = document.querySelector('.input');
let addButton = document.querySelector('.addButton');
let deleteFirstButton = document.querySelector('.deleteFirstButton');
let deleteLastButton = document.querySelector('.deleteLastButton');

addButton.addEventListener('click', addToList);
deleteFirstButton.addEventListener('click', removeFirstItem);
deleteLastButton.addEventListener('click', removeLastItem);