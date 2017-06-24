import React, { Component } from 'react';
import Router, { Route, Link } from '../router/Router';
import Gmaps from './Gmaps';

export default class App extends Component {
    render() {
        const {currentRoute} = this.props;
        console.log(currentRoute)
        return (<div>
            <Link route="/create" {...this.props}>New Alarm</Link>

            <br />
            <br />

            <Router currentRoute={currentRoute} dispatch={this.props.dispatch}>
                <Route url="/map">
                    <div style={{width: '100%', height: '500px'}}>
                        <Gmaps center={this.props.data.consumer.location} {...this.props} />
                    </div>
                </Route>
                <Route url="/list">
                    <h1>Here</h1>
                </Route>
            </Router>
        </div>);
    }
}
