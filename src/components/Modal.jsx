import {useState} from "react";


const Modal = ({isOpen, isClosed, props}) => {
    if (!isOpen) return null;

    return( 
        <div className="modal-backdrop" onClick={isClosed}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button>Add Favourites</button>
                <button onClick={isClosed}>Close</button>
                <section>
                    {props}
                </section>
            </div>
        </div>
    )
}
export default Modal;
