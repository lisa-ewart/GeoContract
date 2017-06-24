import React, { Component } from 'react';
import Router, { Route, Link } from '../router/Router';
import Gmaps from './Gmaps';
import SideBar from './SideBar';

export default class App extends Component {

    render() {
        console.log('APP PROPS', this.props)
        const {currentRoute} = this.props;
        // console.log(currentRoute)
        return (<div>
            <Link route="/create" {...this.props}>New Alarm</Link>

            <br />
            <br />

            <Router currentRoute={currentRoute} dispatch={this.props.dispatch}>
                <Route url="/map">
                    <div style={{display: 'flex'}}>
                        <Gmaps center={this.props.data.consumer.location} {...this.props} />
                        <SideBar
                            electricians={this.props.data.serviceProviders.electricians}
                            plumbers={this.props.data.serviceProviders.plumbers}
                        />
                    </div>
                </Route>
                <Route url="/list">
                    <h1>Here</h1>
                </Route>
            </Router>
        </div>);
    }
}
