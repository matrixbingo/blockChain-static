import React, { Component /*,PropTypes*/} from 'react'
import { Redirect, Router, Route } from 'react-router'
import {page} from 'ea-react-dm'
import History from 'history/lib/createHashHistory'
import TestContainer from '../components/test/utils/TextAreaTest'
import Index from '../components/trade/Index'

class AppConfigRouter extends Component {

    constructor(props) {
        super(props)
        // Opt-out of persistent state, not recommended.
        this.history = new History({
            queryKey: false
        })
    }

    /**
     * 页面路由总览，children为外接做入口，外接入口即为AppRouter
     */
    render() {
        return (
            <div>
                <Router history={this.history}>
                    <Route path="/index" component={Index} />
                    <Route path="/test" component={TestContainer} />
                    <Route path="/qwe" component={TestContainer} />
                    <Redirect from="/" to="/index" />
                </Router>
            </div>
        )
    }
}

page(AppConfigRouter )