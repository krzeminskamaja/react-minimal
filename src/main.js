import React from 'react'
import Button from 'react-bootstrap/Button'
import { render } from 'react-dom'
import App from './MyApp'
import AppTitle from './AppTitle'
//import * as data from '/Users/Maya/studia/trzecirok/react/Lab1/example.json'
import 'bootstrap/dist/css/bootstrap.css';


render(<App />, document.getElementById('reactinjectedhere'))
render(<AppTitle />, document.getElementById('lab1ex1'))

//.filter((x)=>(x>n-1))
const generateArray = (n) => ( Array.from(Array.from(Array(n+1).keys()).filter((x)=>(x>0))))
const generateArrayLab2 = (m) => ( Array.from({length: m},(x)=>x=x.keys))
const generateRandomArray = (n) => (Array.from({length: n},()=>1+Math.floor(Math.random()*25)))

const squareArray = (array) => (array.map(x=>{return <li>{Math.pow(x,2)}</li>}))

class Students extends React.Component{
    constructor(props){
        super(props);
        this.updateNumber1 = this.updateNumber1.bind(this);
        this.updateNumber2 = this.updateNumber2.bind(this);
        this.createArray = this.createArray.bind(this);
        this.state = {
            input1: 0,
            input2: 0,
            array: []
        }
    }
    click1(){
        return(
            <div>
                
            </div>
        )
    }
    createArray(){
        if(this.state.input1  > this.state.input2 || this.state.input1 < 0 )
        {
            console.log("Wrong input");
            return;
        }
        this.setState({array: new Array(this.state.input2-this.state.input1+1).fill(0).map((val,idx) => val = parseInt(this.state.input1) + idx)});
    }
    updateNumber1 = (e) =>{
        // If the current value passes the validity test then apply that to state
        if (e.target.validity.valid ){ 

            this.setState({input1: e.target.value})
            console.log(e.target.value)
            console.log(this.state.input2)
            this.createArray()
        }
        else console.log("Not a number")
      }
      updateNumber2 = (e) => {
        if (e.target.validity.valid){ 
            this.setState({input2: e.target.value})
            console.log(e.target.value)
            this.createArray()
        }
        else console.log('Not a number')
      }
    render(){
        return(
            <div>
                <h3>Lab1 Ex7</h3>
                <Button variant="success" block>All students</Button>
                <Button variant="light" block>Sort students</Button>
                <Button variant="dark" block>Old students</Button>
                <h5>Lab2</h5>
                <input onChange = {this.updateNumber1} name="input1" type="number" value = {this.state.input1}></input>
                <input onChange = {this.updateNumber2} name="input2" type="number"  value = {this.state.input2}></input>
                <div>
                    {this.state.array.toString()}
                    
                </div>
            </div>
        );
    }
}

class Appp extends React.Component{
    
    render(){
        const array2 = [2,5,8,10];
        const array = [2,56,23,88,17,4];
        const filtered=array.filter(x=>x>15);
        return(
            <div>
                <h3>Lab1 Ex2</h3>
                <ul>
                {generateArray(6).map(x=>{
                        return <li>{x}</li>;
                    })} 
                </ul>
                <h3>Lab1 Ex3</h3>
                <ul>
                {generateRandomArray(6).map(x=>{
                        return <li>{x}</li>;
                    })} 
                </ul>
                <h3>Lab1 Ex4</h3>
                <ul>
                    {filtered.map(x=>{
                        return <li>{x}</li>;
                    })}
                </ul>
                <h3>Lab1 Ex5</h3>
                <ul>
                    {squareArray(array2)}
                </ul>
                
            </div>
            
        );
    }
}
render(<Appp/>,document.getElementById('largerthan15'))
render(<Students/>,document.getElementById('students'))


