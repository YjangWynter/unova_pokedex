import React,{Component, useEffect, useState} from 'react';
import Pokemon from '../Pokemon'



export default class PokeDex extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: {}
            }
        }
       
    
    componentDidMount(){
       Pokemon().then(data => this.setState({data}))
    }
    render(){
        return(
            <>
            <h1>Unova Pokedex</h1>
            <img src={this.state.data.picture}/>
            <h2>{this.state.data.name}</h2>
            <h3>Type: {this.state.data.types}</h3>
            <h4>Details</h4>
            <ul>
                <li>Height: {this.state.data.height}ft</li>
                <li>Weight: {this.state.data.weight}lbs</li>

            </ul>
            <h4>{this.state.data.name} used {this.state.data.randomMove}!</h4>
            </>
        )
        /*
        if (Pokemon.state === 'fulfilled'){
            return <div>{Pokemon}</div>
        }
        */
          
    }
}