import React, { Component } from 'react';
import Spiner from '../spiner';

import './person-details.css';


export default class PersonDetails extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;
            getData().then( ( itemList ) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map( ( item ) => {

            const { id } = item;

            const label = this.props.children(item);
            console.log('children ', this.props.children(item));
            console.log(item)

            return (
                <li key = {id}
                    onClick = { () => this.props.onItemSelected(id) }
                    >
                    {label}
                </li>
            )
        })
    }

    render () {
        const { itemList } = this.state;
        if(!itemList) {
            return <Spiner />
        }

        const items = this.renderItems(itemList);

        return (
            <div className = 'people'>
            <ul>
                { items }
            </ul>
        </div>
        )
    }
}