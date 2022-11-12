import {Button, Modal} from 'react-bootstrap';
import {ReactNode} from "react";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    child: ReactNode;
}

const ModalComponent = ({show, onClose, child}: ModalProps) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>인원 추가하기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {child}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onClose}>
                    추가하기
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent;