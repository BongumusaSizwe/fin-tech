import React from "react";
import { Form, Button } from "react-bootstrap";

const StepOne = () => {
    return (
        <div style={{
            width: '50%',
            marginLeft: '25%'
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID Upload</Form.Label>
                    <Form.Control type="file" />
                    <Form.Text className="text-muted">
                        Please upload your identity document in a form of jpg, png
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
        </div>
    );
};

export default StepOne;