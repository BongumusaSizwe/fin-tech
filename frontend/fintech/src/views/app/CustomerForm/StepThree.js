import React from "react";
import { Form, Button } from "react-bootstrap";

const StepThree = () => {
    return (
        <div style={{
            width: '50%',
            marginLeft: '25%'
        }}>
            <Form>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Passport" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Nationality" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Country of Residence" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Occupation" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control type="date" />
                    <Form.Text>
                        Please enter your date of birth above.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default StepThree;