var f = ["Apple","Banana","Orange","Grape","Strawberry"];

//Add two more types of fruit to the beginning of the array.
f.unshift("Cane","Pineapple");
console.log(f);

//Delete last element from the array.
f.pop()
console.log(f);

//Add two more to the end of the array
f.push("Pitaya","litchi")
console.log(f);

//Now you have array with 8 elements - delete element 3 and 4, and replace them with other 2 elements
f.splice(3,1,"Replace1");
f.splice(4,1,"Replace2");
console.log(f);

//Create a FOR loop that will output all elements of this array, one by one in the console
