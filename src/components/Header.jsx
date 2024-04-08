import SeasonList from "./SeasonList";

const Header = (props) => {
    const handleClick = (e) => {
        props.update(e.target.name);
    };

    const handleChange = (e) => {
        // what does a select give back??  is it option?
    };

    return(
        <div>
            <h2>F1 Dashboard</h2>

            <label for="seasons">Season</label>
            <select name="seasons">

            </select>

            <button type="button" name="toFavourites" onClick={ handleClick }>Favourites</button>
            <button type="button" name="toAbout" onClick={ handleClick }>About</button>
        </div>
    )
};

export default Header