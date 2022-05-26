import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlusCircle } from 'react-bootstrap-icons';

function InstructionModal(props){

    const instructionsList = () => {
        return Object.keys(props.instructions).map(num => {
            return (
                <Form.Control key={num} type="text" placeholder={`Step ${num}`} className="instruction"/>
            )
        })
    }

    const addInstruction = (e) => {
        const newIndex = Object.keys(props.instructions).length + 1;
        props.setInstructionsList({...props.instructions, [newIndex]: `Step ${newIndex}`})
    }

    const handleClose = () => {
        props.setInstructionsList({1: ''});
        props.setInstructionModal(false);
    }

    return (
        <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Instructions</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    {instructionsList()}
                    <div className="instructionForm">
                        <PlusCircle onClick={addInstruction} style={{marginLeft: '100%'}}/>
                    </div>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={() => props.setInstructionModal(false)}>Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default InstructionModal;