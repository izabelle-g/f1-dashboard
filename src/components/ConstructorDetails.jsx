const ConstructorDetails = (props) => {
    const link = props.constructor.url;
    return(    
        <div className="popup-view">
            <h2>Constructor Details</h2>
            <p>Name: {props.constructor.name} </p>
            <p>Nationality: {props.constructor.nationality} </p>
            <p><a href={link}>URL</a></p>

        </div>
 
    )
};
 export default ConstructorDetails