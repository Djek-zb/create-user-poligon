import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import MyTable from './MyTable';
import '../Styles/Styles.css';

const MainPage = () => {

    return (
        <div className='main-page'>
            <MyNavbar />
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={8}>
                        <MyTable />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage;
