import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>
            <h1>I am the Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google method</button>
        </div>
    )
}

export default SignIn;