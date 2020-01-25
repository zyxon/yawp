import React from 'react';
import SelectableCity from '../selectable-city/SelectableCity';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default class Sidebar extends React.Component {
    constructor() {
        super();

        this.state = {
            activeCity: null
        };
    }

    render() {
        const handleSelect = cityName => {
            this.setState({ activeCity: cityName }, () => {
                this.props.onSelectedCityChange(this.state.activeCity);
            });
        }

        return (
            <ButtonGroup vertical style={{display: 'flex'}}>
                {
                    this.props.cities.map((value, index) => {
                        return <SelectableCity name={value} key={index} onClick={handleSelect} isActive={this.isActiveCity(value)} />
                    })
                }
            </ButtonGroup>
        );
    }

    isActiveCity(city) {
        if (this.state.activeCity && this.state.activeCity === city) {
            return true
        }
        if (!this.state.activeCity && this.props.defaultCity === city) {
            return true;
        }
        return false;
    }

    static get propTypes() {
        return {
            onSelectedCityChange: PropTypes.func,
            defaultCity: PropTypes.string,
            cities: PropTypes.array
        };
    }


}