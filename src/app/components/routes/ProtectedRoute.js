import React from 'react';
import {Route,Redirect} from 'react-router-dom'

export const ProtectedRoute = ({component,path,isAuth}) => {
    return isAuth ? <Route component={component} path={path}/> : <Redirect to = "/"/>
}