import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
    if (this.state.activeTab === 0){
        return(
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}} >
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                   React Project #1 
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
        </div>
        )
    } else if (this.state.activeTab === 1){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}} >
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                   React Project #1 
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
        </div>
        )
    } else if (this.state.activeTab === 2){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}} >
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                   React Project #1 
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
        </div>
        )
    } else if (this.state.activeTab === 3){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}} >
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                   React Project #1 
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
        </div>
        )
    } 
}
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Buzzsuite</Tab>
                    <Tab>EatDaBurgerApp</Tab>
                    <Tab>UGetDaGif</Tab>
                    <Tab>Trivia Game</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;