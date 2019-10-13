import React from 'react'
import Button from 'react-bootstrap/Button'
import { render } from 'react-dom'
import App from './MyApp'
import AppTitle from './AppTitle'
import * as data from '/Users/Maya/studia/trzecirok/react/Lab1/example.json'
import 'bootstrap/dist/css/bootstrap.css';


render(<App />, document.getElementById('reactinjectedhere'))
render(<AppTitle />, document.getElementById('lab1ex1'))


const generateArray = (n) => ( Array.from(Array.from(Array(n+1).keys()).filter((x)=>(x>0))))

const generateRandomArray = (n) => (Array.from({length: n},()=>1+Math.floor(Math.random()*25)))

const squareArray = (array) => (array.map(x=>{return <li>{Math.pow(x,2)}</li>}))

class Students extends React.Component{
    click1(){
        return(
            <div>
                {data.map((detail,index)=>{
                    return <div>
                        <p>{detail.teacherName}</p>
                    </div>
                })}
            </div>
        )
    }
    render(){
        return(
            <div>
                <h3>Lab1 Ex7</h3>
                <Button variant="success" block>All students</Button>
                <Button variant="light" block>Sort students</Button>
                <Button variant="dark" block>Old students</Button>
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


