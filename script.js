
let shoppingList = [];


const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const clearListButton = document.getElementById("clearListButton");
const shoppingListContainer = document.getElementById("shoppingList");


document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

addItemButton.addEventListener("click", addItem);
clearListButton.addEventListener("click", clearList);


function renderList() {
 
  shoppingListContainer.innerHTML = "";

  shoppingList.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = `shoppingItem ${item.purchased ? "purchased" : ""}`;
    itemElement.innerHTML = `
      <span>${item.name}</span>
      <button onclick="togglePurchased(${index})">${item.purchased ? "Unmark" : "Mark Purchased"}</button>
    `;
    shoppingListContainer.appendChild(itemElement);
  });
}

function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName) {
    shoppingList.push({ name: itemName, purchased: false });
    itemInput.value = ""; 
    renderList();
  } else {
    alert("Please enter an item name!");
  }
}

function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  renderList();
}

function clearList() {
  shoppingList = [];
  renderList();
}

// Save the shopping list to Local Storage
function saveToLocalStorage() {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

// Load the shopping list from Local Storage
function loadFromLocalStorage() {
  const storedList = localStorage.getItem("shoppingList");
  if (storedList) {
    shoppingList = JSON.parse(storedList);
    renderList();
  }
}
