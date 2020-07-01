export  function InsertionSort(oldArray){
    const inputArray = oldArray.slice();
    var animations = {
        comparison: [],
        swap: []
    };
    var key=0;
    for(var i=1; i<inputArray.length; i++){
        key = inputArray[i];
        let j = i-1;
        while(j>=0 && inputArray[j]>key){
            animations.comparison.push([j,j+1]);
            animations.swap.push([j,j+1,inputArray[j+1], inputArray[j]]);
            let temp = inputArray[j+1];
            inputArray[j+1] = inputArray[j];
            inputArray[j] = temp;
            j--;
        }
        // inputArray[j+1] = key;
    }
    return animations;
}