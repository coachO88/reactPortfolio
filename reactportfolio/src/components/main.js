import React from 'react';
import MainPage from './mainpage';
import Resume from './resume';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import { Switch , Route } from 'react-router-dom';




const Main = () => (
    <Switch>
        <Route exact path = "/" component = {MainPage} />
        <Route path = "/aboutme" component = {AboutMe} />
        <Route path = "/resume" component = {Resume} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/projects" component = {Projects} />
    </Switch>
);

export default Main;