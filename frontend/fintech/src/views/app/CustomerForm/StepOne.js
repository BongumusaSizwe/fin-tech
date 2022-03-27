import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if (validator.isDataURI()) {
            setError(true);
        }
        else {
            nextStep();
        }
    };

    return (
        <div style={{
            width: '50%',
            marginLeft: '25%'
        }}>
            <Card style={{ marginTop: 100 }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID Upload</Form.Label>
                            <Form.Control 
                                name="idupload"
                                type="file"
                                onChange={handleFormData("idupload")}
                             />
                            <Form.Text className="text-muted">
                                Please upload your identity document in a form of jpg, png
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Upload
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default StepOne;