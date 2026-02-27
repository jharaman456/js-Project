//Declare an empty inventory array
let inventory = [];

//function to find product index by name
function findProductIndex(productName) {
  return inventory.findIndex(item => item.name === productName.toLowerCase());
}

//function to add a product
function addProduct(product){
  let index = findProductIndex(product.name);
  let productName = product.name.toLowerCase();

  if(index != -1){
    //product exists, update quantity
    inventory[index].quantity += product.quantity;
    console.log(productName + " quantity updated");
  } else {
    //product not in inventory, add new
    inventory.push({name: productName, quantity: product.quantity });
    console.log(productName + " added to inventory");
  }
}

//Function to remove a product
function removeProduct(productName, quantity) {
  let index = findProductIndex(productName);
  let name = productName.toLowerCase();

  if (index === -1) {
    console.log(name + " not found");
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      "Not enough " + name + " available, remaining pieces: " + inventory[index].quantity
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log("Remaining " + name + " pieces: " + inventory[index].quantity);
  }
}


//test cases
console.log(removeProduct("FLOUR", 10));
