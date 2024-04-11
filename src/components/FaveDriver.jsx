const FaveDriver = (props)=> {

    return(
        <div className="fav-drivers">
            <h3>Drivers</h3>
            <ul>
                {props.driver.map((f, index) => {
                    <li key={index}>{f.name} {f.name}</li>
                })}
            </ul>
        </div>
    )
}

export default FaveDriver
