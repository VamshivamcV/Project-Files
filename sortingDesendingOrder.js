//2. Perform sorting of an array in descending order.

function arrSort(arr) { 
    arr.sort((a,b)=>b-a); 
    return arr; 
} 
const arr = [54,23,12,97,100]; 
console.log(arrSort(arr));
