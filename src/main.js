import React from 'react'
import { render } from 'react-dom'
import App from './MyApp'
import AppTitle from './AppTitle'

render(<App />, document.getElementById('reactinjectedhere'))
render(<AppTitle />, document.getElementById('lab1ex1'))

const generateArray = (n) => ( Array.from(Array.from(Array(n+1).keys()).filter((x)=>(x>0))))

const generateRandomArray = (n) => (Array.from({length: n},()=>1+Math.floor(Math.random()*25)))
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class Appp extends React.Component{
    
    render(){

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
            </div>
            
        );
    }
}




render(<Appp/>,document.getElementById('largerthan15'))