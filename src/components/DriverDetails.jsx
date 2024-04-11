
const DriverDetails = (props) => {
    const link = props.driver.url;
    const date = props.driver.dob;
    const dob = new Date(date)
    const currentDate = new  Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    const month = currentDate.getMonth() - dob.getMonth();

    if( month < 0 || (month === 0 && currentDate.getDate() < dob.getDate() )){
        age--;
    }


    return(    
        <div className="popup-view">
            <h2>Diver Details</h2>
            <p>Name: {props.driver.name} </p>
            <p>DOB: {props.driver.dob}</p>
            <p>Age: {age}</p>
            <p>Nationality: {props.driver.nationality} </p>
            <p><a href={link}>URL</a></p>
        </div>
 
    )
};

 export default DriverDetails