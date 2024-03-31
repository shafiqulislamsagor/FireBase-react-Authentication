import { signInWithEmailAndPassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import toast from "react-hot-toast";

const Logged = () => {
    const location = useLocation().pathname.replace('/', '').toUpperCase();
    const onSubmitHandle = e => {
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email);
        const password = e.target.password.value;
        console.log(password);
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            toast.success('log-in success ...!!')
        })
    }
    return (
        <div className="w-2/4 mx-auto flex flex-col items-center gap-6">
            <Helmet>
                <title>{location}</title>
            </Helmet>
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={onSubmitHandle}>
                <input className="mb-3 py-2 px-4" type="email" name="email" id="" required /><br />
                <input className="mb-3 py-2 px-4" type="password" name="password" id="" required /><br />
                <input className="btn btn-secondary" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Logged;