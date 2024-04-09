const SeasonList = (props) => {
    return(
        <option value={ props.data.year }>{ props.data.year }</option>
    );
};

export default SeasonList