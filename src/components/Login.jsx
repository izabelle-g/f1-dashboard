import LoginForm from './LoginForm.jsx'

const Login = (props) => {
    return(
        <section>
            <h1>Your Application Name</h1>

            <LoginForm update={ props.update }/>
        </section>
    );
};

export default Login