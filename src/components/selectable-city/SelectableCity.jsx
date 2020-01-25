import React from 'react';
import PropTypes from 'prop-types';
import './SelectableCity.css'

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';

export default class SelectableCity extends React.Component {
    constructor() {
        super();
        fontawesome.library.add(faCity);
    }
    render() {
        const handleClick = () => {
            this.props.onClick(this.props.name);
        }
        return (
            <Button className='SelectableCity' onClick={handleClick} variant={this.props.isActive ? 'primary' : 'light'}>
                <i className='fa-left'><FontAwesomeIcon icon='city' /></i>
                <span>{this.props.name}</span>
            </Button>
        );
    }

    static get propTypes() {
        return {
            isActive: PropTypes.bool,
            name: PropTypes.string,
            onClick: PropTypes.func
        };
    }
}