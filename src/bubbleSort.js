export function Bubblesort(oldArray){
    var temp=0;
    var array = oldArray.slice();
    var animations = {
        comparison: [],
        swap: []
    };
    for(var round=0; round<array.length-1; round++){
        for(var i=0; i<array.length-round-1; i++){
            animations.comparison.push([i,i+1]);
            animations.swap.push([i,i,array[i], array[i]]);
            if(array[i]>array[i+1]){
                    animations.swap.pop();
                    animations.swap.push([i,i+1,array[i+1], array[i]]);
                    temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
        
            }
        }
    }
    return animations;
}

