//let's create const variables
const itemForm = document.getElementById('item-form'); 
const itemInput = document.getElementById('item-input'); 
const itemList = document.getElementById('item-list'); 
const clearBtn = document.getElementById('clear'); 
const itemFilter = document.getElementById('filter');

//default 
function addItem(e){
    e.preventDefault(); 

    //declare newItem 

    const newItem = itemInput.value; 

    //add the validatation
    if (newItem === '') {
        alert('Please add an item')
        return; 
    }

    //add liost item to the DOM 
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem)); 

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button); 

    itemList.append(li); 

    checkUI(); 

    itemInput.value = ''; 

}


function createButton(classes){
    const button = document.createElement('button')
    button.classList = classes; 
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon); 
    return button; 
}

function createIcon(classes){
    const Icon = document.createElement('i'); 
    Icon.classList = classes; 
    return Icon; 
}

//write a function to remove the item from the added list
function removeItem(e){
    e.target.parentElement.classList.contains('remove-item');
    if (confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove(); 

        checkUI(); 
    }
}

//We want to clear the entire list 
function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
} 

//function to clear hard coded UI 
function checkUI(){
    const items = itemList.querySelectorAll('li'); 
   if (items. length === 0 ){     
        clearBtn.style.display = 'none'; 
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block'; 
        itemFilter.style.display = 'block'
    }

}

//add eventlistener
itemForm.addEventListener('submit', addItem); 
itemList.addEventListener('click', removeItem); 
clearBtn.addEventListener('click', clearItems)

checkUI(); 