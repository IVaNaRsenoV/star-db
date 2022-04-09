import React, { Component } from 'react'; // Подключаем React, и достаём Component

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page/people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swap-services';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    // Отлавливаем ошибку
    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        
        if ( this.state.hasError ) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className = 'error-button__block'>
                    <ErrorButton />
                </div>
                <PeoplePage
                    path = {`characters`}
                    getData = { this.swapiService.getAllPeople }
                    getElement = { this.swapiService.getPerson }
                    renderItem = { ( item ) => (<span> { item } <button>!</button></span>) } // Не работает
                    renderIvan = { () => ( <h1>Hello Render!</h1> ) }
                    />
                <PeoplePage
                    path = {`planets`}
                    getData = { this.swapiService.getAllPlanets }
                    getElement = { this.swapiService.getPlanet }
                    />
                <PeoplePage
                    path = {`starships`}
                    getData = { this.swapiService.getAllStarships }
                    getElement = { this.swapiService.getStarhip }
                    />
            </div>
        )
    }   
}
