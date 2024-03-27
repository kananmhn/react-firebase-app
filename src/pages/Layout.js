import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-1.png';

function Layout() {

    const navigate = useNavigate();
    const fileInput = useRef();

    const handleImportClick = () => {
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.show();
    };
    const handleCloseModel = () => {
        let myModalEl = document.getElementById('uploadModal');
        let myModalE2 = document.querySelector('.modal-backdrop');
        myModalEl.classList.remove('show');
        myModalE2.remove();
        myModalEl.setAttribute('aria-hidden', 'true');
        myModalEl.setAttribute('style', 'display: none');
    }
    const handleFileUpload = () => {
        const file = fileInput.current.files[0];
        // Handle the file upload here
        console.log(file);
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.hide();
    };

  return (
    <div className="App mt-5">
            <div className="teamLogo">
                {/*  eslint-disable-next-line */}
                <img src={logo} className="img-fluid" />
            </div>
        <br/>
        <p>Here you go...if you want to change/import theme from here, you can select one of the following options:</p>
        <br/>
        <div className="text-center">
        <div className="flex-wrapper">
            <div onClick={() => navigate("/home")} className="select_base_theme">
                Select Base Theme
            </div>
           
            <div onClick={handleImportClick} className="select_base_theme">
               import a Theme
            </div>
        </div>
        </div>
        <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="uploadModalLabel">Upload CSS File</h5>
                                        <button type="button" onClick={handleCloseModel} className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <input type="file" ref={fileInput} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={handleCloseModel}  className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleFileUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
      </div>
   
  );
}
export default Layout;