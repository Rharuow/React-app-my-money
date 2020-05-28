import React, { Component } from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DashboardWithRedux from '../dashboard/dashboard'
import DashboardWithoutRedux from '../dahsboardWithoutRedux/dashboard'
import BillingCycles from '../billingCycles/billingCycles'
import { connect } from 'react-redux'

class Routers extends Component {
    render() {
        return(
            <Router history={hashHistory}>
                <Route path="/" component={ DashboardWithRedux }/>
                <Route path="/without-redux" component={ DashboardWithoutRedux }/>
                <Route path="/billingCycles" component={BillingCycles}/>
                <Redirect from="*" to="/"/>
            </Router>
        )
    }
}

const mapStateToProps = state => ({ version: state.dashboard.version })

export default connect(mapStateToProps)(Routers)