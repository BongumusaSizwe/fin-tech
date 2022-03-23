import { Card, ListGroup, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import mockAPI from '../../common/mockAPI';
import './Profile.css'

const CustomerProfile = () => {
    const { email } = useParams();
    const profile = mockAPI.filter(profile => profile.email === email);
    return (
        <>
            <main >
                <header>
                    <h3>Onboard Customers</h3>
                </header>
                <Container fluid style={{
                    position: 'relative',
                    width: '875px',
                    height: '480px',
                    left: '130px',
                    top: '10px',
                    overflowX: 'hidden',
                    background: '#C4C4C4'
                }}>
                    <div className='grid'>
                        {profile.map(card => (
                            <Card style={{ width: "10px" }} className="box">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Header>{card.first_name}</Card.Header>
                                    <ListGroup>
                                        <ListGroup.Item>Email: {card.email}</ListGroup.Item>
                                        <ListGroup.Item>Date of Birth: {card.dob}</ListGroup.Item>
                                        <ListGroup.Item>Country: {card.country}</ListGroup.Item>
                                        <ListGroup.Item>Status: {card.status}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}

export default CustomerProfile;