//Finding Largest
function findLargest(numbers){

    let largest = numbers [0];
for (let i=0; i<numbers.length; i++){
        if (numbers [i] > largest) {
                largest = numbers[i];
        }
        
}
return largest;
}

console.log(findLargest([3,17,8,22,5]));



//Finding smallest

function findSmallest(numbers){
    let smallest = numbers [0];
    for (let i=0; i<numbers.length; i++){

        if (numbers[i] < smallest){
            smallest = numbers[i];
        }
    }
    return smallest;
}

console.log(findSmallest([3,17,8,22,5]));