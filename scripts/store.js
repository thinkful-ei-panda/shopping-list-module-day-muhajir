import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return items.find(item => item.id === id);
};

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch(error) {
    `Cannot add item:
    ${error.message}.`
  }
}

function findAndToggleChecked(id) {
  const foundItem = this.findById(id);
  console.log(foundItem);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    const foundItem = findById(id);
    foundItem.name = newName;
  }
  catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  const index = items.findIndex(item => item.id === id);
  console.log(index);
  items.splice(index,1);
}

function toggleCheckedFilter() {
  items.hideCheckedItems = !items.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};