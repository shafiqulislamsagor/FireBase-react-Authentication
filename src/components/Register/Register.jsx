const Register = () => {
    const onSubmitHandle = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email);
        const password = e.target.password.value;
        console.log(password);
    }
    return (
        <div className="w-2/4 mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={onSubmitHandle}>
                <input className="mb-3 py-2 px-4" type="email" name="email" id="" /><br />
                <input className="mb-3 py-2 px-4" type="password" name="password" id="" /><br />
                <input className="btn btn-secondary" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;