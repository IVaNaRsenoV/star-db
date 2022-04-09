import React, {Component} from 'react';

import Spiner from '../spiner';
import SwapiService from '../../services/swap-services';

import './random-planet.css';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {

    object_new = 'Name';

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval( this.updatePlanet, 100000 );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = ( planet ) => {
        this.setState({
            planet,
            loading: false
        });
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;

        this.swapiService.getPlanet(id)
            .then( this.onPlanetLoaded )
            .catch( this.onError );
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spiner /> : null;
        const content = hasData ? <PlanetView planet = { planet } />: null

        return (
            <div className = 'randomPlanet'>
                { errorMessage }
                { spinner }
                { content }
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <div className = 'randomPlanet__image'>
                <img src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = 'random planet'></img>
            </div>
            <div>
                <div className = 'randomPlanet__header'>
                    <h2>{name}</h2>
                </div>
                <div className = 'randomPlanet__info'>
                    <ul>
                        <li>Population {population}</li>
                        <li>Rotation period {rotationPeriod}</li>
                        <li>Diameter {diameter}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
};