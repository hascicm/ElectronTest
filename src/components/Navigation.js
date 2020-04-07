import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import FileContent from './FileContent'
import FileSelection from './FileSelection'

import { createHashHistory } from "history";

const history = createHashHistory()

class Navigation extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={FileSelection}>
                    </Route>
                    <Route path='/file' exact component={FileContent}>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default (Navigation)
