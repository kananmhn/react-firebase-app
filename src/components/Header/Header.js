import React, { useRef } from 'react';
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
    const fileInput = useRef();

    const handleImportClick = () => {
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.show();
    };

    const handleFileUpload = () => {
        const file = fileInput.current.files[0];
        // Handle the file upload here
        console.log(file);
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.hide();
    };

    return (
    
            <header className='header'>
                <div className='row'>
                    <div className='logo text-center'>
                        <a href='/'>
                            <h1>Theme Builder</h1> 
                        </a>
                    </div>
                    <div>
                        <button className="button" onClick={handleImportClick}>Import</button>
                        <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="uploadModalLabel">Upload CSS File</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <input type="file" ref={fileInput} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleFileUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    
};

export default Header;