import React from 'react';
import PropTypes from 'prop-types';

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudSun, faCloudSunRain, faCloudShowersHeavy, faCloudRain, faCloudMoonRain, faSnowflake, faCloudMoon, faMoon, faBug } from '@fortawesome/free-solid-svg-icons'

import './WeatherIcon.css'



export default class WeatherIcon extends React.Component {
    constructor() {
        super();

        fontawesome.library.add(
            faCloud, faSun, faCloudSun, faCloudSunRain, faCloudShowersHeavy, faCloudRain, faCloudMoonRain, faSnowflake, faCloudMoon, faMoon, faBug
        );
    }
    
    render() {
        return (
            <h1 className='WeatherIcon'><FontAwesomeIcon icon={this.getIconClass(this.props.weather)}/></h1>
        );
    }

    getIconClass(weather) {
        const isCold = weather.temp < 0;

        if (weather.isCloudy && !weather.isSunny && !weather.isRainy) {
            return 'cloud';
        }
        else if (weather.isSunny && !weather.isCloudy) {
            return 'sun';
        }
        else if (weather.isSunny && weather.isCloudy && !weather.isRainy) {
            return 'cloud-sun';
        }
        else if (weather.isSunny && weather.isRainy && !weather.isRainBig) {
            return 'cloud-sun-rain';
        }
        else if (weather.isRainy && weather.isRainBig) {
            return 'cloud-showers-heavy';
        }
        else if (!weather.isSunny && !isCold && weather.isRainy) {
            return 'cloud-rain';
        }
        else if (weather.isDark && weather.isRainy) {
            return 'cloud-moon-rain';
        }
        else if (isCold && weather.isRainy) {
            return 'snowflake';
        }
        else if (weather.isDark && weather.isCloudy && !weather.isRainy) {
            return 'cloud-moon';
        }
        else if (weather.isDark && !weather.isCloudy) {
            return 'moon'
        }
        else {
            return 'bug'
        }
    }

    static get propTypes() {
        return {
            weather: PropTypes.object
        };
    }
}