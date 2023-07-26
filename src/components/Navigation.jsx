import { Link } from "react-router-dom";
import "./Navigation.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import About from "../routes/About";

function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div className="nav">
                <Link to="/">Home</Link>
                <div onClick={handleShow}>About</div>
            </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <About></About>    
        </Modal.Body>
        </Modal>
        
    </>
    )

}

export default Navigation;