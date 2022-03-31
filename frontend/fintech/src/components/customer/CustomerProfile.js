import { Card, ListGroup, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import mockAPI from '../../common/mockAPI';
import './Profile.css'

const CustomerProfile = () => {
    const { email } = useParams();
    const profile = mockAPI.filter(profile => profile.email === email);
    console.log(profile)
    return (
        <>
            <Row>
                <div className='grid'>
                    {profile.map(card => (
                        <Card style={{ width: "4px" }} className="pbox">
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
            </Row>
        </>
    );
}

export default CustomerProfile;