import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class References extends Component{
    render() {
        return(
           <Grid>
               <Cell col={4}>
                   <h4>{this.props.name}</h4>
                   <p>{this.props.occupation}</p>
                   <p>{this.props.company}</p>
                   <p>{this.props.address}</p>
                   <p>{this.props.cityAndState}</p>
                   <p>{this.props.number}</p>
                   <p>{this.props.email}</p>
               </Cell>
               
               <Cell col={4}>
                   <h4>{this.props.name2}</h4>
                   <p>{this.props.occupation2}</p>
                   <p>{this.props.company2}</p>
                   <p>{this.props.address2}</p>
                   <p>{this.props.cityAndState2}</p>
                   <p>{this.props.number2}</p>
                   <p>{this.props.email2}</p>
               </Cell>

               <Cell col={4}>
                   <h4>{this.props.name3}</h4>
                   <p>{this.props.occupation3}</p>
                   <p>{this.props.company3}</p>
                   <p>{this.props.address3}</p>
                   <p>{this.props.cityAndState3}</p>
                   <p>{this.props.number3}</p>
                   <p>{this.props.email3}</p>
               </Cell>

           </Grid>
        )
    }
}

export default References;