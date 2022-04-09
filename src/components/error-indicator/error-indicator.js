import React, { Component } from 'react';
import './error-indicator.css';

export default class ErrorIndicator extends Component {
    render () {
        return (
            <div className = 'error-indicator'>
                <div>
                <span className = 'boom'>BOOM!</span>
                </div>
                <span>
                    something has gone terribly wrong
                </span>
                <span>
                    (but we already sent droids to fix it)
                </span>
            </div>
        )
    }
}