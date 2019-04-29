function zipList(arrayOne, arrayTwo){
  let newArray =[];
  let i = 0;
  while(i<=arrayTwo.length-1){
    newArray.push(arrayOne[i]);
    newArray.push(arrayTwo[i]);
    i++;
  }
  return newArray;
}
let arrOne = [1, 2, 3];
let arrTwo = ['a', 'b', 'c'];

console.log(zipList(arrOne, arrTwo));

function zipListTheSimpleWay(arrayOne, arrayTwo){
  let zipArrays = _.zip(arrayOne, arrayTwo);
  return _.flatten(zipArrays);
}

console.log(zipListTheSimpleWay(arrOne, arrTwo));