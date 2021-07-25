import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './components/Home';
import Course from './components/Course';
import Client from './components/Client';
import Courses from './components/Courses';
import Clients from './components/Clients';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={Courses} path='/Courses' />
            <Route component={Clients} path='/Clients' />
            <Route component={Course} path='/Course' />
            <Route component={Client} path='/Client' />
        </BrowserRouter>
    );
}