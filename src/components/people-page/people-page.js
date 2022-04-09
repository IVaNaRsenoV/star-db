import React, { Component } from 'react';
import PersonDetails from '../person-details';
import Person from '../person';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import './people-page.css';


class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}



const Row = ({ left, right }) => {
    return (
        <div className='update__name'>
            {left}
            <div className='person__parent'>
                {right}
            </div>
        </div>
    )
}

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 15,
        hasError: false,
    }
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const { getData } = this.props;

        if ( this.state.hasError ) {
            return <ErrorIndicator />
        }

        const personDetails = (
            <PersonDetails
                onItemSelected = { this.onPersonSelected } getData = { getData }
                renderItem = { ({ name, gender }) => `${name}, ${gender}` }>
                { (i) => (`${i.name} (${i.gender})`) }
            </PersonDetails>
        );

        const person = (
            <Person
                path={this.props.path}
                personId={this.state.selectedPerson}
                getData={getData}
                getElement={this.props.getElement}
            />
        );

        console.log(this.props, ' people-page.js this.props');

        return (
            <div className='update__name'>
                <ErrorBoundry>
                    <Row left={personDetails} right={person} />
                </ErrorBoundry>
                <ErrorButton />
            </div>
        )
    }
}