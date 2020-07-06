export function SelectionSort(oldArray){
    var temp = 0;
    var min = 1000;
    var minIndex = 0;
    var animations = {
        comparison: [],
        swap: []
    };
    var array = oldArray.slice();
    for(let i=0; i<array.length; i++){
        min = array[i];
        minIndex = i;
        for(let j=i+1; j<array.length;j++){
            animations.comparison.push([i,j]);
            animations.swap.push([-1,-1,-1,-1]);
            if(array[j] < min){ 
                min = array[j];
                minIndex = j;
            }
        }
        if(minIndex!=i){ 
            animations.swap.pop();
            temp = array[minIndex];
            array[minIndex]=array[i];
            array[i]=temp;
            animations.swap.push([i,minIndex,array[i],array[minIndex]])
        }
        // else animations.swap.pop()
    }
    console.log(array)
    return animations;
}