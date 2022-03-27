import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function CustomerForm() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        id_link: "",
        video_link: "",
        passport: "",
        nationality: "",
        cor: "",
        phone_number: "",
        address: "",
        occupation: "",
        dob: ""
    })

    const nextStep = () => {
        setStep(step + 1);
    };

    const handleInputData = input => e => {
        const { value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }


    switch (step) {
        case 1:
            return (
                <div className="customer">
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )

        case 2:
            return (
                <div className="customer">
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                                <StepTwo nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )

        case 3:
            return (
                <div className="customer">
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                                <StepThree nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )

        default:
            return (
                <div className="customer">
                    <p> Invalid registration link, please contact the administrator</p>
                </div>
            )
    }
}

export default CustomerForm;