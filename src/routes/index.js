import React from 'react'
import {Route,IndexRoute} from 'react-router'
import Template from '../container/Template'
import TicTacToe from '../container/TicTacToe'
import Profile from '../container/Profile'

const createRoutes = () => {
    return(
        <Route
         path='/'
         component={Template}
        >
         <IndexRoute 
         component = {TicTacToe}
         />
        <Route
        path='/profile'
        component={Profile}
        />
    </Route>
    )
}

const Routes = createRoutes()

export default Routes