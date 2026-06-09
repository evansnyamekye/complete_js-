const itemForm = document.getElementById('item-form');

// I will write a function and add a validation
function addItem(e) {
  e.preventDefault();

  // validate and prompt A USER

  if (addItem.value === '') {
    alert('Please add an Item');
  }
}

itemForm.addEventListener('submit', addItem);