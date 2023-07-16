function removeElement(array, item) {
  return array.filter(element => element !== item);
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

const newArray = removeElement(array, 5);
console.log(newArray);