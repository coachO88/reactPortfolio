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
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://images.theconversation.com/files/204623/original/file-20180202-162097-x4sz8w.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip) center / cover'}}>
                   Buzzsuite Project
            </CardTitle>
            <CardText>
            Buzzsuite offers advanced social media influencer analytics and tracking.
            </CardText>
            <CardActions border>
            <a href="https://github.com/coachO88/buzzsuite" rel="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
            </a>
            <a href="https://buzzsuite.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <Button colored>Live Demo</Button>
            </a>
            
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
                <CardTitle style={{color: 'black', height: '176px', background:'url(https://i.pinimg.com/originals/39/02/09/390209416648a99c65113398a78cf10a.jpg) center / cover'}}>
                   Eat Da Burger App 
                   (mySql, NodeJS, Express) 
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
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://clipartstation.com/wp-content/uploads/2018/09/cookbooks-clipart-2.jpg) center / cover'}}>
                   Cooking-Wiki(NodeJS, Express, Handlebars, MongoDB)
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
            <a href="https://github.com/coachO88/Cooking-Wiki" rel="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
            </a>
            <a href="https://cookingwiki.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <Button colored>Live Demo</Button>
            </a>
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
                <CardTitle style={{color: 'black', height: '176px', background:'url(data:image/jpeg;base64,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) center / cover'}}>
                   NFL Trivia Game (HTML/CSS)
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
            <a href="https://github.com/coachO88/triviaGame" rel="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
            </a>
            <a href="https://coacho88.github.io/triviaGame/" rel="noopener noreferrer" target="_blank">
            <Button colored>Live Demo</Button>
            </a>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
        </div>
        )
    } else if (this.state.activeTab === 4){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}} >
                <CardTitle style={{color: 'black', height: '176px', background:'url(https://image.freepik.com/free-vector/silhouette-group-friends_1048-5384.jpg) center / cover'}}>
                   Friend Finder App
            </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
            <a href="https://github.com/coachO88/friendFinder" rel="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
            </a>
            <a href="https://friendfinderorlando.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <Button colored>Live Demo</Button>
            </a>
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
                    <Tab>Cooking-Wiki</Tab>
                    <Tab>Trivia Game</Tab>
                    <Tab>Friend Finder App</Tab>
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