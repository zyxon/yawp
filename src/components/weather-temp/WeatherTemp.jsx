import React from 'react';
import PropTypes from 'prop-types';


export default class WeatherTemp extends React.Component {
    render() {
        return (
            <h1 className='WeatherTemp'>
                <span>{this.calculateTemp()}</span>
            </h1>
        );
    }

    calculateTemp() {
        let temp = this.props.weather.temp;
        if (this.props.unit === 'F') {
            // convert
            temp = temp * (9.0/5.0) + 32;
        }
        temp = Math.round(temp * 10) / 10;
        return `${temp}°${this.props.unit}`
    }

    static get propTypes() {
        return {
            weather: PropTypes.object,
            unit: PropTypes.string
        };
    }
}