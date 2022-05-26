import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlusCircle } from 'react-bootstrap-icons';

function InstructionModal(props){

    const instructionsList = () => {
        return props.instructions.map((instruction, i) => {
            return (
                <Form.Control key={i} type="text" placeholder={instruction || `Step ${i + 1}`} className="instruction"/>
            )
        })
    }

    const addInstruction = (e) => {
        const instructions = e.target
        let newList = [];
        for(let i = 0; i < instructions.length - 2; i++)
            newList.push(e.target[i].value);

        props.setInstructionsList(newList);
        
    }

    const addNewLine = () => {
        const newIndex = props.instructions.length + 1;
        props.setInstructionsList([...props.instructions, `Step ${newIndex}`]);
    }

    const handleClose = () => {
        props.setInstructionModal(false);
    }

    const handleSave = (e) => {
        e.preventDefault();
        addInstruction(e);
        props.setInstructionModal(false);
    }

    return (
        <Form onSubmit={handleSave}>
            <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Instructions</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {instructionsList()}
                    <div className="instructionForm">
                        <PlusCircle onClick={addNewLine} style={{marginLeft: '100%'}}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" type="submit">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Form>
    )
}

export default InstructionModal;