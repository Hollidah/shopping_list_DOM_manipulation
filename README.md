# Interactive Shopping List

// Live link; https://hollidah.github.io/shopping_list_DOM_manipulation/


## Objective
Develop a webpage where users can:
- Add items to the shopping list.
- Mark items as purchased.
- Clear the shopping list.


## Features

### Array Management
- A JavaScript array is used to maintain the shopping list items, including their names and whether they are marked as purchased.

### DOM Manipulation
- Dynamically update the HTML to display shopping list items.
- Use a visually distinct style (e.g., strikethrough text or different background colors) to indicate purchased items.

### Event Handling
- Event listeners enable users to:
  - Add items to the shopping list.
  - Mark items as purchased or unmark them.
  - Clear all items from the list.

## Files Structure

The project consists of three main files:

1. **index.html**
   - Contains the structure of the webpage, including:
     - An input field to add new items.
     - Buttons for "Add" and "Clear List" actions.
     - A container to display the shopping list.

2. **styles.css**
   - Provides styling for:
     - The shopping list container.
     - Purchased items (e.g., strikethrough text, unique background color).
     - Buttons and the overall layout.

3. **script.js**
   - Contains all JavaScript logic:
     - Array management.
     - DOM updates.
     - Event handling functions.


## Usage

1. **Adding Items:**
   - Enter the name of the item in the input field.
   - Click the "Add" button to add it to the shopping list.

2. **Marking Items as Purchased:**
   - Click the "Mark Purchased" button next to an item to mark it as purchased.
   - Purchased items will appear visually distinct.

3. **Unmarking Purchased Items:**
   - Click the "Unmark" button next to a purchased item to undo the purchase.

4. **Clearing the List:**
   - Click the "Clear List" button to remove all items from the shopping list.

## Code Explanation

### HTML (`index.html`)
- Provides the input field, buttons, and list container.

### CSS (`styles.css`)
- Adds styles to make the application visually appealing.
- Distinguishes purchased items using specific classes.

### JavaScript (`script.js`)
- Handles:
  - Adding new items to the array and rendering them in the DOM.
  - Toggling the purchased state of items.
  - Clearing the entire list.
 
  - Author: Holliah Chemutai

