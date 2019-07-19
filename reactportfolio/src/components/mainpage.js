import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../me.jpg'; 

class MainPage extends Component{
    render(){
        return(
           <div style = {{width: '100%', margin: 'auto'}}>
            <Grid className = "mainpage-grid">
                <Cell col ={12}>
                    <img
                        src = {Me}
                        alt = "logo"
                        className = "logo-img"
                    />

                    <div className = "banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Javascript | Bootstrap | NodeJS | Express | mySql | MongoDB | React</p>
                        <div className = "social-links">

                            {/* GitHub */}
                            <a href="https://github.com/coachO88" rel="noopener noreferrer" target="_blank">
                                <i className = "fa fa-github-square" aria-hidden="true"/>
                            </a>

                             {/* LinkedIn */}
                             <a href="https://www.linkedin.com/in/orlando-rangel-809849b8/" rel="noopener noreferrer" target="_blank">
                                <i className = "fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* StackOverflow */}
                            <a href="https://stackoverflow.com/users/10898171/orlando-rangel?tab=profile" rel="noopener noreferrer" target="_blank">
                                <i className = "fa fa-stack-overflow" aria-hidden="true"/>
                            </a>

                        </div>
                    </div>

                    
                </Cell>
            </Grid>
           </div>
        )
    }
}

export default MainPage;