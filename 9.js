function findCheck(arr, target){
    for (i=0; i<arr.length; i++){
        if (arr[i] === target){
            console.log ("Found it!");
        }
        else{
            console.log ("Not found!");
        }
    }


}

findCheck(["apple","mango","banana"],"orange");