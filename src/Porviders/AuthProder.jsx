import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firbaes/firbase.config";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext(null)

const AuthProder = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Loding, setLoding] = useState(true)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const SingInUser = (email, password) => {
        return signInWithEmailAndPassword(auth , email, password);
      };
      


    const useInfo = {
        user,
        Loding,
        createUser,
        SingInUser
    }

    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProder.propTypes = {
    children: PropTypes.string.isRequired,
}

export default AuthProder;