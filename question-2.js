function findProductPrice(products, name) {
  // Your code here

  // option 1 : Binary Search
  let result = -1;
  let left = 0;
  let right = products.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = products[mid];
    if (name == midVal.name) {
      result = midVal.price;
      return result;
    } else if (midVal.name < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;

  //option 2 : linear search
  // let result = -1;
  // for(let i = 0 ; i <= products.length -1 ; i++){
  //   if(products[i].name == name){
  //     result = products[i].price
  //   }
  // }
  // return result;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
