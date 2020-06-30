import React, { Component } from 'react';
import * as BubbleSort from './bubbleSort';
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

    bubbleSort(){
        const animations = BubbleSort.Bubblesort(this.state.array);
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
              }, i * 100);
            const [swapOneIdx, swapTwoIdx, bigHeight, smallHeight] = newAnimationsSwap[i]
            if(swapOneIdx != swapTwoIdx){
                setTimeout( () => { 
                barTwoStyle.height = smallHeight +'px';
                barOneStyle.height = bigHeight+'px';
                arrayBars[swapOneIdx].style.backgroundColor = "blue"
                arrayBars[swapTwoIdx].style.backgroundColor = "blue";

                }, (i+1)*100);
            }
            else{
                setTimeout(()=>{
                    barOneStyle.backgroundColor = "blue";
                    barTwoStyle.backgroundColor = "blue";
                }, (i+1)*100);
            }
        }
    }

    insertionSort(){

    }

    selectionSort(){

    }

    quickSort(){

    }

    mergeSort(){

    }

    resetArray = () => {
        const array = [];
        for(let i=0;i<50; i++){
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
               <button onClick = {() => this.resetArray()}>Generate new Array</button>
               <button onClick = {() => this.bubbleSort()}>Bubble Sort</button>
               <button onClick = {() => this.insertionSort()}>Insertion Sort</button>
               <button onClick = {() => this.selectionSort()}>Selection Sort</button>
               <button onClick = {() => this.quickSort()}>Quick Sort</button>
               <button onClick = {() => this.mergeSort()}>Merge Sort</button>
            </div>
            </div>
        );
    }
}

function randomNumberFromInterval(min, max){
    return Math.floor(Math.random()* (max-min+1) + min);
}


