function findStudentById(students, id) {
  // Your code here

  //option 1 : Binary Search

  // let result = null;
  // let left = 0;
  // let right = students.length - 1;
  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2);
  //   let midVal = students[mid];
  //   if (id == midVal.id) {
  //     result = midVal;
  //     return result;
  //   } else if (midVal.id < id) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }
  // return result;

  //option 2 : linear Search
  let result = null;
  for(let i = 0 ; i <= students.length - 1 ; i++){
    if(students[i].id == id){
      result = students[i]
    }
  }
  return result;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 3));
console.log(findStudentById(students, 1));
console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
