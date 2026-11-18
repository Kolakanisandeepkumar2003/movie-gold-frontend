
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, defaultValues, labelText }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextArea1">
                <Form.Label>{labelText}</Form.Label>

                <Form.Control
                    ref={revText}
                    as="textarea"
                    rows={3}
                    defaultValue={defaultValues}
                />
            </Form.Group>

            <Button className="mb-2" variant="outline-info" onClick={handleSubmit}>
                Submit
            </Button>
        </>
    );
};

export default ReviewForm;
