import SeasonList from "./SeasonList";

const Header = (props) => {
    const handleClick = (e) => props.update(e.target.name);

    const handleChange = (e) => {
        props.update(e.target.value);
    }

    return(
        <div className="header">
            <h2>F1 Dashboard</h2>

            <label htmlFor="seasons">Season</label>
            <select name="seasons" onChange={ handleChange }>
                <option value="">Please select</option>
                { props.seasons.map( s => <SeasonList data={s}/>) }
            </select>

            <button type="button" name="toFavourites" onClick={ handleClick }>Favourites</button>
            <button type="button" name="toAbout" onClick={ handleClick }>About</button>
        </div>
    )
};

export default Header