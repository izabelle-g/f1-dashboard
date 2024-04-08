const LoginForm = (props) => {
    // TODO:  handleClick will need to change once we figure out the login thingy
    const handleClick = (e) => {
        props.update(e.target.name);
    };   

    return(
        <div>
            <h2>Login</h2>

            <form>
                <label for="email">Email</label>
                <input type="email" name="email"/>

                <label for="pass">Password</label>
                <input type="password" name="pass"/>

                <div>
                    <button type="button" name="toDashboard" onClick={ handleClick }>Login</button>
                    <button type="button" name="toRegistration" onClick={ handleClick }>Register</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm