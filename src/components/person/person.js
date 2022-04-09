import React, { Component } from 'react';

import './person.css';

export default class Person extends Component  {

    state = {
        person: null,
        url: 'https://starwars-visualguide.com/assets/img'
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate( prevProps ) {
        if ( this.props.personId != prevProps.personId ) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        
        const { getElement } = this.props;
        getElement(personId)
            .then( (person) => {
                this.setState({ person });
            })
    }

    render() {
        const { path } = this.props;
        console.log(path, 'person.js this.props');
        if( !this.state.person ) {
            return <span> Select a person from a list </span>
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        console.log('person.js', this.state.person);
        return (
            <div className = 'person'>
                <div className = 'person__image'>
                    <img src = {`${this.state.url}/${path}/${id}.jpg`} alt = 'person'></img>
                </div>
                <div>
                    <div className = 'person__header'>
                        <h2>{name}</h2>
                    </div>
                    <div className = 'person__info'>
                        <ul>
                            <li>Gender male {gender}</li>
                            <li>Birth Year {birthYear}</li>
                            <li>Eye Color {eyeColor}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}