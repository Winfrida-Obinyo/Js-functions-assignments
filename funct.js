// Create an array containing the names of all items in the inventory.

let itemName = ["Kales","cabbage","tomatoes","onions","carrots","watermelon","pineapple"]

//Create a separate array with the corresponding stock quantities of each item.

let quantityItem = [150,30,50,100,59,60,70]

// Write a function to add a new item to the inventory, updating both arrays.
function addNewItem(item,quantity){
    itemName.push(item)
    quantityItem.push(quantity)
    }
addNewItem("Banana",67)
console.log(itemName)
console.log(quantityItem)

// Write a function to update the stock quantity of an existing item.
function updateSystem(){
quantityItem[3] = 150
console.log(`Updated ${quantityItem}`)
}
updateSystem()
console.log(quantityItem)

// Write a function to calculate the total number of items in the inventory.
function calculateTotalItems() {
    let totalItems = 0;
    for (let i = 0; i < quantityItem.length; i++) {
      totalItems += quantityItem[i];
    }
    return totalItems;
  }
  addNewItem("Banana",67)
  console.log(calculateTotalItems()) 
  
  updateSystem()
  console.log(calculateTotalItems()) 

//Write a function to find the item with the lowest stock quantity.
function findItemLowest() {
    let lowestIndex = 0;
    for (let i = 1; i < quantityItem.length; i++) {
      if (quantityItem[i] < quantityItem[lowestIndex]) {
        lowestIndex = i;
      }
    }
    return itemName[lowestIndex];
  } 
console.log(findItemLowest()); 


  
