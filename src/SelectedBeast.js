import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import React from 'react';

class SelectedBeast extends React.Component{
    render () {
        return (
            <Modal.Dialog >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image fluid='true' src={this.props.imageURL} />
                </Modal.Body>
                <Modal.Footer>
                    <p>{this.props.description}</p>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}

export default SelectedBeast;
