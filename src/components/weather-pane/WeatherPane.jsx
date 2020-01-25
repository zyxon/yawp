import React from 'react';
import PropTypes from 'prop-types';
import { GetWeatherService } from '../../services';
import Spinner from 'react-bootstrap/Spinner';
import WeatherIcon from '../weather-icon';
import WeatherTemp from '../weather-temp';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';

import './WeatherPane.css'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


export default class WeatherPane extends React.Component {
    constructor() {
        super();
        this.getWeatherService = new GetWeatherService();
        this.state = {
            currentWeather: null,
            unit: 'C'
        }
    }


    render() {
        if (this.state.currentWeather) {
            return (
                <Container className='WeatherPane'>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <WeatherIcon weather={this.state.currentWeather} />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <WeatherTemp weather={this.state.currentWeather} unit={this.state.unit} />
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <h3>{this.props.city.cityName}, {this.props.city.stateCounty}, {this.props.city.countryCode}</h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <ToggleButtonGroup className='shadow-none' size="sm" type="radio" name='unit' defaultValue={this.state.unit} onChange={(val) => this.setState({unit: val})}>
                            <ToggleButton className='unit-button' value='C'>
                                °C
                            </ToggleButton>
                            <ToggleButton className='unit-button' value='F'>
                                °F
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                </Container>
            );
        }
        else {
            return (
                <div className='spinner-wrp'>
                    <Spinner animation='grow' variant='dark' />
                    <h3>Loading weather data for {this.props.city.cityName}</h3>
                </div>
            );
        }
    }

    async componentDidMount() {
        console.log('WeatherPane mounted');
        await this.getWeather();
    }

    async componentDidUpdate(prevProps) {
        if (this.props.city.cityName !== prevProps.city.cityName) {
            console.log('WeatherPane updated!');
            await this.getWeather();
        }
    }

    async getWeather() {
        this.setState({ currentWeather: null });
        const weather = await this.getWeatherService.getWeather(this.props.city.cityName);
        console.log(weather);
        if (weather.cityName === this.props.city.cityName) {
            this.setState({
                currentWeather: weather
            });
        }
    }

    static get propTypes() {
        return {
            city: PropTypes.object
        };
    }
}