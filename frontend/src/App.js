import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import Sidepanel from './containers/Sidepanel';
import { connect } from 'react-redux';
import Profile from './containers/Profile';
import * as actions from './store/actions/auth';
import Chat from './containers/Chat';
import "./assets/style.css";
import WebSocketInstance from "./websocket";

class App extends React.Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    constructor(props) {
        super(props);
        WebSocketInstance.addCallbacks(
          this.props.setMessages.bind(this),
          this.props.addMessage.bind(this)
        );
    }

    render() {
        return (
            <Router>
                <div id="frame">
                    <Sidepanel />
                    <div className="content">
                        <Profile />
                        <BaseRouter />
                    </div>
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}


// export default connect(null, mapDispatchToProps)(App);
export default App;

