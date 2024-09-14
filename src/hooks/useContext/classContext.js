import React, { Component } from 'react';
import {ThemeContext} from './index.js'


export default class ClassContext extends Component {
    
  render() {
    console.log("classcontext--------",ThemeContext)
    return (
        <ThemeContext.Consumer>
            {
                (dark)=>{
                    return (
                        <div style={{background:dark?"black":"purple"}}>
                            <p>ClassContext</p>
                        </div>
                    )
                }
            }

        </ThemeContext.Consumer>
     
    )
  }
}
