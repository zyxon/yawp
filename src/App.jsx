import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import WeatherPane from './components/weather-pane';
import About from './components/about'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Spinner from 'react-bootstrap/Spinner';

import { GetCitiesService } from './services';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedCity: null,
			allCities: null
		};

		this.getCitiesService = new GetCitiesService();
	}

	async componentDidMount() {
		const allCities = (await this.getCitiesService.getCities()).res;
		this.setState({ allCities, selectedCity: allCities[0] });
	}

	render() {
		if (this.state.allCities && this.state.selectedCity) {
			const onSelectedCityChange = (cityName) => {
				console.log('selected city: ' + cityName);
				this.setState({ selectedCity: this.state.allCities.find(city => city.cityName === cityName) });
			}
			return (
				<>
				<Container fluid="true" className='App'>
					<Row>
						<Col md="3">
							<Sidebar
								cities={this.state.allCities.map(city => city.cityName)}
								defaultCity={this.state.selectedCity.cityName}
								onSelectedCityChange={onSelectedCityChange}
							/>
						</Col>
						<Col md="9">
							<WeatherPane
								city={this.state.allCities.find(city => city.cityName === this.state.selectedCity.cityName)}
							/>
						</Col>
					</Row>
				</Container>
				<About/>
				</>
			);
		} else {
			return (
				<div className='spinner-wrp'>
					<Spinner className='BigSpinner' animation='border' variant='dark' size='xl'/>
					<h2>Loading App</h2>
				</div>
			)
		}
	}
}
