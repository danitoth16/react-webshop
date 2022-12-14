import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/directory/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };


    return (
        <div>
            <h1>I am the Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google method</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;