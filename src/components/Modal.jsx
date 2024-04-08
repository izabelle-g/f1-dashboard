import {useState} from "react";


const Modal = (props) => {
    const [popUp, setPopUp] = useState(false);
    //opens up the popup
    const isOpen = () => {
        setPopUp(true);
    };
    //close the popup
    const isClosed = () => {
        setPopUp(false);
    }

    if (!isOpen) return null;

    return( 
        <div className="overlay" onClick={isClosed}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
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
