import { api } from "./api";
import jwtDecode from "jwt-decode";

const USER_KEY = "@user";

export const signIn = (user) => {

    localStorage.setItem(USER_KEY, JSON.stringify(user));
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

};

export const signOut = () => {
    localStorage.removeItem(USER_KEY);
    api.defaults.headers.common["Authorization"] = undefined;

}

export const getUser = () => {
    const {student} = JSON.parse(localStorage.getItem(USER_KEY));

    return student;
}

export const setUser = (student) => {
    const user = JSON.parse(localStorage.getItem(USER_KEY))

    user.student = student;

    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const isSignedIn = () => {
    const user = JSON.parse(localStorage.getItem(USER_KEY))

    if(user && user.token){
        
        const jwtDecoded = jwtDecode(user.token);
        console.log(jwtDecoded)

        const currentTime = (Date.now() / 1000) | 0;

        if(jwtDecoded.exp < currentTime){
            return signOut();
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        return true;

    }
    return false;
}