
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import client from '../client';
import { useState } from 'react';
const ReviewModal = (props) => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        client.create({
            _type: 'review',
            name: name,
            reviewMessage: message,
        }).then(props.onHide)
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Lämna ett omdöme
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group>
                        <Form.Label>Namn</Form.Label>
                        <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Omdöme</Form.Label>
                        <Form.Control as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Modal.Footer>
            </Form>
        </Modal >
    )
}
export default ReviewModal