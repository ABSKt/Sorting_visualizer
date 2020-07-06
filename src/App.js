import React, { Component } from 'react';
import * as BubbleSort from './bubbleSort';
import * as InsertionSort from './insertionSort';
import * as SelectionSort from './selectionSort';
import './app.css'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }
    
    componentDidMount() {
        this.resetArray();
    }

    bubbleSort = () =>{
        const animations = BubbleSort.Bubblesort(this.state.array);
        document.getElementsByClassName("button").disabled = true;
        const newAnimations = [];
        const newAnimationsSwap = [];
        for(let i=0; i<animations.comparison.length; i++){
            newAnimations.push(animations.comparison[i]);
        }
        for(let i=0;i<animations.swap.length; i++){
            newAnimationsSwap.push(animations.swap[i]);
        }
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0; i<newAnimations.length; i++){
            const [barOneIdx, barTwoIdx] = newAnimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = "red";
                barTwoStyle.backgroundColor = "red";
              }, i * 80);
            const [swapOneIdx, swapTwoIdx, bigHeight, smallHeight] = newAnimationsSwap[i]
            if(swapOneIdx != swapTwoIdx){
                setTimeout( () => { 
                barTwoStyle.height = smallHeight +'px';
                barOneStyle.height = bigHeight+'px';
                arrayBars[swapOneIdx].style.backgroundColor = "blue"
                arrayBars[swapTwoIdx].style.backgroundColor = "blue";

                }, (i+1)*80);
            }
            else{
                setTimeout(()=>{
                    barOneStyle.backgroundColor = "blue";
                    barTwoStyle.backgroundColor = "blue";
                }, (i+1)*80);
            }
        }
    }

    insertionSort(){
        const animations = InsertionSort.InsertionSort(this.state.array);
        const newAnimations =[];
        const newAnimationsSwap = [];
        for(let i=0; i<animations.comparison.length; i++){
            newAnimations.push(animations.comparison[i]);
        }
        for(let i=0;i<animations.swap.length; i++){
            newAnimationsSwap.push(animations.swap[i]);
        }
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0; i<newAnimations.length; i++){
            const [barOneIdx, barTwoIdx] = newAnimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = "red";
                barTwoStyle.backgroundColor = "red";
              }, i * 80);
            const [swapOneIdx, swapTwoIdx, bigHeight, smallHeight] = newAnimationsSwap[i]
            setTimeout( () => { 
                barTwoStyle.height = smallHeight +'px';
                barOneStyle.height = bigHeight+'px';
                arrayBars[swapOneIdx].style.backgroundColor = "blue"
                arrayBars[swapTwoIdx].style.backgroundColor = "blue";

                }, (i+1)*80);
        }
    }

    selectionSort(){
        const animations = SelectionSort.SelectionSort(this.state.array);
        const newAnimations =[];
        const newAnimationsSwap = [];
        for(let i=0; i<animations.comparison.length; i++){
            newAnimations.push(animations.comparison[i]);
        }
        for(let i=0;i<animations.swap.length; i++){
            newAnimationsSwap.push(animations.swap[i]);
        }
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0; i<newAnimations.length; i++){
            const [barOneIdx, barTwoIdx] = newAnimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const [swapOneIdx, swapTwoIdx, bigHeight, smallHeight] = newAnimationsSwap[i]
            setTimeout( () => { 
                barOneStyle.backgroundColor = "red";
                barTwoStyle.backgroundColor = "red";
            }, (i)*80);
            if(swapOneIdx != -1){
                setTimeout( () => { 
                arrayBars[swapOneIdx].style.height = bigHeight + 'px';
                arrayBars[swapTwoIdx].style.height = smallHeight + 'px';
                arrayBars[swapOneIdx].style.backgroundColor = "blue";
                arrayBars[swapTwoIdx].style.backgroundColor = "blue";
            }, (i+1)*80);
            }
            setTimeout( () => { 
                barOneStyle.backgroundColor = "blue";
                barTwoStyle.backgroundColor = "blue";
            }, (i+1)*80);

        }
        
    }

    quickSort(){

    }

    mergeSort(){

    }

    resetArray = () => {
        const array = [];
        for(let i=0;i<40; i++){
            array.push(randomNumberFromInterval(5,650));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
            <div>
            <div className="array-container">
                { array.map((value, idx) => ( 
                    <div 
                      className = "array-bar" 
                      key={idx}
                      style={{height: `${value}px`}}>
                    </div>
                ))}
            </div>
            <div className="button-container">
               <button className = "button" onClick = {() => this.resetArray() }>Generate new Array</button>
               <button className = "button" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
               <button className = "button" onClick = {() => this.insertionSort()}>Insertion Sort</button>
               <button className = "button" onClick = {() => this.selectionSort()}>Selection Sort</button>
               <button className = "button" onClick = {() => this.quickSort()}>Quick Sort</button>
               <button className = "button" onClick = {() => this.mergeSort()}>Merge Sort</button>
            </div>
            </div>
        );
    }
}

function randomNumberFromInterval(min, max){
    return Math.floor(Math.random()* (max-min+1) + min);
}


