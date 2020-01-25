import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './About.css';
import Container from 'react-bootstrap/Container';
import { Table, Badge } from 'react-bootstrap';

export default class About extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
            clicked: false
        };
    }

    render() {
        return (
            <>
                <div className='About'>
                    <Button onClick={() => this.setState({ showModal: true, clicked: true })} variant='outline-info'>
                        About <Badge style={{display: this.state.clicked ? 'none' : 'inline-block'}} variant='danger'>!</Badge>
                    </Button>
                </div>

                <Modal
                    show={this.state.showModal}
                    onHide={() => this.setState({ showModal: false })}
                    size="md"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>About</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Table borderless size='sm'>
                                <tbody>
                                    <tr>
                                        <td><b>App name</b></td>
                                        <td>yawp (yet another weather app)</td>
                                    </tr>
                                    <tr>
                                        <td><b>Version</b></td>
                                        <td>v0.1b</td>
                                    </tr>
                                    <tr>
                                        <td><b>Author</b></td>
                                        <td>jschneider</td>
                                    </tr>
                                    <tr>
                                        <td><b>Company</b></td>
                                        <td>Graphisoft SE Web guild</td>
                                    </tr>
                                    <tr>
                                        <td><b>Contact</b></td>
                                        <td>jschneider kukac graphisoft pontcom</td>
                                    </tr>
                                    <tr>
                                        <td><b>License</b></td>
                                        <td>CC BY-SA 3.0</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={() => this.setState({showModal: false})}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        );
    }
}